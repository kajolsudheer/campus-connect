'use client';

import { useRouter } from 'next/navigation';
import './faculty.css';

export default function FacultyDashboard() {
  const router = useRouter();

  const classesToday = [
    { time: '09:00 - 10:00', subject: 'Data Structures (CS304)', room: 'Room 301' },
    { time: '11:00 - 12:00', subject: 'Algorithms Lab', room: 'Lab 2' },
  ];

  const pendingTasks = [
    { title: 'Grade Midterm Papers', count: 42, type: 'urgent' },
    { title: 'Review Leave Requests', count: 3, type: 'normal' },
  ];

  const handlePublish = () => {
    alert("Event Published Successfully!");
    router.push('/faculty/events');
  };

  return (
    <div className="faculty-dashboard animate-fade-in">
      <div className="page-header" style={{ marginBottom: '2rem' }}>
        <h2>Faculty Dashboard</h2>
        <p className="text-muted">Welcome to your workspace, Prof. Davis</p>
      </div>

      <div className="dashboard-grid">
        {/* Left Column */}
        <div className="dashboard-col">
           <div className="glass-panel panel-card">
              <h3 className="panel-title">Today's Schedule</h3>
              <div className="schedule-list">
                 {classesToday.map((cls, idx) => (
                   <div className="schedule-item" key={idx}>
                     <div className="schedule-time">{cls.time}</div>
                     <div className="schedule-info">
                       <h4>{cls.subject}</h4>
                       <p className="text-muted">📍 {cls.room}</p>
                     </div>
                     <button className="btn btn-outline btn-sm" onClick={() => router.push('/faculty/attendance')}>Mark Attendance</button>
                   </div>
                 ))}
              </div>
           </div>

           <div className="glass-panel panel-card" style={{ marginTop: '2rem' }}>
              <h3 className="panel-title">Quick Actions</h3>
              <div className="quick-actions-grid">
                <button className="action-card" onClick={() => router.push('/faculty/materials')}>
                   <span className="action-icon">📚</span>
                   <span>Upload Material</span>
                </button>
                <button className="action-card" onClick={() => router.push('/faculty/assignments')}>
                   <span className="action-icon">📝</span>
                   <span>New Assignment</span>
                </button>
                <button className="action-card" onClick={() => router.push('/faculty/events')}>
                   <span className="action-icon">📢</span>
                   <span>Publish Event</span>
                </button>
              </div>
           </div>
        </div>

        {/* Right Column */}
        <div className="dashboard-col">
           <div className="glass-panel panel-card">
              <h3 className="panel-title">Pending Tasks</h3>
              <div className="task-list">
                {pendingTasks.map((task, idx) => (
                  <div className={`task-item type-${task.type}`} key={idx}>
                    <div className="task-content">
                      <h4>{task.title}</h4>
                      <p className="text-muted">{task.count} items require your attention</p>
                    </div>
                    <button className="btn btn-primary btn-sm" onClick={() => router.push('/faculty/assignments')}>Review</button>
                  </div>
                ))}
              </div>
           </div>

           {/* Event Publisher Mini Widget */}
           <div className="glass-panel panel-card" style={{ marginTop: '2rem' }}>
              <h3 className="panel-title">Quick Publish Event</h3>
              <div className="publish-form">
                <input type="text" className="form-input" placeholder="Event Title" style={{marginBottom: '1rem'}} />
                <textarea className="form-input" placeholder="Event Description..." rows="3" style={{marginBottom: '1rem'}}></textarea>
                <input type="file" id="dashboard-event-file" style={{ display: 'none' }} onChange={(e) => alert(`Selected file: ${e.target.files[0]?.name}`)} />
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <button className="btn btn-outline btn-sm" onClick={() => document.getElementById('dashboard-event-file').click()}>📎 Attach File</button>
                  <button className="btn btn-primary" onClick={handlePublish}>Publish to Students</button>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
