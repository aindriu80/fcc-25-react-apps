import './style.css';

interface CustomModalProps {
  id: number;
  header: string;
  body: string;
  footer: string;
  onClose: boolean;
}

const CustomModal: React.FC<CustomModalProps> = ({
  id,
  header,
  body,
  footer,
  onClose,
}) => {
  return (
    <div id={id || 'Modal'} className="modal">
      <div className="content">
        <div className="header">
          <span onClick={onClose} className="close-modal-icon">
            &times;
          </span>
          <h2>{header ? header : 'Header'}</h2>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is our Modal Body</p>
            </div>
          )}
        </div>
        <div className="footer">{footer ? footer : <div>Footer</div>}</div>
      </div>
    </div>
  );
};

export default CustomModal;
