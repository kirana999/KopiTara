import React, { useEffect, useRef, useCallback } from 'react';
import '../styles/CinematicHero.css';

// ─────────────────────────────────────────────────────────────────────────────
//  CINEMATIC HERO — Frame-by-frame scroll-driven canvas animation
//  Inspired by Apple / Tesla / DJI product pages
// ─────────────────────────────────────────────────────────────────────────────

const TOTAL_FRAMES = 120;          // Number of frames to extract from video
const SCROLL_HEIGHT_VH = 300;      // Total scroll height in vh
const FRAME_THROTTLE_MS = 16;      // ~60fps

// Timeline milestones (0–1 progress)
const TIMELINE = {
  videoStart:     0.00,
  logoFadeIn:     0.15,
  headlineFadeIn: 0.25,
  subtitleFadeIn: 0.35,
  descFadeIn:     0.45,
  ctaFadeIn:      0.60,
  particleStart:  0.75,
  zoomIn:         0.85,
  heroEnd:        1.00,
};

// ─── Utility: linear interpolation ───────────────────────────────────────────
function lerp(a, b, t) { return a + (b - a) * t; }

// ─── Utility: map a value in one range to another, clamped ───────────────────
function mapRange(value, inMin, inMax, outMin, outMax) {
  const t = Math.max(0, Math.min(1, (value - inMin) / (inMax - inMin)));
  return lerp(outMin, outMax, t);
}

// ─── Extract a given number of frames from a <video> element ─────────────────
function extractFrames(video, count, onProgress) {
  return new Promise((resolve) => {
    const frames = [];
    const offscreen = document.createElement('canvas');
    const ctx = offscreen.getContext('2d');
    let captured = 0;

    offscreen.width  = video.videoWidth  || 1920;
    offscreen.height = video.videoHeight || 1080;

    const duration = video.duration;

    function captureFrame(index) {
      if (index >= count) {
        resolve(frames);
        return;
      }

      const time = (index / (count - 1)) * duration;
      video.currentTime = time;
    }

    video.addEventListener('seeked', function onSeeked() {
      ctx.drawImage(video, 0, 0, offscreen.width, offscreen.height);
      const img = new Image();
      img.src = offscreen.toDataURL('image/jpeg', 0.82);
      frames.push(img);
      captured++;
      if (onProgress) onProgress(captured / count);
      captureFrame(captured);
    }, { passive: true });

    // Kick off
    video.addEventListener('loadedmetadata', () => captureFrame(0), { once: true });
    if (video.readyState >= 1) captureFrame(0);
  });
}

// ─────────────────────────────────────────────────────────────────────────────
//  Particle system for floating coffee beans / dust
// ─────────────────────────────────────────────────────────────────────────────
class Particle {
  constructor(canvasW, canvasH) {
    this.reset(canvasW, canvasH);
  }

  reset(w, h) {
    this.x    = Math.random() * w;
    this.y    = Math.random() * h;
    this.size = Math.random() * 4 + 1.5;
    this.vx   = (Math.random() - 0.5) * 0.4;
    this.vy   = -(Math.random() * 0.6 + 0.2);  // drift upwards
    this.life = Math.random();                   // 0..1 lifecycle
    this.decay = Math.random() * 0.003 + 0.001;
    this.color = `hsl(${32 + Math.random() * 20}, ${60 + Math.random() * 30}%, ${60 + Math.random() * 20}%)`;
    this.w = w;
    this.h = h;
  }

  update() {
    this.x   += this.vx;
    this.y   += this.vy;
    this.life -= this.decay;
    if (this.life <= 0 || this.y < -20) {
      this.reset(this.w, this.h);
      this.y = this.h + 10;
    }
  }

  draw(ctx, alpha) {
    ctx.save();
    ctx.globalAlpha = Math.min(alpha, this.life) * 0.85;
    ctx.beginPath();
    ctx.ellipse(this.x, this.y, this.size, this.size * 1.5, this.life * Math.PI, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
  }
}

// ─────────────────────────────────────────────────────────────────────────────
//  Smoke / steam wisps
// ─────────────────────────────────────────────────────────────────────────────
class SmokeWisp {
  constructor(w, h) {
    this.w = w; this.h = h;
    this.respawn();
  }

  respawn() {
    this.x    = this.w * 0.5 + (Math.random() - 0.5) * 120;
    this.y    = this.h * 0.6;
    this.radius = Math.random() * 30 + 15;
    this.vx   = (Math.random() - 0.5) * 0.5;
    this.vy   = -(Math.random() * 1.2 + 0.5);
    this.life = 1;
    this.decay = Math.random() * 0.004 + 0.002;
  }

