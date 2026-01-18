import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' | 'scaleIn';
  delay?: number;
  threshold?: number;
}

/**
 * Wrapper component for scroll-triggered animations.
 * Elements animate when they enter the viewport.
 *
 * @example
 * <ScrollReveal animation="fadeInUp" delay={200}>
 *   <Card>Content</Card>
 * </ScrollReveal>
 */
export function ScrollReveal({
  children,
  className,
  animation = 'fadeInUp',
  delay = 0,
  threshold = 0.1,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold });

  const animationClass = `animate-${animation}`;
  const delayStyle = delay > 0 ? { animationDelay: `${delay}ms` } : undefined;

  return (
    <div
      ref={ref}
      className={cn(
        'scroll-animate',
        isVisible && animationClass,
        className
      )}
      style={delayStyle}
    >
      {children}
    </div>
  );
}

/**
 * Section wrapper that animates the entire section on scroll.
 */
export function AnimatedSection({
  children,
  className,
  animation = 'fadeInUp',
}: {
  children: ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' | 'scaleIn';
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.05 });

  return (
    <section
      ref={ref}
      className={cn(
        'scroll-animate',
        isVisible && `animate-${animation}`,
        className
      )}
    >
      {children}
    </section>
  );
}
