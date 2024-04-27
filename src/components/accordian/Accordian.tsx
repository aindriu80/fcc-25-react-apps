import { useState } from 'react';
import './styles.css';
import data from './data.js';

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnabledMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId: Number) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMutiple = [...multiple];
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);
    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMutiple);
  }
  console.log(selected, multiple);

  return (
    <>
      <div className="wrapper">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setEnabledMultiSelection(!enableMultiSelection)}
        >
          Enable Multi Selection
        </button>
        <div className="accordion">
          {data && data.length > 0 ? (
            data.map((dataItem: Array) => (
              <div
                key={dataItem.id}
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="border-b border-gray-200"
              >
                <div className="flex items-center justify-between px-4 py-3 cursor-pointer">
                  <h3 className="text-lg font-semibold">{dataItem.question}</h3>
                  <span className="text-gray-500">
                    {selected === dataItem.id ? '-' : '+'}
                  </span>
                </div>
                {selected === dataItem.id ||
                multiple.indexOf(dataItem.id) !== -1 ? (
                  <div className="px-4 py-2 bg-gray-100">
                    <p className="text-gray-700">{dataItem.answer}</p>
                  </div>
                ) : null}
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
