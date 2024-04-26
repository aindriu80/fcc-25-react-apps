import { useState } from 'react';
import './styles.css';
import data from './data.js';

const Accordian = () => {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId: Number) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  return (
    <>
      <div className="wrapper">
        <div className="accordion">
          {data && data.length > 0 ? (
            data.map((dataItem: Array) => (
              <div
                key={dataItem.id}
                onClick={() => handleSingleSelection(dataItem.id)}
                className="border-b border-gray-200"
              >
                <div className="flex items-center justify-between px-4 py-3 cursor-pointer">
                  <h3 className="text-lg font-semibold">{dataItem.question}</h3>
                  <span className="text-gray-500">
                    {selected === dataItem.id ? '-' : '+'}
                  </span>
                </div>
                {selected === dataItem.id && (
                  <div className="px-4 py-2 bg-gray-100">
                    <p className="text-gray-700">{dataItem.answer}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="p-4 text-gray-500">No data found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordian;
