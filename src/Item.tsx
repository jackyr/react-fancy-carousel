import React from 'react';
import type { ItemPropsType } from './types';
import { classNames } from './utils';
import styles from './index.module.css';

const Item: React.FC<ItemPropsType> = ({
  style,
  className,
  uid,
  index,
  active,
  effect,
  speed,
  children,
  ...restProps
}) => {
  return (
    <section
      {...restProps}
      style={Object.assign({ transitionDuration: `${speed}ms` }, style)}
      className={classNames(className, styles.carousel_item, {[styles.fade]: effect === 'fade'})}
      id={`carousel-item-${uid}-${index}`}
      role="tabpanel"
      data-active={active}
      aria-labelledby={`carousel-indicator-${uid}-${index}`}
      aria-hidden={!active}
    >
      {children}
    </section>
  )
};

export default Item;