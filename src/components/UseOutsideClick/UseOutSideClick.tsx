import { useEffect, RefObject } from 'react';

interface UseOutSideClickProps {
  ref: RefObject<HTMLElement>;
  handler: (event: MouseEvent | TouchEvent) => void;
}
const UseOutSideClick: React.FC<UseOutSideClickProps> = ({ ref, handler }) => {
  useEffect(() => {
    function listener(event: MouseEvent | TouchEvent) {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    }
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [handler, ref]);

  return null;
};

export default UseOutSideClick;
