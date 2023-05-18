import React from 'react';
import type { ItemPropsType } from './types';
import { classNames } from './utils';
import styles from './index.module.css';

const ImgItem: React.FC<ItemPropsType & JSX.IntrinsicElements['img']> = ({
  style,
  className,
  uid,
  index,
  active,
  effect,
  speed,
  ...restProps
}) => {
  return (
    <img
      {...restProps}
      style={Object.assign({ transitionDuration: `${speed}ms` }, style)}
      className={classNames(className, styles.carousel_item, {[styles.fade]: effect === 'fade'})}
      id={`carousel-item-${uid}-${index}`}
      role="tabpanel"
      data-active={active}
      aria-labelledby={`carousel-indicator-${uid}-${index}`}
      aria-hidden={!active}
    />
  )
};

export default ImgItem;
export type ImgItemType = React.FC<JSX.IntrinsicElements['img']>;