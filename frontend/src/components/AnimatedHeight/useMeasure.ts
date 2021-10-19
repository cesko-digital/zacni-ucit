import React from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export const useMeasure = (): [
  { ref: React.RefObject<HTMLDivElement> },
  { left: number; top: number; width: number; height: number },
] => {
  const ref = React.useRef(null);
  const [bounds, set] = React.useState({ left: 0, top: 0, width: 0, height: 0 });
  const [observer] = React.useState(
    () =>
      new ResizeObserver(([entry]: any) => {
        set(entry.contentRect);
      }),
  );
  React.useEffect(() => {
    const node = ref.current;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    if (!node) return () => {};
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [{ ref }, bounds];
};
