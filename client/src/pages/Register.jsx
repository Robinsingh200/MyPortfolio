import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import Input from '../components/Input';
import './Auth.css';

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email) errs.email = 'Email is required';
    if (form.password.length < 6) errs.password = 'Password must be at least 6 characters';
    if (form.password !== form.confirm) errs.confirm = 'Passwords do not match';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setApiError('');
    setLoading(true);
    try {
      await register(form.name, form.email, form.password);
      navigate('/');
    } catch (err) {
      setApiError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <div className="auth-logo">
          <div className="auth-logo-circle">P</div>
          <h2>Create Account</h2>
          <p>Join and get started today</p>
        </div>

        {apiError && <div className="auth-error">{apiError}</div>}

        <form onSubmit={handleSubmit}>
          <Input label="Full Name" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" error={errors.name} />
          <Input label="Email Address" type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" error={errors.email} />
          <Input label="Password" type="password" name="password" value={form.password} onChange={handleChange} placeholder="Min. 6 characters" error={errors.password} />
          <Input label="Confirm Password" type="password" name="confirm" value={form.confirm} onChange={handleChange} placeholder="Repeat password" error={errors.confirm} />
          <Button type="submit" fullWidth disabled={loading}>
            {loading ? 'Creating account...' : 'Create Account'}
          </Button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
        <p className="auth-back">
          <Link to="/">← Back to Portfolio</Link>
        </p>
      </div>
    </div>
  );
}
