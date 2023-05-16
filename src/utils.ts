import { useRef, useCallback, useMemo } from 'react';

export const classNames = (...args: Array<string | {[key: string]: boolean} | undefined>) => {
  return args.reduce<(string | undefined)[]>((p, c) => p.concat(
    typeof c === 'string' ? c : c && Object.keys(c).map(v => c[v] ? v : ''),
  ), []).filter(Boolean).join(' ');
};

export const useUid = () => useRef(Math.random().toString(36).substring(2, 7)).current;

export const useAccessibility = () => {
  return useCallback((e: React.KeyboardEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const parentNode = e.currentTarget.parentNode as HTMLElement;
    const childNodeArr = Array.from(parentNode.childNodes) as HTMLElement[];
    const currentFocusIndex = childNodeArr.findIndex(v => v === e.currentTarget);
    if (e.key === 'Enter' || e.key === ' ') e.currentTarget.click();
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

export const useTimeout = () => {
  const handler = useRef<number>();
  const cbFn = useRef<() => void>();
  const remaining = useRef(0);
  const startTimestamp = useRef(0);
  const pauseTimestamp = useRef(0);
  const paused = useRef(false);
  const clear = useCallback(() => {
    cbFn.current = undefined;
    remaining.current = 0;
    startTimestamp.current = 0;
    pauseTimestamp.current = 0;
    window.clearTimeout(handler.current);
    handler.current = undefined;
  }, []);
  const set = useCallback((cb: () => void, timeout: number) => {
    cbFn.current = cb;
    remaining.current = timeout;
    startTimestamp.current = Date.now();
    handler.current = window.setTimeout(cb, timeout);
  }, []);
  const pause = useCallback(() => {
    if (handler.current) {
      pauseTimestamp.current = Date.now();
      window.clearTimeout(handler.current);
      paused.current = true;
    }
  }, []);
  const resume = useCallback(() => {
    if (cbFn.current && startTimestamp.current && pauseTimestamp.current && remaining.current) {
      remaining.current = remaining.current - (pauseTimestamp.current - startTimestamp.current);
      handler.current = window.setTimeout(cbFn.current, remaining.current);
      startTimestamp.current = Date.now();
      pauseTimestamp.current = 0;
      paused.current = false;
    }
  }, []);
  return useMemo(() => ({ set, clear, pause, resume, pausedRef: paused }), [clear, pause, resume, set]);
}