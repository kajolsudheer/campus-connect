'use client';

import { useState } from 'react';

export default function FacultyTimetablePage() {
  const [view, setView] = useState('CLASS'); // 'CLASS' or 'EXAM'

  const classTimetable = [
    { day: 'Monday', slots: ['CS304', 'CS304', 'LUNCH', 'FREE', 'CS304 (Lab)'] },
    { day: 'Tuesday', slots: ['FREE', 'FREE', 'LUNCH', 'CS304', 'CS304'] },
    { day: 'Wednesday', slots: ['CS304 (Lab)', 'CS304 (Lab)', 'LUNCH', 'FREE', 'FREE'] },
  ];

  const examInvigilation = [
    { date: '25 Oct 2026', time: '10:00 AM - 01:00 PM', subject: 'Data Structures (CS304)', room: 'Main Hall', status: 'Scheduled' },
    { date: '28 Oct 2026', time: '02:00 PM - 05:00 PM', subject: 'Database Systems (CS305)', room: 'Room 301', status: 'Scheduled' },
  ];

  return (
    <div className="timetable-container animate-fade-in">
      <div className="page-header" style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between' }}>
        <h2>My Timetable</h2>
        <div className="view-toggle" style={{ display: 'flex', background: 'var(--bg-surface)', padding: '4px', borderRadius: 'var(--radius-full)', boxShadow: 'var(--shadow-sm)' }}>
          <button 
            className="btn" 
            style={{ borderRadius: 'var(--radius-full)', background: view === 'CLASS' ? 'var(--color-primary)' : 'transparent', color: view === 'CLASS' ? 'white' : 'var(--text-muted)' }}
            onClick={() => setView('CLASS')}
          >
            Class Schedule
          </button>
          <button 
            className="btn" 
            style={{ borderRadius: 'var(--radius-full)', background: view === 'EXAM' ? 'var(--color-primary)' : 'transparent', color: view === 'EXAM' ? 'white' : 'var(--text-muted)' }}
            onClick={() => setView('EXAM')}
          >
            Invigilation Duty
          </button>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '2rem' }}>
        {view === 'CLASS' ? (
          <div>
            <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.5rem' }}>Weekly Schedule for Prof. Davis</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', background: 'rgba(0,0,0,0.02)', borderRadius: '0.5rem', overflow: 'hidden' }}>
              <thead>
                <tr style={{ background: 'var(--color-primary)', color: 'white' }}>
                  <th style={{ padding: '1rem' }}>Day</th>
                  <th style={{ padding: '1rem' }}>09:00 - 10:00</th>
                  <th style={{ padding: '1rem' }}>10:00 - 11:00</th>
                  <th style={{ padding: '1rem' }}>11:00 - 12:00</th>
                  <th style={{ padding: '1rem' }}>12:00 - 01:00</th>
                  <th style={{ padding: '1rem' }}>01:00 - 03:00</th>
                </tr>
              </thead>
              <tbody>
                {classTimetable.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <td style={{ padding: '1rem', fontWeight: 'bold' }}>{row.day}</td>
                    {row.slots.map((slot, sIdx) => (
                      <td key={sIdx} style={{ padding: '1rem', color: slot === 'FREE' || slot === 'LUNCH' ? 'var(--text-muted)' : 'var(--text-main)', background: slot !== 'FREE' && slot !== 'LUNCH' ? 'rgba(79, 70, 229, 0.05)' : 'transparent' }}>
                        {slot}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
             <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.5rem' }}>Upcoming Invigilation Duties</h3>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
               {examInvigilation.map((exam, idx) => (
                 <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-base)', padding: '1rem', borderRadius: '0.5rem', border: '1px solid rgba(0,0,0,0.05)' }}>
                   <div>
                     <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{exam.subject}</h4>
                     <p className="text-muted" style={{ fontSize: '0.9rem' }}>{exam.date} &bull; {exam.time}</p>
                   </div>
                   <div style={{ textAlign: 'right' }}>
                     <span style={{ display: 'block', fontWeight: 'bold', marginBottom: '4px' }}>📍 {exam.room}</span>
                     <span style={{ fontSize: '0.8rem', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--color-primary)', padding: '2px 8px', borderRadius: '12px' }}>{exam.status}</span>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        )}
      </div>
    </div>
  );
}
