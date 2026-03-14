'use client';

export default function StudentHelpdeskPage() {
  return (
    <div className="animate-fade-in">
      <div className="page-header" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2>Campus Helpdesk</h2>
          <p className="text-muted">Need assistance? Raise a support ticket here.</p>
        </div>
        <button className="btn btn-primary" onClick={() => alert("Opening New Ticket Form...")}>+ New Ticket</button>
      </div>

      <div className="glass-panel" style={{ padding: '2rem' }}>
         <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.5rem' }}>My Support Tickets</h3>
         
         <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
           <thead>
             <tr>
               <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748B' }}>Ticket ID</th>
               <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748B' }}>Subject</th>
               <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748B' }}>Department</th>
               <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748B' }}>Status</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>#TKT-8942</td>
               <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9', fontWeight: '500' }}>Wifi Access Issue in Lab 3</td>
               <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>IT Support</td>
               <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>
                 <span className="badge" style={{background: 'rgba(16,185,129,0.1)', color: 'var(--status-success)'}}>Resolved</span>
               </td>
             </tr>
             <tr>
               <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>#TKT-9011</td>
               <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9', fontWeight: '500' }}>Hostel Maintenance Request</td>
               <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>Administration</td>
               <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>
                 <span className="badge" style={{background: 'rgba(245,158,11,0.1)', color: 'var(--status-warning)'}}>In Progress</span>
               </td>
             </tr>
           </tbody>
         </table>
      </div>
    </div>
  );
}
