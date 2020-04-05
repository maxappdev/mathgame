import { useRef, useEffect } from 'react';

export const pageMountedFirstTime = () => {
  const isMountRef = useRef(true);
  useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};