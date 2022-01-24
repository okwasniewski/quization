import React, { useRef } from 'react';
import { useIntersection } from 'react-use';

export const useIntersectionRef = (): [
  React.MutableRefObject<any>,
  IntersectionObserverEntry | null
] => {
  const sectionRef = useRef(null);
  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };
  const intersection = useIntersection(sectionRef, options);
  return [sectionRef, intersection];
};
