import React, { useState, useEffect, useMemo, useCallback, useRef, Children, cloneElement, memo, forwardRef, useImperativeHandle } from 'react';
import type { PropsType, RefType } from './types.d';
import { useUid, classNames } from './utils';
import Item from './Item';
import SolidIndicator from './indicators/solid';
import DotIndicator from './indicators/dot';
import styles from './index.module.css';

const Carousel = forwardRef<RefType, PropsType>(({
  className,
  autoplay = false,
  duration = 3000,
  speed = 500,
  timingFunction = 'ease',
  indicator = 'solid',
  children,
  onChange,
  ...restProps
}, ref) => {
  // generate random uid
  const uid = useUid();
  // current visible item index, default 0
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  // previous visible item index
  const prevIndex = useRef<number>(0);
  // childrenCount
  const itemCount = useMemo(() => Children.count(children), [children])
  // autoplay timer handler
  const autoPlayTimer = useRef<number>();
  // show indicator animation
  const [indicatorAnim, setIndicatorAnim] = useState(autoplay && itemCount > 1);
  // indicator component
  const Indicator = useMemo(() => {
    if (indicator === 'solid') return SolidIndicator;
    else if (indicator === 'dot') return DotIndicator;
    else return indicator;
  }, [indicator]);

  // change operation method
  const next = useCallback(() =>
    setCurrentIndex(index => index === itemCount - 1 ? 0 : index + 1), [itemCount]);
  const prev = useCallback(() =>
    setCurrentIndex(index => index === 0 ? itemCount - 1 : index - 1), [itemCount]);
  const goTo = useCallback((index: number) =>
    setCurrentIndex(() => {
      if (index < 0) return -index > itemCount ? 0 : itemCount + index;
      else return index > itemCount - 1 ? itemCount - 1 : index;
    }), [itemCount]);

  // trigger onChange callback when currentIndex change
  useEffect(() => {
    if (onChange && currentIndex !== prevIndex.current) {
      onChange.call(null, currentIndex, prevIndex.current);
    }
    prevIndex.current = currentIndex;
  }, [currentIndex, onChange]);

  // trigger autoplay
  useEffect(() => {
    if (autoplay && itemCount > 1) {
      autoPlayTimer.current = window.setTimeout(next, duration);
    }
    return () => window.clearTimeout(autoPlayTimer.current);
  }, [autoplay, currentIndex, duration, itemCount, next]);

  // reset indicator animation when options changes
  useEffect(() => {
    if (autoplay && itemCount > 1) {
      window.requestAnimationFrame(() => setIndicatorAnim(true));
    }
    return () => setIndicatorAnim(false);
  }, [autoplay, duration, itemCount]);

  // reset current index when children changes
  useEffect(() => {
    goTo(0);
  }, [itemCount, goTo]);

  // expose methods to reference
  useImperativeHandle(ref, () => ({
    next,
    prev,
    goTo,
  }), [next, prev, goTo]);

  return (
    <div
      {...restProps}
      className={classNames(className, styles.carousel)}
    >
      <div
        className={styles.container}
        style={{
          transform: `translate(${-currentIndex * 100 + '%'}, 0)`,
          transitionDuration: `${speed}ms`,
          transitionTimingFunction: timingFunction,
        }}
      >
        {Children.map(children, (child, i) => {
          if (typeof child === 'undefined') return child;
          return cloneElement(child, {
            id: `carousel-item-${uid}-${i}`,
            role: 'tabpanel',
            'aria-labelledby': `carousel-indicator-${uid}-${i}`,
            'aria-hidden': currentIndex === i,
          });
        })}
      </div>
      {Indicator && <Indicator
        uid={uid}
        activeIndex={currentIndex}
        itemCount={itemCount}
        animation={indicatorAnim}
        duration={duration}
        next={next}
        prev={prev}
        goTo={goTo}
      />}
    </div>
  )
});

const MemoizedCarousel = memo(Carousel) as React.MemoExoticComponent<typeof Carousel> & { Item: typeof Item };
MemoizedCarousel.Item = Item;

export default MemoizedCarousel;
export { useAccessibility } from './utils';
export type { RefType, IndicatorPropsType } from './types.d';