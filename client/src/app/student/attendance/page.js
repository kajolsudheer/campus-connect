'use client';

import { useState } from 'react';
import './attendance.css';

export default function AttendancePage() {
  const [view, setView] = useState('SUBJECT'); // 'SUBJECT' or 'HOUR'
  const [selectedSubject, setSelectedSubject] = useState(null);

  const subjectData = [
    { name: 'Data Structures', code: 'CS304', total: 40, attended: 35 },
    { name: 'Database Management', code: 'CS305', total: 38, attended: 32 },
    { name: 'Computer Networks', code: 'CS306', total: 42, attended: 40 },
    { name: 'Operating Systems', code: 'CS307', total: 35, attended: 20 },
  ];

  const hourData = [
    { date: '14 Oct 2026', day: 'Wednesday', hours: [true, true, false, true, true] },
    { date: '13 Oct 2026', day: 'Tuesday', hours: [true, true, true, true, true] },
    { date: '12 Oct 2026', day: 'Monday', hours: [false, true, true, true, true] },
  ];

  const detailLogs = [
    { date: '14 Oct 2026', status: 'Present' },
    { date: '12 Oct 2026', status: 'Present' },
    { date: '08 Oct 2026', status: 'Absent' },
    { date: '05 Oct 2026', status: 'Present' },
  ];

  return (
    <div className="attendance-container animate-fade-in relative">
      <div className="page-header">
        <h2>My Attendance</h2>
        <div className="view-toggle">
          <button 
            className={`toggle-btn ${view === 'SUBJECT' ? 'active' : ''}`}
            onClick={() => setView('SUBJECT')}
          >
            Subject-wise
          </button>
          <button 
            className={`toggle-btn ${view === 'HOUR' ? 'active' : ''}`}
            onClick={() => setView('HOUR')}
          >
            Hour-wise
          </button>
        </div>
      </div>

      <div className="glass-panel panel-body">
        {view === 'SUBJECT' ? (
          <div className="subject-grid">
            {subjectData.map((sub, idx) => {
              const perc = Math.round((sub.attended / sub.total) * 100);
              const statusClass = perc >= 75 ? 'good' : perc >= 60 ? 'warning' : 'danger';
              return (
                <div className="subject-card" key={idx} style={{cursor: 'pointer'}} onClick={() => setSelectedSubject(sub)}>
                  <h3>{sub.name}</h3>
                  <div className={`perc-ring ${statusClass}`}>
                    <span>{perc}%</span>
                  </div>
                  <p className="attendance-stats">{sub.attended} / {sub.total} Classes</p>
                  <p className="text-muted" style={{fontSize: '0.8rem', marginTop: '0.5rem'}}>Click for details</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="hour-table-wrapper">
            <table className="hour-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Day</th>
                  <th>Hour 1</th>
                  <th>Hour 2</th>
                  <th>Hour 3</th>
                  <th>Hour 4</th>
                  <th>Hour 5</th>
                </tr>
              </thead>
              <tbody>
                {hourData.map((log, idx) => (
                  <tr key={idx}>
                    <td><strong>{log.date}</strong></td>
                    <td>{log.day}</td>
                    {log.hours.map((present, hIdx) => (
                      <td key={hIdx}>
                        <span className={`status-badge ${present ? 'present' : 'absent'}`}>
                          {present ? 'P' : 'A'}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Subject Detail Modal */}
      {selectedSubject && (
        <div className="modal-overlay" style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
            background: 'rgba(0,0,0,0.5)', zIndex: 1000, 
            display: 'flex', justifyContent: 'center', alignItems: 'center'
        }} onClick={() => setSelectedSubject(null)}>
          <div className="modal-content glass-panel animate-fade-in" onClick={e => e.stopPropagation()} style={{ width: '400px', padding: '2rem', borderRadius: '1rem', background: 'var(--bg-base)' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '0.5rem' }}>
                <h3 style={{ margin: 0 }}>{selectedSubject.name}</h3>
                <button onClick={() => setSelectedSubject(null)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>×</button>
             </div>
             
             <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                <span className="text-muted">Total Classes: {selectedSubject.total}</span>
                <span className="text-primary font-bold">Attended: {selectedSubject.attended}</span>
             </div>

             <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                   <thead>
                      <tr>
                         <th style={{ padding: '0.5rem', borderBottom: '1px solid #e2e8f0' }}>Date</th>
                         <th style={{ padding: '0.5rem', borderBottom: '1px solid #e2e8f0' }}>Status</th>
                      </tr>
                   </thead>
                   <tbody>
                      {detailLogs.map((log, i) => (
                         <tr key={i}>
                            <td style={{ padding: '0.5rem', borderBottom: '1px solid #f1f5f9' }}>{log.date}</td>
                            <td style={{ padding: '0.5rem', borderBottom: '1px solid #f1f5f9' }}>
                               <span className={`badge ${log.status === 'Present' ? 'badge-success' : 'badge-danger'}`} style={{ 
                                   background: log.status === 'Present' ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)',
                                   color: log.status === 'Present' ? 'var(--status-success)' : 'var(--status-danger)',
                                   padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold'
                               }}>
                                  {log.status}
                               </span>
                            </td>
                         </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </div>
        </div>
      )}
    </div>
  );
}