  update() {
    this.x    += this.vx;
    this.y    += this.vy;
    this.radius += 0.5;
    this.life  -= this.decay;
    if (this.life <= 0) this.respawn();
  }

  draw(ctx, alpha) {
    ctx.save();
    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
    gradient.addColorStop(0, `rgba(255, 240, 220, ${Math.min(alpha, this.life) * 0.18})`);
    gradient.addColorStop(1, 'rgba(255, 240, 220, 0)');
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.restore();
  }
}

// ─────────────────────────────────────────────────────────────────────────────
//  Main Component
// ─────────────────────────────────────────────────────────────────────────────
const CinematicHero = () => {
  const sectionRef      = useRef(null);
  const stickyRef       = useRef(null);
  const canvasRef       = useRef(null);
  const overlayCanvasRef = useRef(null);
  const framesRef       = useRef([]);
  const particlesRef    = useRef([]);
  const smokesRef       = useRef([]);
  const progressRef     = useRef(0);
  const rafRef          = useRef(null);
  const lastFrameRef    = useRef(-1);
  const gsapRef         = useRef(null);
  const isLoadedRef     = useRef(false);
  const loadingRef      = useRef(null);
  const loadingBarRef   = useRef(null);
  const loadingTextRef  = useRef(null);

  // Content refs for timeline control
  const logoRef     = useRef(null);
  const headlineRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef     = useRef(null);
  const ctaRef      = useRef(null);
  const vignetteRef = useRef(null);

  // ─── Render a single frame onto the canvas ─────────────────────────────────
  const renderFrame = useCallback((progress) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const frames = framesRef.current;
    if (!frames.length) return;

    const frameIndex = Math.round(progress * (frames.length - 1));
    const frame = frames[Math.max(0, Math.min(frameIndex, frames.length - 1))];

    if (!frame || !frame.complete) return;

    // Draw the video frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Zoom effect at the end (85–100%)
    const zoomScale = mapRange(progress, TIMELINE.zoomIn, TIMELINE.heroEnd, 1, 1.06);
    const tx = canvas.width  * 0.5 * (1 - zoomScale);
    const ty = canvas.height * 0.5 * (1 - zoomScale);

    ctx.save();
    ctx.translate(tx, ty);
    ctx.scale(zoomScale, zoomScale);
    ctx.drawImage(frame, 0, 0, canvas.width, canvas.height);
    ctx.restore();

    // ── Warm golden color grading overlay ──
    ctx.save();
    ctx.fillStyle = 'rgba(100, 50, 10, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();

    // ── Soft vignette ──
    const vignette = ctx.createRadialGradient(
      canvas.width * 0.5, canvas.height * 0.5, canvas.height * 0.2,
      canvas.width * 0.5, canvas.height * 0.5, canvas.height * 0.85
    );
    vignette.addColorStop(0, 'rgba(0,0,0,0)');
    vignette.addColorStop(1, 'rgba(0,0,0,0.55)');
    ctx.save();
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();

    // ── Sunray effect (appears from ~30% progress) ──
    const rayAlpha = mapRange(progress, 0.25, 0.50, 0, 0.12);
    if (rayAlpha > 0) {
      ctx.save();
      ctx.globalAlpha = rayAlpha;
      for (let i = 0; i < 6; i++) {
        const angle = -0.6 + i * 0.22;
        const gradient = ctx.createLinearGradient(
          canvas.width * 0.3, 0,
          canvas.width * 0.3 + Math.cos(angle) * canvas.width,
          canvas.height
        );
        gradient.addColorStop(0, 'rgba(255, 220, 150, 0.4)');
        gradient.addColorStop(1, 'rgba(255, 200, 100, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      ctx.restore();
    }

    lastFrameRef.current = frameIndex;
  }, []);

  // ─── Update overlay canvas with particles & smoke ──────────────────────────
  const renderOverlay = useCallback((progress, timestamp) => {
    const canvas = overlayCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Particles (coffee beans / dust) — appear at 75%
    const particleAlpha = mapRange(progress, TIMELINE.particleStart, 0.90, 0, 1);
    if (particleAlpha > 0 && particlesRef.current.length > 0) {
      particlesRef.current.forEach(p => {
        p.update();
        p.draw(ctx, particleAlpha);
      });
    }

    // Smoke wisps — appear at 40%
    const smokeAlpha = mapRange(progress, 0.40, 0.70, 0, 1);
    if (smokeAlpha > 0 && smokesRef.current.length > 0) {
      smokesRef.current.forEach(s => {
        s.update();
        s.draw(ctx, smokeAlpha);
      });
    }
  }, []);

  // ─── Update DOM content opacity/transform based on progress ────────────────
  const updateContent = useCallback((progress) => {
    const setStyle = (ref, style) => {
      if (ref.current) Object.assign(ref.current.style, style);
    };

    // Logo
    const logoAlpha = mapRange(progress, TIMELINE.logoFadeIn, TIMELINE.logoFadeIn + 0.08, 0, 1);
    const logoY     = mapRange(progress, TIMELINE.logoFadeIn, TIMELINE.logoFadeIn + 0.08, 20, 0);
    setStyle(logoRef, { opacity: logoAlpha, transform: `translateY(${logoY}px)` });

    // Headline
    const hlAlpha = mapRange(progress, TIMELINE.headlineFadeIn, TIMELINE.headlineFadeIn + 0.08, 0, 1);
    const hlY     = mapRange(progress, TIMELINE.headlineFadeIn, TIMELINE.headlineFadeIn + 0.08, 30, 0);
    const hlBlur  = mapRange(progress, TIMELINE.headlineFadeIn, TIMELINE.headlineFadeIn + 0.08, 8, 0);
    setStyle(headlineRef, { opacity: hlAlpha, transform: `translateY(${hlY}px)`, filter: `blur(${hlBlur}px)` });

    // Subtitle
    const stAlpha = mapRange(progress, TIMELINE.subtitleFadeIn, TIMELINE.subtitleFadeIn + 0.08, 0, 1);
    const stY     = mapRange(progress, TIMELINE.subtitleFadeIn, TIMELINE.subtitleFadeIn + 0.08, 25, 0);
    setStyle(subtitleRef, { opacity: stAlpha, transform: `translateY(${stY}px)` });

    // Description
    const dsAlpha = mapRange(progress, TIMELINE.descFadeIn, TIMELINE.descFadeIn + 0.08, 0, 1);
    const dsY     = mapRange(progress, TIMELINE.descFadeIn, TIMELINE.descFadeIn + 0.08, 20, 0);
    setStyle(descRef, { opacity: dsAlpha, transform: `translateY(${dsY}px)` });

    // CTA
    const ctaAlpha = mapRange(progress, TIMELINE.ctaFadeIn, TIMELINE.ctaFadeIn + 0.08, 0, 1);
    const ctaY     = mapRange(progress, TIMELINE.ctaFadeIn, TIMELINE.ctaFadeIn + 0.08, 20, 0);
    const ctaScale = mapRange(progress, TIMELINE.ctaFadeIn, TIMELINE.ctaFadeIn + 0.08, 0.92, 1);
    setStyle(ctaRef, { opacity: ctaAlpha, transform: `translateY(${ctaY}px) scale(${ctaScale})` });

    // Hero fade-out at the very end
    const heroFadeOut = mapRange(progress, 0.92, 1.0, 1, 0);
    if (stickyRef.current) {
      stickyRef.current.style.opacity = heroFadeOut;
    }
  }, []);

  // ─── Main animation loop ────────────────────────────────────────────────────
  const animate = useCallback((timestamp) => {
    const progress = progressRef.current;
    renderFrame(progress);
    renderOverlay(progress, timestamp);
    updateContent(progress);
    rafRef.current = requestAnimationFrame(animate);
  }, [renderFrame, renderOverlay, updateContent]);

  // ─── Scroll handler ─────────────────────────────────────────────────────────
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let lastScrollTime = 0;

    const onScroll = () => {
      const now = performance.now();
      if (now - lastScrollTime < FRAME_THROTTLE_MS) return;
      lastScrollTime = now;

      const rect    = section.getBoundingClientRect();
      const total   = section.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      progressRef.current = Math.max(0, Math.min(1, scrolled / total));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ─── Canvas resize handler ──────────────────────────────────────────────────
  const resizeCanvases = useCallback(() => {
    const canvas  = canvasRef.current;
    const overlay = overlayCanvasRef.current;
    if (!canvas || !overlay) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width  = w; canvas.height  = h;
    overlay.width = w; overlay.height = h;

    // Re-populate particles based on new size
    particlesRef.current = Array.from({ length: 60 }, () => new Particle(w, h));
    smokesRef.current    = Array.from({ length: 15 }, () => new SmokeWisp(w, h));
  }, []);

  // ─── Bootstrap: extract frames then start animation ────────────────────────
  useEffect(() => {
    resizeCanvases();
    window.addEventListener('resize', resizeCanvases);

    const video = document.createElement('video');
    video.src   = '/hero.mp4';
    video.muted = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.crossOrigin = 'anonymous';
    video.style.display = 'none';
    document.body.appendChild(video);

    const onReady = async () => {
      if (loadingTextRef.current) loadingTextRef.current.textContent = 'Loading cinematic frames…';
      const frames = await extractFrames(video, TOTAL_FRAMES, (p) => {
        if (loadingBarRef.current) {
          loadingBarRef.current.style.width = `${Math.round(p * 100)}%`;
        }
        if (loadingTextRef.current) {
          loadingTextRef.current.textContent = `Loading… ${Math.round(p * 100)}%`;
        }
      });

      framesRef.current = frames;
      isLoadedRef.current = true;
      document.body.removeChild(video);

      // Hide loading screen with a fade
      if (loadingRef.current) {
        loadingRef.current.style.transition = 'opacity 0.8s ease';
        loadingRef.current.style.opacity    = '0';
        setTimeout(() => {
          if (loadingRef.current) loadingRef.current.style.display = 'none';
        }, 800);
      }

      // Start animation loop
      rafRef.current = requestAnimationFrame(animate);
    };

    video.addEventListener('loadedmetadata', onReady, { once: true });
    video.load();

    return () => {
      window.removeEventListener('resize', resizeCanvases);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (document.body.contains(video)) document.body.removeChild(video);
    };
  }, [resizeCanvases, animate]);

  // ─────────────────────────────────────────────────────────────────────────
  //  Render
  // ─────────────────────────────────────────────────────────────────────────
  return (
    <section
      ref={sectionRef}
      className="cinematic-section"
      style={{ height: `${SCROLL_HEIGHT_VH}vh` }}
    >
      {/* ── Loading Screen ── */}
      <div ref={loadingRef} className="cinematic-loading">
        <div className="cl-inner">
          <div className="cl-logo">
            <span className="cl-logo-text">KAPAL OTOK-OTOK</span>
            <span className="cl-logo-sub">100% Robusta Kerinci</span>
          </div>
          <div className="cl-bar-track">
            <div ref={loadingBarRef} className="cl-bar-fill" />
          </div>
          <p ref={loadingTextRef} className="cl-text">Initializing…</p>
        </div>
      </div>

      {/* ── Sticky viewport ── */}
      <div ref={stickyRef} className="cinematic-sticky">

        {/* Base video frame canvas */}
        <canvas ref={canvasRef} className="cinematic-canvas" />

        {/* Overlay canvas (particles, smoke) */}
        <canvas ref={overlayCanvasRef} className="cinematic-canvas cinematic-canvas--overlay" />

        {/* ── Content layers ── */}
        <div className="cinematic-content">

          {/* Logo */}
          <div ref={logoRef} className="ch-logo" style={{ opacity: 0 }}>
            <div className="ch-logo-mark">☕</div>
            <div className="ch-logo-name">KOPI TARA</div>
          </div>

          {/* Headline */}
          <h1 ref={headlineRef} className="ch-headline" style={{ opacity: 0 }}>
            Kapal Otok-Otok
          </h1>

          {/* Subtitle */}
          <p ref={subtitleRef} className="ch-subtitle" style={{ opacity: 0 }}>
            100% Robusta Kerinci
          </p>

          {/* Description */}
          <p ref={descRef} className="ch-desc" style={{ opacity: 0 }}>
            Digiling dari biji kopi pilihan dengan cita rasa<br />
            khas dataran tinggi Kerinci.
          </p>

          {/* CTA */}
          <div ref={ctaRef} className="ch-cta-wrap" style={{ opacity: 0 }}>
            <a href="/katalog" className="ch-cta-btn" id="hero-cta-btn">
              <span>Pesan Sekarang</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="ch-scroll-hint" id="hero-scroll-hint">
            <span>Scroll to explore</span>
            <div className="ch-scroll-line" />
          </div>
        </div>

        {/* Cinematic letterbox bars */}
        <div className="cinematic-letterbox cinematic-letterbox--top" />
        <div className="cinematic-letterbox cinematic-letterbox--bottom" />
      </div>
    </section>
  );
};

export default CinematicHero;
