'use client';

import { useState } from 'react';

export default function LeaveManagementPage() {
  const [showApplyModal, setShowApplyModal] = useState(false);

  const handleApply = (e) => {
    e.preventDefault();
    alert("Leave application submitted successfully! It is now pending approval.");
    setShowApplyModal(false);
  };

  return (
    <div className="leaves-container animate-fade-in relative">
      <div className="page-header" style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between' }}>
        <h2>Leave Management</h2>
        <button className="btn btn-primary" onClick={() => setShowApplyModal(true)}>+ Apply for Leave</button>
      </div>

      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '1rem' }}>My Leave History</h3>
        
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr>
              <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748B' }}>Date Applied</th>
              <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748B' }}>Duration</th>
              <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748B' }}>Reason</th>
              <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748B' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>10 Oct 2026</td>
              <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>12 Oct 2026 (1 Day)</td>
              <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>Medical Leave</td>
              <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10B981', padding: '4px 12px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: '600' }}>Approved</span>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>05 Sep 2026</td>
              <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>08 Sep - 10 Sep (3 Days)</td>
              <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>Family Event</td>
              <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#F59E0B', padding: '4px 12px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: '600' }}>Pending</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {showApplyModal && (
        <div className="modal-overlay" style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
            background: 'rgba(0,0,0,0.5)', zIndex: 1000, 
            display: 'flex', justifyContent: 'center', alignItems: 'center'
        }} onClick={() => setShowApplyModal(false)}>
          <div className="modal-content glass-panel animate-fade-in" onClick={e => e.stopPropagation()} style={{ width: '400px', padding: '2rem', borderRadius: '1rem', background: 'var(--bg-base)' }}>
             <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '0.5rem' }}>Apply for Leave</h3>
             <form onSubmit={handleApply} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label className="form-label">Start Date</label>
                  <input type="date" className="form-input" required />
                </div>
                <div>
                  <label className="form-label">End Date</label>
                  <input type="date" className="form-input" required />
                </div>
                <div>
                  <label className="form-label">Reason</label>
                  <textarea className="form-input" rows="3" placeholder="Briefly describe your reason..." required></textarea>
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                   <button type="button" className="btn btn-outline" style={{ flex: 1 }} onClick={() => setShowApplyModal(false)}>Cancel</button>
                   <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Submit</button>
                </div>
             </form>
          </div>
        </div>
      )}
    </div>
  );
}
