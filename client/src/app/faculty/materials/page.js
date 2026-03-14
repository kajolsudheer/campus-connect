'use client';

export default function MaterialUploadPage() {
  const handleFileSelect = (e) => {
    if(e.target.files.length > 0) {
      alert(`Successfully queued ${e.target.files[0].name} for upload.`);
    }
  };

  return (
    <div className="animate-fade-in">
      <h2 style={{ marginBottom: '1.5rem' }}>Upload Study Materials</h2>
      <div className="glass-panel" style={{ padding: '3rem' }}>
        <div style={{ border: '2px dashed rgba(79, 70, 229, 0.4)', borderRadius: '1rem', padding: '4rem', textAlign: 'center', background: 'rgba(79, 70, 229, 0.02)' }}>
           <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📚</div>
           <h3>Drag and drop course material PDFs or Slides here</h3>
           <p className="text-muted" style={{ marginTop: '0.5rem' }}>Organized by course and week instantly.</p>
           
           <input type="file" id="material-upload" style={{ display: 'none' }} multiple onChange={handleFileSelect} />
           <button className="btn btn-primary" style={{ marginTop: '1.5rem' }} onClick={() => document.getElementById('material-upload').click()}>
             Select Files
           </button>
        </div>
      </div>
    </div>
  );
}
