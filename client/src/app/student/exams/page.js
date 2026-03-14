'use client';

export default function ExamRegPage() {
  return (
    <div className="exams-container animate-fade-in">
      <h2 style={{ marginBottom: '1.5rem' }}>Exam Registration</h2>
      <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center' }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>No active registrations</h3>
        <p className="text-muted">There are no upcoming exams open for registration at this time. You will be notified when registrations open.</p>
        <button className="btn btn-outline" style={{ marginTop: '2rem' }} onClick={() => alert("Checking eligibility requirements... You are currently eligible for all registered courses!")}>Check Eligibility</button>
      </div>
    </div>
  );
}
