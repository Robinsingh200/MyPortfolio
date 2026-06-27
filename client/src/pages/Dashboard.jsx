import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import './Dashboard.css';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => { logout(); navigate('/login'); };

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
              <span>Welcome, <strong>{user?.name}</strong></span>
              <Button variant="outline" onClick={() => navigate('/')}>View Site</Button>
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-body container">
        <h1>Dashboard</h1>
        <p className="dash-sub">Here's a quick overview of your portfolio.</p>

        <div className="dash-stats">
          {[
            { label: 'Projects', value: '6', color: '#E8553E' },
            { label: 'Skills', value: '10', color: '#3b82f6' },
            { label: 'Services', value: '3', color: '#10b981' },
            { label: 'Messages', value: '0', color: '#f59e0b' },
          ].map(s => (
            <div key={s.label} className="stat-card" style={{ borderTop: `4px solid ${s.color}` }}>
              <div className="stat-value" style={{ color: s.color }}>{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="dash-info">
          <div className="dash-info-card">
            <h3>Account Info</h3>
            <div className="info-row"><span>Name</span><strong>{user?.name}</strong></div>
            <div className="info-row"><span>Email</span><strong>{user?.email}</strong></div>
            <div className="info-row"><span>Role</span><strong>Admin</strong></div>
          </div>
          <div className="dash-info-card">
            <h3>Quick Actions</h3>
            <div className="quick-actions">
              <button onClick={() => navigate('/#portfolio')}>View Projects</button>
              <button onClick={() => navigate('/#contact')}>View Contact</button>
              <button onClick={() => navigate('/')}>Visit Portfolio</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
