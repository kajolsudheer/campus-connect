import Sidebar from './Sidebar';
import Navbar from './Navbar';
import './PortalLayout.css';

export default function PortalLayout({ children, role, userName }) {
  // In a real app we'd get activePath from next/navigation hooks
  // Using a stub for styling purposes
  const activePath = '/student'; // Stub

  return (
    <div className="portal-layout">
      <Sidebar role={role} activePath={activePath} />
      <div className="portal-main-area">
        <Navbar role={role} userName={userName} />
        <main className="portal-content">
          <div className="container">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
