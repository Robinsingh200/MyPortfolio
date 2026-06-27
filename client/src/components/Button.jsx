import './Button.css';

const Button = ({ children, variant = 'primary', onClick, type = 'button', disabled, fullWidth }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant} ${fullWidth ? 'btn-full' : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
