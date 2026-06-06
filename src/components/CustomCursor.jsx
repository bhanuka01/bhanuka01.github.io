import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let isMoving = false;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMoving = true;

      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    let animationFrameId;
    const animateRing = () => {
      if (isMoving) {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;

        if (ringRef.current) {
          ringRef.current.style.left = `${ringX}px`;
          ringRef.current.style.top = `${ringY}px`;
        }
      }
      animationFrameId = requestAnimationFrame(animateRing);
    };

    animateRing();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="cursor" id="cursor">
        <div className="cursor-dot" ref={dotRef}></div>
      </div>
      <div className="cursor-ring" id="cursor-ring" ref={ringRef}></div>
    </>
  );
}
