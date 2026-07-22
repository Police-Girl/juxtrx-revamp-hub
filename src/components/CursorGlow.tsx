import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -200, y: -200 });
  const cur = useRef({ x: -200, y: -200 });
  const raf = useRef<number>(0);
  const visible = useRef(false);

  useEffect(() => {
    const el = dotRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible.current) {
        visible.current = true;
        el.style.opacity = '1';
      }
    };

    const onLeave = () => {
      visible.current = false;
      el.style.opacity = '0';
    };

    const loop = () => {
      cur.current.x += (pos.current.x - cur.current.x) * 0.18;
      cur.current.y += (pos.current.y - cur.current.y) * 0.18;
      el.style.transform = `translate(${cur.current.x - 20}px, ${cur.current.y - 20}px)`;
      raf.current = requestAnimationFrame(loop);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    raf.current = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,160,30,0.55) 0%, rgba(255,140,0,0.18) 55%, transparent 75%)',
        boxShadow: '0 0 18px 8px rgba(255,150,20,0.22)',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: 0,
        transition: 'opacity 0.35s ease',
        willChange: 'transform',
      }}
    />
  );
}
