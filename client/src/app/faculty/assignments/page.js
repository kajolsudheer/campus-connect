'use client';

import { useState } from 'react';

export default function AssignmentManagerPage() {
  const [reviewTarget, setReviewTarget] = useState(null);

  const handleGrade = (e) => {
    e.preventDefault();
    alert(`Grade saved for ${reviewTarget}! Moving to next student...`);
    setReviewTarget(null);
  };

  return (
    <div className="animate-fade-in relative">
      <h2 style={{ marginBottom: '1.5rem' }}>Assignment Manager</h2>
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
           <div>
             <h3>Active Assignments</h3>
             <p className="text-muted" style={{ marginTop: '0.5rem' }}>You have 42 pending submissions to review across 2 active assignments.</p>
           </div>
           <button className="btn btn-primary" onClick={() => alert("Opening New Assignment Wizard...")}>+ Create Assignment</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
          <div style={{ padding: '1.5rem', background: 'var(--bg-base)', borderRadius: '0.5rem', border: '1px solid rgba(0,0,0,0.05)' }}>
            <h4>Midterm Project</h4>
            <p className="text-muted" style={{ fontSize: '0.85rem' }}>Data Structures &bull; Due 20 Oct</p>
            <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--status-warning)', fontWeight: '600' }}>30/40 Submitted</span>
              <button className="btn btn-outline btn-sm" onClick={() => setReviewTarget('Midterm Project')}>Review Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Review Modal */}
      {reviewTarget && (
        <div className="modal-overlay" style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
            background: 'rgba(0,0,0,0.5)', zIndex: 1000, 
            display: 'flex', justifyContent: 'center', alignItems: 'center'
        }} onClick={() => setReviewTarget(null)}>
          <div className="modal-content glass-panel animate-fade-in" onClick={e => e.stopPropagation()} style={{ width: '500px', padding: '2rem', borderRadius: '1rem', background: 'var(--bg-base)' }}>
             <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '0.5rem' }}>Grading: {reviewTarget}</h3>
             
             <div style={{ marginBottom: '1.5rem' }}>
                <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Student Submission:</p>
                <div style={{ padding: '1rem', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <span><strong>Alex Student_Submission.pdf</strong></span>
                   <button className="btn btn-outline btn-sm">Download</button>
                </div>
             </div>

             <form onSubmit={handleGrade} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label className="form-label">Grade (Out of 100)</label>
                  <input type="number" className="form-input" required min="0" max="100" />
                </div>
                <div>
                  <label className="form-label">Feedback</label>
                  <textarea className="form-input" rows="3" placeholder="Great job..." required></textarea>
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                   <button type="button" className="btn btn-outline" style={{ flex: 1 }} onClick={() => setReviewTarget(null)}>Cancel</button>
                   <button type="submit" className="btn btn-primary" style={{ flex: 1, background: 'var(--status-success)', borderColor: 'var(--status-success)' }}>Save Grade</button>
                </div>
             </form>
          </div>
        </div>
      )}
    </div>
  );
}
