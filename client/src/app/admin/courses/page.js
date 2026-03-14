'use client';

export default function AdminCoursesPage() {
  return (
    <div className="animate-fade-in">
      <div className="page-header" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Course Management</h2>
        <button className="btn btn-primary" onClick={() => alert("Opening 'Add New Course' Wizard...")}>+ Add New Course</button>
      </div>

      <div className="glass-panel" style={{ padding: '2rem' }}>
         <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.5rem' }}>Active Catalog</h3>
         
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
           {[
             { code: 'CS304', name: 'Data Structures', dept: 'Computer Science', credits: 4 },
             { code: 'CS305', name: 'Database Systems', dept: 'Computer Science', credits: 3 },
             { code: 'ME201', name: 'Thermodynamics', dept: 'Mechanical', credits: 4 },
           ].map((course, idx) => (
             <div key={idx} style={{ padding: '1.5rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '0.5rem', background: 'var(--bg-base)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <span style={{ background: 'rgba(79,70,229,0.1)', color: 'var(--color-primary)', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold' }}>{course.code}</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{course.credits} Credits</span>
                </div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{course.name}</h4>
                <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>{course.dept} Dept.</p>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-outline" style={{ flex: 1, padding: '0.5rem' }} onClick={() => alert(`Opening edit modal for ${course.name}...`)}>Edit</button>
                  <button className="btn btn-outline" style={{ flex: 1, padding: '0.5rem', color: 'var(--status-danger)', borderColor: 'var(--status-danger)' }} onClick={() => { if(confirm(`Are you sure you want to delete ${course.name}?`)) alert('Course deleted successfully.'); }}>Delete</button>
                </div>
             </div>
           ))}
         </div>
      </div>
    </div>
  );
}
