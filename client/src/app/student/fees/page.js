'use client';

export default function FeesPage() {
  return (
    <div className="fees-container animate-fade-in">
      <h2 style={{ marginBottom: '1.5rem' }}>Fee & Payments</h2>
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h3 style={{ marginBottom: '1.5rem' }}>Pending Dues</h3>
        <div style={{ padding: '2rem', background: 'var(--bg-base)', borderRadius: '1rem', border: '1px solid rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
           <div>
             <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Semester 5 Tuition Fee</h4>
             <p className="text-muted">Due by 30 Oct 2026</p>
           </div>
           <div style={{ textAlign: 'right' }}>
             <h3 style={{ fontSize: '1.8rem', color: 'var(--status-danger)', marginBottom: '0.5rem' }}>₹75,000</h3>
             <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => alert("Redirecting to secure Academic Payment Gateway...")}>Pay Now</button>
           </div>
        </div>

        <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Payment History</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr>
              <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748B' }}>Receipt No</th>
              <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748B' }}>Purpose</th>
              <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748B' }}>Date</th>
              <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748B' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>RCPT-2026-001</td>
              <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>Semester 4 Tuition</td>
              <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>15 April 2026</td>
              <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9', fontWeight: '600' }}>₹75,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
