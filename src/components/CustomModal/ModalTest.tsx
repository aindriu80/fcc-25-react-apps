import { useState } from 'react';
import CustomModal from './CustomModal';
import './style.css';

const ModalTest = () => {
  const [showModalPopUp, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopUp);
  }

  function onClose() {
    setShowModalPopup(false);
  }
  return (
    <div className="openModal">
      <button onClick={handleToggleModalPopup} className="openModal">
        Open Modal Popup
      </button>
      {showModalPopUp && <CustomModal onClose={onClose} />}
    </div>
  );
};

export default ModalTest;
