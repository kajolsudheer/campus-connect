'use client';

import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();

  return (
    <div className="animate-fade-in">
      <div className="page-header" style={{ marginBottom: '2rem' }}>
        <h2>System Administration</h2>
        <p className="text-muted">Manage Campus Connect Users and Configuration</p>
      </div>
      <div className="dashboard-grid">
         <div className="glass-panel" style={{ padding: '2rem', flex: 1, minWidth: '300px' }}>
            <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.5rem' }}>Platform Statistics</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                 <span className="text-muted">Total Students Active</span>
                 <strong>1,245</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                 <span className="text-muted">Total Faculty</span>
                 <strong>108</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                 <span className="text-muted">System Uptime</span>
                 <strong style={{color: 'var(--status-success)'}}>99.9%</strong>
              </div>
            </div>
         </div>

         <div className="glass-panel" style={{ padding: '2rem', flex: 2, minWidth: '400px' }}>
            <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.5rem' }}>Quick Configuration</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
               <button className="btn btn-primary" style={{ height: '100px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }} onClick={() => router.push('/admin/users')}>
                  <span style={{ fontSize: '1.5rem' }}>👥</span> Enroll User
               </button>
               <button className="btn btn-outline" style={{ height: '100px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }} onClick={() => router.push('/admin/courses')}>
                  <span style={{ fontSize: '1.5rem' }}>📖</span> Manage Courses
               </button>
               <button className="btn btn-outline" style={{ height: '100px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }} onClick={() => alert('Settings Modal Placeholder')}>
                  <span style={{ fontSize: '1.5rem' }}>⚙️</span> App Settings
               </button>
            </div>
         </div>
      </div>
    </div>
  );
}
