export default function StudentEventsPage() {
  const events = [
    { title: 'Annual Tech Symposium 2026', date: '25 Oct 2026', type: 'College Event', desc: 'Join us for a 3-day technical fest featuring hackathons, workshops, and guest lectures.' },
    { title: 'Semester 5 Orientation', date: '01 Nov 2026', type: 'Departmental', desc: 'Mandatory orientation for all 3rd year students outlining the upcoming curriculum.' },
    { title: 'Campus Recruitment Drive Start', date: '15 Nov 2026', type: 'Placements', desc: 'Top tier software companies visiting campus. Make sure your resumes are updated.' }
  ];

  return (
    <div className="animate-fade-in">
      <div className="page-header" style={{ marginBottom: '2rem' }}>
        <h2>Campus Events</h2>
        <p className="text-muted">Stay updated with everything happening in the college</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {events.map((event, idx) => (
          <div key={idx} className="glass-panel" style={{ padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
             <div style={{ minWidth: '120px', textAlign: 'center', background: 'rgba(79,70,229,0.05)', borderRadius: '1rem', padding: '1rem', border: '1px solid rgba(79,70,229,0.1)' }}>
               <h3 style={{ color: 'var(--color-primary)', fontSize: '1.5rem', marginBottom: '0.2rem' }}>{event.date.split(' ')[0]}</h3>
               <span className="text-muted">{event.date.split(' ')[1]} {event.date.split(' ')[2]}</span>
             </div>
             <div style={{ flex: 1 }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                 <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{event.title}</h3>
                 <span className="badge" style={{ background: 'var(--bg-base)' }}>{event.type}</span>
               </div>
               <p className="text-muted" style={{ lineHeight: '1.5', marginBottom: '1rem' }}>{event.desc}</p>
               <button className="btn btn-outline btn-sm">RSVP / Learn More</button>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
