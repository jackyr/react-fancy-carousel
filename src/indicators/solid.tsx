import React from 'react';
import { classNames, useAccessibility } from '../utils';
import type { IndicatorPropsType } from '../types.d';
import styles from './solid.module.css';

const Solid: React.FC<IndicatorPropsType> = ({
  uid,
  itemCount,
  activeIndex,
  animation,
  paused,
  duration,
  goTo,
}) => {
  // make accessibility
  const handleKeyDown = useAccessibility();

  return (
    <ul
      className={styles.indicator}
      role="tablist"
    >
      {Array.from({ length: itemCount }).map((_, i) => (
        <li
          key={i}
          id={`carousel-indicator-${uid}-${i}`}
          role="tab"
          aria-label={`change to page ${i + 1}`}
          aria-controls={`carousel-item-${uid}-${i}`}
          aria-selected={activeIndex === i}
          tabIndex={activeIndex === i ? 0 : -1}
          data-active={activeIndex === i}
          data-paused={paused}
          className={styles.indicator_item}
          onClick={() => goTo(i)}
          onKeyDown={handleKeyDown}
        >
          <div className={styles.indicator_item_outer}>
            <div
              className={classNames(styles.indicator_item_inner, {[styles.animation]: animation})}
              style={{ animationDuration: `${duration}ms` }}
            ></div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Solid;