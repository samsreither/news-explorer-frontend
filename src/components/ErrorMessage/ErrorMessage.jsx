import './ErrorMessage.css';

function ErrorMessage({ errorMessage, className }) {
  return (
    <>
      <p className={className}>{errorMessage}</p>
    </>
  );
}

export default ErrorMessage;