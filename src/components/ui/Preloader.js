'use client';

import { useLayoutEffect, useRef } from 'react';
import { Hepta_Slab } from 'next/font/google';
import { gsap } from 'gsap';

const loaderLetters = ['J', 'Z', 'Z', 'N', 'L', 'L', 'V', 'N', 'C'];
const heptaSlab = Hepta_Slab({ subsets: ['latin'], weight: ['400'], display: 'swap' });

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const letterRefs = useRef([]);
  const dotRef = useRef(null);
  const circleRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const dot = dotRef.current;
    const circle = circleRef.current;
    const letters = letterRefs.current.filter(Boolean);

    if (!container || !dot || !circle || letters.length === 0) {
      onComplete?.();
      return undefined;
    }

    let isActive = true;
    let context;

    const runAnimation = async () => {
      if (document.fonts?.ready) {
        try {
          await document.fonts.ready;
        } catch {
        }
      }

      if (!isActive) {
        return;
      }

      context = gsap.context(() => {
        gsap.set([...letters, dot], { autoAlpha: 0 });
        gsap.set(circle, {
          autoAlpha: 0,
          clipPath: 'circle(0px at 50% 50%)',
          WebkitClipPath: 'circle(0px at 50% 50%)',
        });

        const dotRect = dot.getBoundingClientRect();
        const dotSize = Math.max(dotRect.width, dotRect.height) || 1;
        const dotRadius = dotSize / 2;
        const centerX = dotRect.left + (dotRect.width / 2);
        const centerY = dotRect.top + (dotRect.height / 2);
        const maxDistanceX = Math.max(centerX, window.innerWidth - centerX);
        const maxDistanceY = Math.max(centerY, window.innerHeight - centerY);
        const targetRadius = Math.hypot(maxDistanceX, maxDistanceY);
        const startClipPath = `circle(${dotRadius}px at ${centerX}px ${centerY}px)`;
        const endClipPath = `circle(${targetRadius}px at ${centerX}px ${centerY}px)`;

        gsap.set(circle, {
          clipPath: startClipPath,
          WebkitClipPath: startClipPath,
        });

        const timeline = gsap.timeline({ defaults: { ease: 'power2.out' } });

        timeline
          .to({}, {
            duration: 0.24,
          })
          .to(letters, {
            autoAlpha: 1,
            duration: 0.16,
            stagger: 0.14,
          })
          .to(dot, {
            autoAlpha: 1,
            duration: 0.16,
          })
          .set(circle, {
            autoAlpha: 1,
          }, 'zoomStart')
          .to(dot, {
            autoAlpha: 0,
            duration: 0.02,
          }, 'zoomStart')
          .to(circle, {
            clipPath: endClipPath,
            WebkitClipPath: endClipPath,
            duration: 1.55,
            ease: 'power4.in',
          }, 'zoomStart+=0.35')
          .to(container, {
            autoAlpha: 0,
            duration: 0.2,
            onComplete,
          });
      }, container);
    };

    runAnimation();

    return () => {
      isActive = false;
      context?.revert();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-black"
    >
      <div
        ref={circleRef}
        className="pointer-events-none fixed inset-0 z-10 bg-white"
      />
      <div
        className={`${heptaSlab.className} relative z-20 flex select-none items-end leading-none text-white`}
        style={{
          fontSize: 'clamp(3rem, 8vw, 7.5rem)',
          letterSpacing: '-0.06em',
        }}
      >
        {loaderLetters.map((letter, index) => {
          const isLastLetter = index === loaderLetters.length - 1;

          if (isLastLetter) {
            return (
              <span key={`${letter}-${index}`} className="relative inline-block">
                <span
                  ref={(element) => {
                    letterRefs.current[index] = element;
                  }}
                  className="inline-block"
                >
                  {letter}
                </span>
                <span
                  ref={dotRef}
                  className="absolute bottom-[0.08em] -right-[0.16em] inline-block h-[0.13em] w-[0.13em] rounded-full bg-white"
                />
              </span>
            );
          }

          return (
            <span
              key={`${letter}-${index}`}
              ref={(element) => {
                letterRefs.current[index] = element;
              }}
              className="inline-block"
            >
              {letter}
            </span>
          );
        })}
      </div>
    </div>
  );
}
