'use client';

import { useState } from 'react';
import './timetable.css';

export default function TimetablePage() {
  const [view, setView] = useState('CLASS'); // 'CLASS' or 'EXAM'

  const classTimetable = [
    { day: 'Monday', slots: ['CS304', 'CS304', 'LUNCH', 'MATH201', 'LAB'] },
    { day: 'Tuesday', slots: ['MATH201', 'FREE', 'LUNCH', 'CS304', 'CS304'] },
    { day: 'Wednesday', slots: ['LAB', 'LAB', 'LUNCH', 'FREE', 'MATH201'] },
  ];

  const examTimetable = [
    { date: '25 Oct 2026', time: '10:00 AM - 01:00 PM', subject: 'Data Structures (CS304)', type: 'Midterm', status: 'Upcoming' },
    { date: '28 Oct 2026', time: '02:00 PM - 05:00 PM', subject: 'Database Systems (CS305)', type: 'Midterm', status: 'Upcoming' },
  ];

  return (
    <div className="timetable-container animate-fade-in">
      <div className="page-header">
        <h2>Timetable</h2>
        <div className="view-toggle">
          <button 
            className={`toggle-btn ${view === 'CLASS' ? 'active' : ''}`}
            onClick={() => setView('CLASS')}
          >
            Class Schedule
          </button>
          <button 
            className={`toggle-btn ${view === 'EXAM' ? 'active' : ''}`}
            onClick={() => setView('EXAM')}
          >
            Exam Schedule
          </button>
        </div>
      </div>

      <div className="glass-panel panel-body">
        {view === 'CLASS' ? (
          <div className="timetable-grid">
            <div className="time-headers">
              <div className="time-slot header-cell">Day</div>
              <div className="time-slot header-cell">09:00 - 10:00</div>
              <div className="time-slot header-cell">10:00 - 11:00</div>
              <div className="time-slot header-cell">11:00 - 12:00</div>
              <div className="time-slot header-cell">12:00 - 01:00</div>
              <div className="time-slot header-cell">01:00 - 03:00</div>
            </div>
            {classTimetable.map((row, idx) => (
              <div className="timetable-row" key={idx}>
                <div className="time-slot row-header">{row.day}</div>
                {row.slots.map((slot, sIdx) => (
                  <div className={`time-slot content-cell ${slot === 'LUNCH' || slot === 'FREE' ? 'dimmed' : ''}`} key={sIdx}>
                    {slot}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="exam-list">
             {examTimetable.map((exam, idx) => (
               <div className="exam-card" key={idx}>
                 <div className="exam-date-box">
                   <span className="exam-month">{exam.date.split(' ')[1]}</span>
                   <span className="exam-day">{exam.date.split(' ')[0]}</span>
                 </div>
                 <div className="exam-details">
                   <h3>{exam.subject}</h3>
                   <p className="text-muted">{exam.time} &bull; {exam.type}</p>
                 </div>
                 <div className="exam-actions">
                    <span className="badge warning badge-pill">{exam.status}</span>
                 </div>
               </div>
             ))}
          </div>
        )}
      </div>
    </div>
  );
}
