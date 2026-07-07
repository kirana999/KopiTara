import React, { useEffect, useRef, useCallback } from 'react';
import '../styles/CinematicHero.css';

// ─────────────────────────────────────────────────────────────────────────────
//  CINEMATIC HERO — Clean Image Sequence Scrubber
//  Exactly matches the provided video frames, synced to scroll.
//  No extra text, no color grading, no zoom, no letterbox, just the raw video.
// ─────────────────────────────────────────────────────────────────────────────

const TOTAL_FRAMES    = 60;
const SCROLL_HEIGHT_VH = 400;
const FRAME_PATH = (i) => `/frames/frame_${String(i + 1).padStart(4, '0')}.jpg`;

function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

// ─── Load all frames in parallel batches ─────────────────────────────────────
function loadFrames(count, onProgress) {
  return new Promise((resolve) => {
    const images = new Array(count).fill(null);
    let loaded   = 0;
    const BATCH  = 8;

    function batch(start) {
      const end = Math.min(start + BATCH, count);
      const pending = [];
      for (let i = start; i < end; i++) {
        pending.push(new Promise((res) => {
          const img     = new Image();
          img.decoding  = 'async';
          img.src       = FRAME_PATH(i);
          img.onload  = () => { images[i] = img; loaded++; onProgress && onProgress(loaded / count); res(); };
          img.onerror = () => {                  loaded++; onProgress && onProgress(loaded / count); res(); };
        }));
      }
      Promise.all(pending).then(() => end < count ? batch(end) : resolve(images.filter(Boolean)));
    }
    batch(0);
  });
}

const CinematicHero = () => {
  const sectionRef   = useRef(null);
  const stickyRef    = useRef(null);
  const mainCanRef   = useRef(null);
  const framesRef    = useRef([]);
  const progressRef  = useRef(0);
  const rafRef       = useRef(null);
  const scrollHintRef = useRef(null);
  const loadingRef   = useRef(null);
  const loadBarRef   = useRef(null);
  const loadTextRef  = useRef(null);

  // ── Render frame (cover object-fit equivalent) ───────────────────────────
  const paintFrame = useCallback((p) => {
    const cv  = mainCanRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    const W   = cv.width, H = cv.height;
    const frames = framesRef.current;
    if (!frames.length) return;

    const fi    = clamp(Math.round(p * (frames.length - 1)), 0, frames.length - 1);
    const frame = frames[fi];
    if (!frame || !frame.complete) return;

    ctx.clearRect(0, 0, W, H);

    // Calculate dimensions to cover the canvas (like object-fit: cover)
    const imgRatio = frame.width / frame.height;
    const canRatio = W / H;
    let dw, dh, dx, dy;

    if (canRatio > imgRatio) {
      dw = W;
      dh = W / imgRatio;
    } else {
      dh = H;
      dw = H * imgRatio;
    }
    
    dx = (W - dw) / 2;
    dy = (H - dh) / 2;

    ctx.drawImage(frame, dx, dy, dw, dh);
  }, []);

  // ── Main RAF loop ──────────────────────────────────────────────────────────
  const loop = useCallback(() => {
    const p = progressRef.current;
    paintFrame(p);

    if (scrollHintRef.current)
      scrollHintRef.current.style.opacity = Math.max(1 - p * 20, 0); // Fade out quickly
    
    // Fade out hero section slightly at the very end to transition
    if (stickyRef.current)
      stickyRef.current.style.opacity = Math.max(1 - Math.max(0, (p - 0.95) * 20), 0);

    rafRef.current = requestAnimationFrame(loop);
  }, [paintFrame]);

  // ── Scroll ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const onScroll = () => {
      const total = section.offsetHeight - window.innerHeight;
      progressRef.current = clamp(-section.getBoundingClientRect().top / total, 0, 1);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Resize canvas ─────────────────────────────────────────────────────────
  const resizeAll = useCallback(() => {
    const W = window.innerWidth, H = window.innerHeight;
    if (mainCanRef.current) { 
      mainCanRef.current.width = W; 
      mainCanRef.current.height = H; 
    }
    // Force a repaint on resize
    paintFrame(progressRef.current);
  }, [paintFrame]);

  // ── Bootstrap ────────────────────────────────────────────────────────────
  useEffect(() => {
    resizeAll();
    window.addEventListener('resize', resizeAll);

    // Load frames
    loadFrames(TOTAL_FRAMES, (prog) => {
      if (loadBarRef.current)  loadBarRef.current.style.width  = `${Math.round(prog * 100)}%`;
      if (loadTextRef.current) loadTextRef.current.textContent = `Loading… ${Math.round(prog * 100)}%`;
    }).then((frames) => {
      framesRef.current = frames;

      // Hide loading screen
      if (loadingRef.current) {
        loadingRef.current.style.transition = 'opacity 0.9s ease';
        loadingRef.current.style.opacity    = '0';
        setTimeout(() => { if (loadingRef.current) loadingRef.current.style.display = 'none'; }, 900);
      }

      rafRef.current = requestAnimationFrame(loop);
    });

    return () => {
      window.removeEventListener('resize', resizeAll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [resizeAll, loop]);

  return (
    <section
      ref={sectionRef}
      className="cinematic-section"
      style={{ height: `${SCROLL_HEIGHT_VH}vh` }}
    >
      {/* Loading Screen */}
      <div ref={loadingRef} className="cinematic-loading">
        <div className="cl-inner">
          <div className="cl-bar-track">
            <div ref={loadBarRef} className="cl-bar-fill" />
          </div>
          <p ref={loadTextRef} className="cl-text">Memuat…</p>
        </div>
      </div>

      <div ref={stickyRef} className="cinematic-sticky">
        {/* Frame canvas */}
        <canvas ref={mainCanRef} className="cinematic-canvas cinematic-canvas--main" />

        {/* Scroll hint */}
        <div className="cinematic-content">
          <div ref={scrollHintRef} className="ch-scroll-hint" id="hero-scroll-hint">
            <span>Scroll to explore</span>
            <div className="ch-scroll-line" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CinematicHero;
