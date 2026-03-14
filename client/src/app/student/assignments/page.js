'use client';

import { useState } from 'react';
import './assignments.css';

export default function AssignmentsPage() {
  const [activeTab, setActiveTab] = useState('PENDING'); // PENDING or COMPLETED
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const assignments = [
    { 
      id: 1, title: 'Build a REST API', 
      course: 'Backend Development', 
      dueDate: '20 Oct 2026', 
      status: 'PENDING',
      description: 'Create a Node.js Express API with CRUD operations and JWT authentication.',
      attachments: ['api_requirements.pdf']
    },
    { 
      id: 2, title: 'Database Normalization', 
      course: 'Database Management', 
      dueDate: '22 Oct 2026', 
      status: 'PENDING',
      description: 'Normalize the given unnormalized table into 3NF.',
      attachments: []
    },
    { 
      id: 3, title: 'React Performance Tuning', 
      course: 'Frontend Engineering', 
      dueDate: '10 Oct 2026', 
      status: 'COMPLETED',
      grade: 'A',
      description: 'Optimize the given React codebase using useMemo, useCallback, and React.memo.',
      attachments: []
    }
  ];

  const filtered = assignments.filter(a => a.status === activeTab);

  return (
    <div className="assignments-container animate-fade-in">
      {!selectedAssignment ? (
        <>
          <div className="page-header">
            <h2>Assignments</h2>
            <div className="tabs">
              <button 
                className={`tab-btn ${activeTab === 'PENDING' ? 'active' : ''}`}
                onClick={() => setActiveTab('PENDING')}
              >
                Pending
              </button>
              <button 
                className={`tab-btn ${activeTab === 'COMPLETED' ? 'active' : ''}`}
                onClick={() => setActiveTab('COMPLETED')}
              >
                Completed
              </button>
            </div>
          </div>

          <div className="assignments-grid">
            {filtered.length === 0 ? (
              <div className="empty-state">No {activeTab.toLowerCase()} assignments. 🚀</div>
            ) : (
              filtered.map(a => (
                <div className="assignment-card glass-panel" key={a.id}>
                  <div className="card-header">
                    <span className="course-badge">{a.course}</span>
                    <span className={`status-dot ${a.status.toLowerCase()}`}></span>
                  </div>
                  <h3 className="assignment-title">{a.title}</h3>
                  <p className="assignment-due"><strong>Due:</strong> {a.dueDate}</p>
                  
                  {a.status === 'COMPLETED' && (
                    <div className="grade-badge">Grade: {a.grade}</div>
                  )}

                  <button 
                    className="btn btn-outline action-btn"
                    onClick={() => setSelectedAssignment(a)}
                  >
                    View Details
                  </button>
                </div>
              ))
            )}
          </div>
        </>
      ) : (
        <div className="assignment-detail glass-panel animate-fade-in">
          <button className="btn back-btn" onClick={() => setSelectedAssignment(null)}>
            &larr; Back to List
          </button>
          
          <div className="detail-header">
            <h2>{selectedAssignment.title}</h2>
            <div className="detail-meta">
              <span className="course-badge">{selectedAssignment.course}</span>
              <span className="due-badge">Due {selectedAssignment.dueDate}</span>
            </div>
          </div>

          <div className="detail-body">
            <h3>Instructions</h3>
            <p className="description-text">{selectedAssignment.description}</p>
            
            {selectedAssignment.attachments.length > 0 && (
              <div className="attachments-section">
                <h4>Attachments</h4>
                <div className="attachment-file">
                   📄 {selectedAssignment.attachments[0]}
                   <button className="btn btn-outline btn-sm">Download</button>
                </div>
              </div>
            )}
          </div>

          <div className="detail-submission">
            <h3>Your Submission</h3>
            {selectedAssignment.status === 'COMPLETED' ? (
              <div className="submission-success">
                ✅ You have submitted this assignment. Grade: <strong>{selectedAssignment.grade}</strong>
              </div>
            ) : (
              <div className="upload-box">
                <input type="file" id="file-upload" className="file-input" />
                <label htmlFor="file-upload" className="upload-label">
                  <div className="upload-icon">📁</div>
                  <span>Drag and drop your solution here or <strong>browse</strong></span>
                </label>
                <textarea 
                  className="form-input" 
                  rows="3" 
                  placeholder="Add a comment or link (optional)"
                  style={{marginTop: 'var(--spacing-4)'}}
                ></textarea>
                <div className="action-row">
                  <button className="btn btn-primary submit-btn">Submit Assignment</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
