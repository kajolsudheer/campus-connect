'use client';

export default function StudentQuizzesPage() {
  return (
    <div className="animate-fade-in">
      <div className="page-header" style={{ marginBottom: '2rem' }}>
        <h2>Quizzes & Surveys</h2>
        <p className="text-muted">Participate in academic quizzes and campus surveys</p>
      </div>

      <div className="dashboard-grid">
         <div className="dashboard-col">
            <div className="glass-panel" style={{ padding: '2rem' }}>
               <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.5rem' }}>Active Tasks</h3>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 <div style={{ padding: '1.5rem', background: 'var(--bg-base)', borderRadius: '0.5rem', border: '1px solid rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                       <span className="badge" style={{ background: 'rgba(239,68,68,0.1)', color: 'var(--status-danger)' }}>1 Day Left</span>
                       <span className="text-muted" style={{ fontSize: '0.8rem' }}>CS304</span>
                    </div>
                    <h4 style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>Module 1 Surprise Quiz</h4>
                    <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>20 Questions | 30 Minutes</p>
                    <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => alert("Launching Secure Quiz Environment...")}>Start Quiz Now</button>
                 </div>

                 <div style={{ padding: '1.5rem', background: 'var(--bg-base)', borderRadius: '0.5rem', border: '1px solid rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                       <span className="badge" style={{ background: 'rgba(79,70,229,0.1)', color: 'var(--color-primary)' }}>Survey</span>
                       <span className="text-muted" style={{ fontSize: '0.8rem' }}>Admin</span>
                    </div>
                    <h4 style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>Campus Canteen Feedback</h4>
                    <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Share your thoughts on the new menu.</p>
                    <button className="btn btn-outline" style={{ width: '100%' }} onClick={() => alert("Opening survey form...")}>Take Survey</button>
                 </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
