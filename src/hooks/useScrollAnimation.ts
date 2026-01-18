import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Hook for scroll-triggered animations using IntersectionObserver.
 * Returns a ref to attach to the element and a boolean indicating if it's visible.
 *
 * Usage:
 * ```tsx
 * const { ref, isVisible } = useScrollAnimation();
 * return (
 *   <div ref={ref} className={isVisible ? 'animate-fadeIn' : 'opacity-0'}>
 *     Content
 *   </div>
 * );
 * ```
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

/**
 * Hook for staggered animations on child elements.
 * Returns a ref and isVisible, plus a function to get delay for each child.
 */
export function useStaggerAnimation<T extends HTMLElement = HTMLDivElement>(
  childCount: number,
  staggerDelay: number = 100,
  options: UseScrollAnimationOptions = {}
) {
  const { ref, isVisible } = useScrollAnimation<T>(options);

  const getChildDelay = (index: number) => ({
    transitionDelay: `${index * staggerDelay}ms`,
  });

  return { ref, isVisible, getChildDelay, childCount };
}
