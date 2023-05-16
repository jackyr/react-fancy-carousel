import React, { useState, useEffect, useMemo, useCallback, useRef, Children, cloneElement, memo, forwardRef, useImperativeHandle } from 'react';
import type { CarouselPropsType, RefType } from './types.d';
import { useUid, classNames, useTimeout } from './utils';
import Item from './Item';
import SolidIndicator from './indicators/solid';
import DotIndicator from './indicators/dot';
import theme from './theme.module.css';
import styles from './index.module.css';

const Carousel = forwardRef<RefType, CarouselPropsType>(({
  className,
  autoplay = false,
  effect = 'slide',
  duration = 3000,
  speed = 500,
  timingFunction = 'ease',
  infiniteLoop = true,
  pauseOnHover = false,
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
  const itemCount = useMemo(() => Children.count(children), [children]);
  // previous children count
  const prevItemCount = useRef<number>(itemCount);
  // autoplay timer
  const autoPlayTimer = useTimeout();
  // autoplay pause state
  const [autoPlayPaused, setAutoPlayPaused] = useState(false);
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
    setCurrentIndex(index => {
      if (index === itemCount - 1) {
        return infiniteLoop ? 0 : index;
      }
      return index + 1;
    }), [infiniteLoop, itemCount]);
  const prev = useCallback(() =>
    setCurrentIndex(index => {
      if (index === 0) {
        return infiniteLoop ? itemCount - 1 : index;
      }
      return index - 1;
    }), [infiniteLoop, itemCount]);
  const goTo = useCallback((index: number) =>
    setCurrentIndex(() => {
      if (index < 0) return -index > itemCount ? 0 : itemCount + index;
      return index > itemCount - 1 ? itemCount - 1 : index;
    }), [itemCount]);

  // autoplay pause control
  const pauseAutoplay = useCallback(() => {
    if (autoplay && itemCount > 1 && pauseOnHover) {
      autoPlayTimer.pause();
      setAutoPlayPaused(autoPlayTimer.pausedRef.current);
    }
  }, [autoplay, itemCount, pauseOnHover, autoPlayTimer]);
  const continueAutoplay = useCallback(() => {
    if (autoplay && itemCount > 1 && pauseOnHover) {
      autoPlayTimer.resume();
      setAutoPlayPaused(autoPlayTimer.pausedRef.current);
    }
  }, [autoplay, itemCount, pauseOnHover, autoPlayTimer]);

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
      if (!infiniteLoop && currentIndex === itemCount - 1) {
        autoPlayTimer.clear();
      } else {
        autoPlayTimer.set(next, duration);
        if (autoPlayTimer.pausedRef.current) {
          autoPlayTimer.pause();
        }
      }
    }
    return autoPlayTimer.clear;
  }, [autoplay, currentIndex, duration, infiniteLoop, itemCount, next, autoPlayTimer]);

  // reset indicator animation when options changes
  useEffect(() => {
    if (autoplay && itemCount > 1) {
      window.requestAnimationFrame(() => setIndicatorAnim(true));
    }
    return () => setIndicatorAnim(false);
  }, [autoplay, duration, itemCount]);

  // reset current index when children changes
  useEffect(() => {
    if (itemCount !== prevItemCount.current) {
      goTo(0);
    }
    prevItemCount.current = itemCount;
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
      className={classNames(className, theme.default, styles.carousel)}
      role="region"
      aria-label="carousel"
      onMouseEnter={e => {
        pauseAutoplay()
        restProps.onMouseEnter && restProps.onMouseEnter.call(undefined, e)
      }}
      onMouseLeave={e => {
        continueAutoplay()
        restProps.onMouseLeave && restProps.onMouseLeave.call(undefined, e)
      }}
    >
      <div
        className={classNames(styles.container, {[styles.slide]: effect === 'slide'})}
        style={effect === 'slide' ? {
          transform: `translate(${-currentIndex * 100 + '%'}, 0)`,
          transitionDuration: `${speed}ms`,
          transitionTimingFunction: timingFunction,
        } : undefined}
      >
        {Children.map(children, (child, i) => {
          /* istanbul ignore next */
          if (typeof child === 'undefined') return child;
          return cloneElement(child, {
            uid,
            index: i,
            active: currentIndex === i,
            effect: effect === 'fade' ? 'fade' : 'none',
            speed,
          });
        })}
      </div>
      {Indicator && <Indicator
        uid={uid}
        activeIndex={currentIndex}
        itemCount={itemCount}
        animation={indicatorAnim}
        paused={autoPlayPaused}
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
export type { RefType, ItemPropsType, IndicatorPropsType } from './types.d';