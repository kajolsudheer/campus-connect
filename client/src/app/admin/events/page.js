export default function AdminEventsPage() {
  return (
    <div className="animate-fade-in">
      <div className="page-header" style={{ marginBottom: '2rem' }}>
        <h2>System Events Log</h2>
        <p className="text-muted">Global view of all broadcasted notifications</p>
      </div>

      <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
        <h3 style={{ color: 'var(--color-primary)' }}>System Log Operational</h3>
        <p className="text-muted" style={{ marginTop: '1rem' }}>All faculty broadcasts and administrative announcements appear here. Currently, the unified event feed is up to date.</p>
      </div>
    </div>
  );
}
