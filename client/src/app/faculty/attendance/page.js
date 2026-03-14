'use client';

import { useState } from 'react';

export default function AttendanceMarkerPage() {
  const [selectedClass, setSelectedClass] = useState(null);

  const students = [
    { id: 'CS2026-001', name: 'Alice Adams' },
    { id: 'CS2026-002', name: 'Bob Baker' },
    { id: 'CS2026-003', name: 'Charlie Clark' },
    { id: 'CS2026-004', name: 'David Dover' },
  ];

  const handleMark = () => {
    alert(`Attendance marked successfully for ${selectedClass}!`);
    setSelectedClass(null);
  };

  return (
    <div className="animate-fade-in relative">
      <div className="page-header" style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between' }}>
        <h2>Mark Attendance</h2>
        {selectedClass && (
           <button className="btn btn-outline" onClick={() => setSelectedClass(null)}>← Back to Classes</button>
        )}
      </div>

      {!selectedClass ? (
        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center' }}>
          <h3 style={{ color: 'var(--color-primary)' }}>Select a class to mark attendance</h3>
          <p className="text-muted" style={{ marginTop: '1rem' }}>You have 2 scheduled classes today.</p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
             <button className="btn btn-outline" onClick={() => setSelectedClass('Data Structures (CS304)')}>Data Structures (CS304)</button>
             <button className="btn btn-outline" onClick={() => setSelectedClass('Algorithms Lab')}>Algorithms Lab</button>
          </div>
        </div>
      ) : (
        <div className="glass-panel" style={{ padding: '2rem', animation: 'fadeIn 0.3s ease' }}>
          <h3 style={{ marginBottom: '1rem' }}>Roster for {selectedClass}</h3>
          
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', marginBottom: '2rem' }}>
            <thead>
              <tr>
                <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0' }}>Student ID</th>
                <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0' }}>Name</th>
                <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((stu, i) => (
                <tr key={i}>
                  <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>{stu.id}</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9', fontWeight: '500' }}>{stu.name}</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>
                    <div style={{ display: 'inline-flex', gap: '0.5rem' }}>
                      <button className="btn btn-sm" style={{ background: 'var(--status-success)', color: 'white' }}>P</button>
                      <button className="btn btn-outline btn-sm" style={{ borderColor: 'var(--status-danger)', color: 'var(--status-danger)' }}>A</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-primary" onClick={handleMark}>Submit Attendance</button>
        </div>
      )}
    </div>
  );
}
