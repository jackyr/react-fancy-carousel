import { useRef, useCallback } from 'react';

export const classNames = (...args: Array<string | {[key: string]: boolean} | undefined>) => {
  return args.reduce<(string | undefined)[]>((p, c) => p.concat(
    typeof c === 'string' ? c : c && Object.keys(c).map(v => c[v] ? v : ''),
  ), []).filter(Boolean).join(' ');
};

export const useUid = () => useRef(Math.random().toString(36).substring(2, 7)).current;

export const useAccessibility = () => {
  return useCallback((e: React.KeyboardEvent<HTMLElement>) => {
    e.stopPropagation();
    const parentNode = e.currentTarget.parentNode as HTMLElement;
    const childNodeArr = Array.from(parentNode.childNodes) as HTMLElement[];
    const currentFocusIndex = childNodeArr.findIndex(v => v === e.currentTarget);
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.currentTarget.click();
    }
    if (e.key === 'ArrowRight') {
      if (currentFocusIndex === childNodeArr.length - 1) childNodeArr[0].focus();
      else childNodeArr[currentFocusIndex + 1].focus();
    }
    if (e.key === 'ArrowLeft') {
      if (currentFocusIndex === 0) childNodeArr[childNodeArr.length - 1].focus();
      else childNodeArr[currentFocusIndex - 1].focus();
    }
  }, []);
};