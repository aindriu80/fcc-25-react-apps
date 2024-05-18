import { useRef } from 'react';

const ScrollToSection = () => {
  const ref = useRef();

  const data = [
    {
      label: 'First Card',
      style: {
        width: '100%',
        height: '600px ',
        background: 'red',
      },
    },
    {
      label: 'Second Card',
      style: {
        width: '100%',
        height: '600px ',
        background: 'blue',
      },
    },
    {
      label: 'Third Card',
      style: {
        width: '100%',
        height: '600px ',
        background: 'black',
      },
    },
    {
      label: 'Fourth Card',
      style: {
        width: '100%',
        height: '600px ',
        background: 'orange',
      },
    },
    {
      label: 'Fifty Card',
      style: {
        width: '100%',
        height: '600px ',
        background: 'purple',
      },
    },
  ];

  function handleScrollToSection() {
    let cardPosition = ref.current.getBoundingClientRect().top;

    window.scrollTo({
      top: cardPosition,
      behavior: 'smooth',
    });
  }

  return (
    <div>
      <h1>Scroll to a particular section</h1>
      <button
        onClick={handleScrollToSection}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Click to Scroll
      </button>
      {data.map((dataItem, index) => (
        <div ref={index === 4 ? ref : null} className="" style={dataItem.style}>
          <div className="">{dataItem.label}</div>
        </div>
      ))}
    </div>
  );
};

export default ScrollToSection;
