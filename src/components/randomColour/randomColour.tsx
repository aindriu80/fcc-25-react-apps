import { useEffect, useState } from 'react';
import './styles.css';

const RandomColour = () => {
  const [typeOfColour, setTypeOfColour] = useState('hex');
  const [colour, setColour] = useState('#000000');

  function randomColourUtility(length: number) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColour() {
    // #687765
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColour = '#';

    for (let i = 0; i < 6; i++) {
      hexColour += hex[randomColourUtility(hex.length)];
    }
    console.log('hex Colour', hexColour);
    setColour(hexColour);
  }

  useEffect(() => {
    if (typeOfColour === 'rgb') handleCreateRandomRGBColour();
    else handleCreateRandomHexColour();
  }, [typeOfColour]);

  function handleCreateRandomRGBColour() {
    const random_r = randomColourUtility(256);
    const random_g = randomColourUtility(256);
    const random_b = randomColourUtility(256);

    setColour(`rgb(${random_r},${random_g},${random_b})`);
  }

  return (
    <div className="wrapper">
      <div className="main-section" style={{ background: colour }}>
        <div className="random-colour">
          Random HEX Colour
          <br />
          <button
            onClick={() => setTypeOfColour('hex')}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Generate HEX Colour
          </button>
        </div>
        <div className="random-colour">
          Random RGB Colour
          <br />
          <button
            onClick={() => setTypeOfColour('rgb')}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Generate RGB Colour
          </button>
        </div>
        <div className="random-colour">
          Random Random Colour
          <br />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              typeOfColour === 'hex'
                ? handleCreateRandomHexColour()
                : handleCreateRandomRGBColour();
            }}
          >
            Generate Random Colour
          </button>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
              fontSize: '60px',
              marginTop: '50px',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <h3>{typeOfColour === 'rgb' ? 'RGB Colour: ' : 'HEX Colour: '}</h3>
            <h1>&nbsp;{colour}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomColour;
