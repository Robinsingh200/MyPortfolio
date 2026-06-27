import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import './Dashboard.css';
import './Profile.css';

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: user?.name || '', email: user?.email || '' });
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="container">
          <div className="dh-inner">
            <div className="dh-logo">
              <div className="logo-circle">P</div>
              <span>Portfolio Admin</span>
            </div>
            <div className="dh-right">
              <Button variant="outline" onClick={() => navigate('/dashboard')}>Dashboard</Button>
              <Button onClick={() => { logout(); navigate('/login'); }}>Logout</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-body container">
        <h1>My Profile</h1>
        <p className="dash-sub">Manage your account information.</p>

        <div className="profile-card">
          <div className="profile-avatar">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <div className="profile-meta">
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
            <span className="profile-badge">Admin</span>
          </div>
        </div>

        <div className="profile-form-card">
          <h3>Edit Information</h3>
          {saved && <div className="save-success">✅ Profile updated successfully!</div>}
          <form onSubmit={handleSave}>
            <Input label="Full Name" name="name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
            <Input label="Email" type="email" name="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
            <Button type="submit">Save Changes</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
