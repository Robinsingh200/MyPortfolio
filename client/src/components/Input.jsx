import './Input.css';

const Input = ({ label, type = 'text', value, onChange, placeholder, error, name }) => (
  <div className="input-group">
    {label && <label className="input-label">{label}</label>}
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`input-field ${error ? 'input-error' : ''}`}
    />
    {error && <span className="input-error-msg">{error}</span>}
  </div>
);

export default Input;
