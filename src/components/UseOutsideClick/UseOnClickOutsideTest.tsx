import { useRef, useState } from 'react';
import UseOutSideClick from './UseOutSideClick';

const UseOnClickOutsideTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  UseOutSideClick({ ref, handler: () => setShowContent(false) });

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-200">
      {showContent ? (
        <div className="text-center" ref={ref}>
          <div className="text-3xl font-bold">This is some random content</div>
          <p>
            Please click outside of this area to close. This will not close if
            you click inside of this content.{' '}
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default UseOnClickOutsideTest;
