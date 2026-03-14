'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar({ role, userName = "John Doe" }) {
  const router = useRouter();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="portal-navbar glass-panel" style={{ position: 'relative' }}>
      <div className="navbar-left">
        <h3 className="navbar-greeting">Welcome, {userName}!</h3>
        <span className="badge role-badge">{role}</span>
      </div>
      <div className="navbar-right" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        
        {/* Notifications */}
        <div style={{ position: 'relative' }}>
          <button 
            className="icon-btn notification-btn" 
            onClick={() => { setShowNotifications(!showNotifications); setShowProfile(false); }}
          >
            <span className="bell-icon">🔔</span>
            <span className="notification-dot"></span>
          </button>
          
          {showNotifications && (
            <div className="dropdown-menu glass-panel animate-fade-in" style={{ 
                position: 'absolute', top: '120%', right: '0', width: '300px', padding: '1rem', 
                zIndex: 50, borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' 
            }}>
              <h4 style={{ marginBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.5rem' }}>Notifications</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ padding: '0.5rem', background: 'rgba(79,70,229,0.05)', borderRadius: '0.5rem', cursor: 'pointer' }} onClick={() => alert("Maintenance details: Systems will be offline from 2AM to 4AM.")}>
                  <p style={{ fontSize: '0.85rem', margin: 0 }}><strong>System:</strong> Maintenance scheduled for tonight.</p>
                </div>
                <div style={{ padding: '0.5rem', background: 'var(--bg-base)', borderRadius: '0.5rem', cursor: 'pointer' }} onClick={() => { if(role === 'STUDENT') router.push('/student/helpdesk'); else alert("Opening Messages..."); }}>
                  <p style={{ fontSize: '0.85rem', margin: 0 }}>You have (2) unread messages.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div style={{ position: 'relative' }}>
          <div 
            className="profile-menu" 
            style={{ cursor: 'pointer' }}
            onClick={() => { setShowProfile(!showProfile); setShowNotifications(false); }}
          >
            <div className="avatar">
              {userName.charAt(0)}
            </div>
          </div>
          
          {showProfile && (
            <div className="dropdown-menu glass-panel animate-fade-in" style={{ 
                position: 'absolute', top: '120%', right: '0', width: '200px', padding: '0.5rem', 
                zIndex: 50, borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', display: 'flex', flexDirection: 'column', gap: '4px'
            }}>
              <button className="btn" style={{ textAlign: 'left', background: 'transparent', color: 'var(--text-main)', padding: '0.5rem' }} onClick={() => alert("Opening User Profile Modal...")}>
                👤 View Profile
              </button>
              <button className="btn" style={{ textAlign: 'left', background: 'transparent', color: 'var(--text-main)', padding: '0.5rem' }} onClick={() => alert("Opening Account Settings...")}>
                ⚙️ Settings
              </button>
              <div style={{ height: '1px', background: 'rgba(0,0,0,0.05)', margin: '4px 0' }}></div>
              <button 
                className="btn" 
                style={{ textAlign: 'left', background: 'transparent', color: 'var(--status-danger)', padding: '0.5rem' }}
                onClick={() => router.push('/')}
              >
                🚪 Logout
              </button>
            </div>
          )}
        </div>
        
      </div>
    </header>
  );
}
