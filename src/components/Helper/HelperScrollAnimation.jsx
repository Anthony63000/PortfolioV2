/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from 'react';

export default function useIntersectionObserver() {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const observedRef = useRef(null);
    const observer = useRef(null);
  
    useEffect(() => {
      observer.current = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          setIsIntersecting(entry.isIntersecting);
          if (entry.isIntersecting) {
            observer.current.disconnect();
          }
        },
        { threshold: 0.5 }
      );
  
      if (observedRef.current) {
        observer.current.observe(observedRef.current);
      }
  
      return () => {
        if (observer.current && observedRef.current) {
          observer.current.disconnect();
        }
      };
    }, []);
  
    return { observedRef, isIntersecting };
  }

  
