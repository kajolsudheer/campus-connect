import './student.css';

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './student.css';

export default function StudentDashboard() {
  const router = useRouter();
  const [showIdModal, setShowIdModal] = useState(false);

  const studentData = {
    name: 'Alex Student',
    admissionNo: 'CS2026-042',
    department: 'Computer Science and Engineering',
    year: '3rd Year',
    attendance: 87.5,
  };

  const notifications = [
    { title: 'Payment Reminder', text: 'Semester 5 tuition fee is due next week.', type: 'warning', link: '/student/fees' },
    { title: 'Assignment Graded', text: 'Data Structures assignment graded: A+', type: 'success', link: '/student/performance' },
    { title: 'New Study Material', text: 'Prof. Davis uploaded Chapter 4 slides.', type: 'info', link: '/student/materials' }
  ];

  const IDCard = ({ isModal }) => (
    <div className={`digital-id-card ${isModal ? '' : 'animate-float'}`} 
         style={{
           animationDuration: isModal ? '0s' : '8s', 
           cursor: isModal ? 'default' : 'pointer',
           transform: isModal ? 'scale(1.2)' : 'none',
           margin: isModal ? '0 auto' : '0'
         }} 
         onClick={() => { if(!isModal) setShowIdModal(true); }}>
      <div className="id-header">
        <h3>Digital ID Card</h3>
        <span className="badge">Active</span>
      </div>
      <div className="id-body">
        <div className="id-photo">
          <div className="photo-placeholder">Photo</div>
        </div>
        <div className="id-details">
          <h4 className="id-name">{studentData.name}</h4>
          <p className="id-info"><strong>Adm No:</strong> {studentData.admissionNo}</p>
          <p className="id-info"><strong>Dept:</strong> {studentData.department}</p>
          <p className="id-info"><strong>Year:</strong> {studentData.year}</p>
        </div>
      </div>
      <div className="id-footer">
        <div className="qr-code">
           {/* Stub QR code block */}
           <div className="qr-stub">QR</div>
        </div>
        <p className="id-disclaimer">Valid for academic year 2026-2027</p>
      </div>
    </div>
  );

  return (
    <div className="dashboard-container relative">
      <div className="dashboard-header">
        <h1>Dashboard Overview</h1>
        <p className="text-muted">Welcome back to your portal, {studentData.name}</p>
      </div>

      <div className="dashboard-grid">
        {/* Left Column - ID Card & Fast Stats */}
        <div className="dashboard-col">
          {/* Digital ID Card */}
          <div title="Click to expand">
            <IDCard isModal={false} />
          </div>

          <div className="stat-card glass-panel" style={{ cursor: 'pointer' }} onClick={() => router.push('/student/attendance')}>
            <h4>Attendance Record</h4>
            <div className="stat-value text-primary">{studentData.attendance}%</div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${studentData.attendance}%` }}></div>
            </div>
            <p className="text-muted" style={{ fontSize: '0.8rem', marginTop: '0.5rem', textAlign: 'center' }}>Click for breakdown</p>
          </div>
        </div>

        {/* Right Column - Notifications & Quick Links */}
        <div className="dashboard-col dashboard-col-wide">
          <div className="panel glass-panel">
            <h3 className="panel-title">Recent Notifications</h3>
            <div className="notification-list">
              {notifications.map((note, index) => (
                <div className={`notification-item type-${note.type}`} key={index} style={{cursor: 'pointer'}} onClick={() => router.push(note.link)}>
                  <div className="note-icon">
                    {note.type === 'warning' ? '⚠️' : note.type === 'success' ? '✅' : 'ℹ️'}
                  </div>
                  <div className="note-content">
                    <h5 className="note-title">{note.title}</h5>
                    <p className="note-text">{note.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn btn-outline" style={{width: '100%', marginTop: 'var(--spacing-4)'}} onClick={() => router.push('/student/events')}>View All Events</button>
          </div>

          <div className="panel glass-panel">
            <h3 className="panel-title">Upcoming Tasks</h3>
            <div className="task-list">
               <div className="task-item" style={{cursor: 'pointer'}} onClick={() => router.push('/student/assignments')}>
                 <div className="task-meta">
                   <span className="task-date">Tomorrow</span>
                   <span className="task-course">CS304</span>
                 </div>
                 <h5 className="task-title">Database Management Assignment</h5>
               </div>
               <div className="task-item" style={{cursor: 'pointer'}} onClick={() => router.push('/student/timetable')}>
                 <div className="task-meta">
                   <span className="task-date">In 3 Days</span>
                   <span className="task-course">MATH201</span>
                 </div>
                 <h5 className="task-title">Midterm Examination</h5>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* ID Card Full Screen Modal */}
      {showIdModal && (
        <div className="modal-overlay" style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
            background: 'rgba(0,0,0,0.8)', zIndex: 1000, 
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            backdropFilter: 'blur(10px)'
        }} onClick={() => setShowIdModal(false)}>
          <div className="modal-content animate-fade-in" onClick={e => e.stopPropagation()} style={{ position: 'relative' }}>
             <button className="close-btn" onClick={() => setShowIdModal(false)} style={{
                 position: 'absolute', top: '-40px', right: '-40px', 
                 background: 'transparent', border: 'none', color: 'white', 
                 fontSize: '2rem', cursor: 'pointer'
             }}>×</button>
             <IDCard isModal={true} />
          </div>
        </div>
      )}
    </div>
  );
}
