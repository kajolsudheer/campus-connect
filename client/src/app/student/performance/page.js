'use client';

import { useState } from 'react';
import './performance.css';

export default function PerformancePage() {
  const [activeTab, setActiveTab] = useState('INTERNAL'); // INTERNAL, SEMESTER, SUPPLE

  const results = {
    INTERNAL: [
      { subject: 'Data Structures', marks: 45, max: 50, grade: 'A' },
      { subject: 'Database Management', marks: 42, max: 50, grade: 'A' },
      { subject: 'Computer Networks', marks: 38, max: 50, grade: 'B' },
      { subject: 'Operating Systems', marks: 47, max: 50, grade: 'S' },
    ],
    SEMESTER: [
      { subject: 'Data Structures', marks: 88, max: 100, grade: 'A', status: 'PASS' },
      { subject: 'Database Management', marks: 85, max: 100, grade: 'A', status: 'PASS' },
    ],
    SUPPLE: []
  };

  const activeResults = results[activeTab];

  return (
    <div className="performance-container animate-fade-in">
      <div className="page-header">
        <h2>My Performance</h2>
        <div className="tabs">
          <button 
            className={`tab-btn ${activeTab === 'INTERNAL' ? 'active' : ''}`}
            onClick={() => setActiveTab('INTERNAL')}
          >
            Internal Exams
          </button>
          <button 
            className={`tab-btn ${activeTab === 'SEMESTER' ? 'active' : ''}`}
            onClick={() => setActiveTab('SEMESTER')}
          >
            Semester End
          </button>
          <button 
            className={`tab-btn ${activeTab === 'SUPPLE' ? 'active' : ''}`}
            onClick={() => setActiveTab('SUPPLE')}
          >
            Supplementary
          </button>
        </div>
      </div>

      <div className="performance-body glass-panel">
        {activeResults.length === 0 ? (
          <div className="empty-state">No results published for this category yet. 📊</div>
        ) : (
          <table className="results-table">
            <thead>
              <tr>
                <th>Subject Name</th>
                <th>Marks Obtained</th>
                <th>Maximum Marks</th>
                <th>Grade</th>
                {activeTab === 'SEMESTER' && <th>Status</th>}
              </tr>
            </thead>
            <tbody>
              {activeResults.map((res, idx) => (
                <tr key={idx}>
                  <td><strong>{res.subject}</strong></td>
                  <td>{res.marks}</td>
                  <td>{res.max}</td>
                  <td><span className={`grade-badge grade-${res.grade}`}>{res.grade}</span></td>
                  {activeTab === 'SEMESTER' && (
                    <td><span className={`status-badge ${res.status === 'PASS' ? 'present' : 'absent'}`}>{res.status}</span></td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className="performance-summary">
           <div className="summary-card text-center">
             <h4>Semester SGPA</h4>
             <div className="sgpa-score text-primary">8.75</div>
           </div>
           <div className="summary-card text-center">
             <h4>Overall CGPA</h4>
             <div className="sgpa-score text-accent">8.60</div>
           </div>
        </div>
      </div>
    </div>
  );
}
