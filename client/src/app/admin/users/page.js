'use client';

import { useState } from 'react';

export default function AdminUsersPage() {
  const [role, setRole] = useState('STUDENT');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [identifier, setIdentifier] = useState('');

  const handleEnroll = () => {
    if(!name || !email || !identifier) {
      alert("Please fill out all fields.");
      return;
    }
    alert(`User ${name} enrolled successfully!`);
    setName('');
    setEmail('');
    setIdentifier('');
    setRole('STUDENT');
  };

  return (
    <div className="animate-fade-in">
      <div className="page-header" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>User Management</h2>
        <button className="btn btn-primary" onClick={() => alert("Registration Link Copied to Clipboard!")}>+ Invite via Link</button>
      </div>

      <div className="dashboard-grid">
         <div className="dashboard-col" style={{ flex: 1 }}>
            <div className="glass-panel" style={{ padding: '2rem' }}>
               <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.5rem' }}>Quick Enrollment</h3>
               <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 <select className="form-input" value={role} onChange={e => { setRole(e.target.value); setIdentifier(''); }}>
                   <option value="STUDENT">Student</option>
                   <option value="FACULTY">Faculty</option>
                 </select>
                 <input type="text" className="form-input" value={name} onChange={e => setName(e.target.value)} placeholder="Full Name" />
                 <input type="email" className="form-input" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email Address" />
                 {role === 'STUDENT' && <input type="text" className="form-input" value={identifier} onChange={e => setIdentifier(e.target.value)} placeholder="Admission Number" />}
                 {role === 'FACULTY' && <input type="text" className="form-input" value={identifier} onChange={e => setIdentifier(e.target.value)} placeholder="Department" />}
                 <button className="btn btn-primary" type="button" onClick={handleEnroll}>Create Profile</button>
               </form>
            </div>
         </div>

         <div className="dashboard-col" style={{ flex: 2 }}>
            <div className="glass-panel" style={{ padding: '2rem' }}>
               <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.5rem' }}>Recently Added</h3>
               <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                 <thead>
                   <tr>
                     <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748B' }}>Name</th>
                     <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748B' }}>Role</th>
                     <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748B' }}>Email</th>
                     <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748B' }}>Actions</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9', fontWeight: '500' }}>Alice Johnson</td>
                     <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}><span className="badge" style={{background: 'rgba(79,70,229,0.1)', color: 'var(--color-primary)'}}>STUDENT</span></td>
                     <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>alice@example.com</td>
                     <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}><button className="btn btn-outline" style={{padding: '4px 8px', fontSize: '0.8rem'}} onClick={() => alert("Opening modify modal for Alice Johnson...")}>Modify</button></td>
                   </tr>
                   <tr>
                     <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9', fontWeight: '500' }}>Prof. Smith</td>
                     <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}><span className="badge" style={{background: 'rgba(16,185,129,0.1)', color: 'var(--status-success)'}}>FACULTY</span></td>
                     <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>smith@example.com</td>
                     <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}><button className="btn btn-outline" style={{padding: '4px 8px', fontSize: '0.8rem'}} onClick={() => alert("Opening modify modal for Prof. Smith...")}>Modify</button></td>
                   </tr>
                 </tbody>
               </table>
            </div>
         </div>
      </div>
    </div>
  );
}
