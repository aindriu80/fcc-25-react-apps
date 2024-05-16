import UseWindowResize from './UseWindowResize';

const TestUseWindowResize = () => {
  const windowSize = UseWindowResize();
  const { width, height } = windowSize;
  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center bg-gray-200 h-screen">
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold mb-4">Use Window Resize Hook</div>
          <p className="mb-2">Width is {width}</p>
          <p className="mb-2">Height is {height}</p>
        </div>
      </div>
    </>
  );
};

export default TestUseWindowResize;
