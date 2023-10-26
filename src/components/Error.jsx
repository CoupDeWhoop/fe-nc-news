export default function Error ({ message, onClose }) {
    console.log(message)
    return (
      <div className="error-container">
        <div className="error-message">{message}</div>
        <button onClick={onClose} className="close-button">
          Close
        </button>
      </div>
    );
  };