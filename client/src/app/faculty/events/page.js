'use client';

import { useState } from 'react';

export default function EventsPage() {
  const [events, setEvents] = useState([
    { id: 1, title: 'Annual Tech Symposium', date: '28 Oct 2026', audience: 'All Students', status: 'Published' },
    { id: 2, title: 'Guest Lecture: AI Trends', date: '15 Nov 2026', audience: 'CS Dept', status: 'Draft' },
  ]);
  const [broadcastMessage, setBroadcastMessage] = useState('');

  const handleBroadcast = () => {
    if(!broadcastMessage.trim()) return alert("Message cannot be empty.");
    alert(`Broadcast sent to all students: "${broadcastMessage}"`);
    setBroadcastMessage('');
  };

  return (
    <div className="events-container animate-fade-in">
      <div className="page-header" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Manage Events & Notifications</h2>
        <button className="btn btn-primary" onClick={() => alert("Opening 'Create Event' Wizard...")}>+ Create New Event</button>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-col" style={{ flex: 2 }}>
           <div className="glass-panel" style={{ padding: '2rem' }}>
              <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '1rem' }}>Published Events</h3>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748B' }}>Event Title</th>
                    <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748B' }}>Date</th>
                    <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748B' }}>Audience</th>
                    <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748B' }}>Status</th>
                    <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748B' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((evt) => (
                    <tr key={evt.id}>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9', fontWeight: '500' }}>{evt.title}</td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>{evt.date}</td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>{evt.audience}</td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>
                        <span style={{ 
                           background: evt.status === 'Published' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)', 
                           color: evt.status === 'Published' ? '#10B981' : '#F59E0B', 
                           padding: '4px 12px', 
                           borderRadius: '12px', 
                           fontSize: '0.8rem', 
                           fontWeight: '600' 
                        }}>{evt.status}</span>
                      </td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>
                         <button className="btn btn-outline" style={{ padding: '4px 8px', fontSize: '0.8rem' }} onClick={() => alert(`Opening edit modal for: ${evt.title}`)}>Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
           </div>
        </div>

        <div className="dashboard-col" style={{ flex: 1 }}>
           <div className="glass-panel" style={{ padding: '2rem', background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', color: 'white' }}>
              <h3 style={{ marginBottom: '1rem' }}>Broadcast Announcement</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem', opacity: 0.9 }}>Send an instant push notification to all student dashboards.</p>
              <textarea 
                className="form-input" 
                rows="4" 
                placeholder="Type urgent announcement here..." 
                value={broadcastMessage}
                onChange={e => setBroadcastMessage(e.target.value)}
                style={{ marginBottom: '1rem', background: 'rgba(255,255,255,0.9)', color: 'var(--text-main)', border: 'none' }}
              ></textarea>
              <button className="btn" style={{ width: '100%', background: 'white', color: 'var(--color-primary)', fontWeight: 'bold' }} onClick={handleBroadcast}>Broadcast Now 🚀</button>
           </div>
        </div>
      </div>
    </div>
  );
}
