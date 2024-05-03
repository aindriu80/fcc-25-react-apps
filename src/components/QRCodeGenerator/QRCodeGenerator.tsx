import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import './styles.css';

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState('');
  const [input, setInput] = useState('');

  function handleGenerateQrCode() {
    console.log('Handle Generate QR Code');
    setQrCode(input);
    setInput('');
  }

  return (
    <>
      <div className="container">
        <div className="header">QR Code Generator</div>
        <div className="qr-code-input">
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            name="qr-code"
            placeholder="Enter your value here"
            value={input}
          />
          <button
            className="qr-code-button"
            disabled={input && input.trim() !== '' ? false : true}
            onClick={handleGenerateQrCode}
          >
            Generate
          </button>
        </div>
        <div>
          <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
        </div>
      </div>
    </>
  );
};

export default QRCodeGenerator;
