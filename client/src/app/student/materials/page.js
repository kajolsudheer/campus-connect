'use client';

import { useState } from 'react';

export default function StudyMaterialsPage() {
  const [selectedFolder, setSelectedFolder] = useState(null);

  const folders = [
    { code: 'CS304', name: 'Data Structures' },
    { code: 'CS305', name: 'Database Systems' },
    { code: 'CS306', name: 'Computer Networks' },
  ];

  const materials = [
    { title: 'Data Structures Notes Module 1', course: 'CS304', type: 'PDF', size: '2.4 MB', date: '10 Oct 2026' },
    { title: 'Sorting Algorithms Slides', course: 'CS304', type: 'PPTX', size: '5.1 MB', date: '12 Oct 2026' },
    { title: 'Database Normalization PDF', course: 'CS305', type: 'PDF', size: '1.8 MB', date: '14 Oct 2026' },
    { title: 'Computer Networks Topologies', course: 'CS306', type: 'PDF', size: '3.2 MB', date: '15 Oct 2026' },
  ];

  return (
    <div className="materials-container animate-fade-in">
      <div className="page-header" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Study Materials</h2>
        {selectedFolder && (
           <button className="btn btn-outline" onClick={() => setSelectedFolder(null)}>← Back to Folders</button>
        )}
      </div>

      {!selectedFolder ? (
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {folders.map((f, i) => (
              <div key={i} className="glass-panel" style={{ padding: '2rem', textAlign: 'center', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', transition: 'transform 0.2s' }}
                   onClick={() => setSelectedFolder(f.code)}
                   onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                   onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                 <span style={{ fontSize: '3rem' }}>📁</span>
                 <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{f.name}</h3>
                 <span className="badge" style={{ background: 'rgba(79,70,229,0.1)', color: 'var(--color-primary)' }}>{materials.filter(m => m.course === f.code).length} files</span>
              </div>
            ))}
         </div>
      ) : (
         <div className="materials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', animation: 'fadeIn 0.3s ease' }}>
           {materials.filter(m => m.course === selectedFolder).map((mat, idx) => (
             <div key={idx} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', transition: 'transform 0.2s ease', cursor: 'pointer', border: '1px solid rgba(0,0,0,0.05)' }}
               onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
               onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
             >
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                 <div style={{ padding: '0.5rem', background: mat.type === 'PDF' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(245, 158, 11, 0.1)', color: mat.type === 'PDF' ? '#EF4444' : '#F59E0B', borderRadius: '0.5rem', fontWeight: 'bold' }}>
                   {mat.type}
                 </div>
                 <span style={{ fontSize: '0.8rem', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--color-primary)', padding: '2px 8px', borderRadius: '12px', fontWeight: '600' }}>{mat.course}</span>
               </div>
               
               <div>
                 <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', lineHeight: '1.4' }}>{mat.title}</h3>
                 <p className="text-muted" style={{ fontSize: '0.85rem' }}>Uploaded on {mat.date} &bull; {mat.size}</p>
               </div>

               <button className="btn btn-outline" style={{ marginTop: 'auto', width: '100%' }} onClick={() => alert(`Starting download for ${mat.title}...`)}>
                 Download File
               </button>
             </div>
           ))}
           {materials.filter(m => m.course === selectedFolder).length === 0 && (
             <p className="text-muted" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem' }}>No materials uploaded yet for this subject.</p>
           )}
         </div>
      )}
    </div>
  );
}
