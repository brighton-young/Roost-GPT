'use client';
import React, { useEffect, useRef, useState } from "react";
type Slide = { src:string; quote:string; author?:string; alt?:string; };
export default function TestimonialCarousel({ slides, autoPlay = true, intervalMs = 5500 }:{ slides: Slide[]; autoPlay?: boolean; intervalMs?: number; }){
  const [idx, setIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);
  const next = () => setIdx((i) => (i + 1) % slides.length);
  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);
  const goTo = (i: number) => setIdx(i % slides.length);
  useEffect(() => {
    function update(){
      const track = trackRef.current;
      const slide = track?.querySelector<HTMLElement>(".slide");
      if(!track || !slide) return;
      const w = slide.getBoundingClientRect().width;
      track.style.transform = `translateX(${-idx * w}px)`;
    }
    update(); const handle = () => update();
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, [idx, slides.length]);
  useEffect(() => {
    if (!autoPlay) return;
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => next(), intervalMs);
    return () => { if (timerRef.current) window.clearInterval(timerRef.current); };
  }, [intervalMs, autoPlay]);
  const onEnter = () => { if (timerRef.current) { window.clearInterval(timerRef.current); timerRef.current = null; } };
  const onLeave = () => { if (autoPlay) { timerRef.current = window.setInterval(() => next(), intervalMs); } };
  const startX = React.useRef<number | null>(null);
  const onTouchStart: React.TouchEventHandler = (e) => { startX.current = e.touches[0].clientX; };
  const onTouchEnd: React.TouchEventHandler = (e) => {
    if (startX.current == null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 40) { dx < 0 ? next() : prev(); }
    startX.current = null;
  };
  return (
    <div className="carousel" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button className="navbtn prev" aria-label="Previous" onClick={prev}>&#10094;</button>
      <div className="track" ref={trackRef} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {slides.map((s, i) => (
          <article className="slide" key={i} aria-roledescription="slide" aria-label={`Testimonial ${i+1}`}>
            <img src={s.src} alt={s.alt || "Handwritten testimonial"} loading="lazy" />
            <div className="overlay"><p className="quote">“{s.quote}”</p>{s.author && <p className="author">— {s.author}</p>}</div>
          </article>
        ))}
      </div>
      <button className="navbtn next" aria-label="Next" onClick={next}>&#10095;</button>
      <div className="dots" role="tablist" aria-label="Slide dots">
        {slides.map((_, i) => (<button role="tab" key={i} aria-selected={i===idx} onClick={() => goTo(i)} />))}
      </div>
    </div>
  );
}
