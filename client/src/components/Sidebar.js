'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Sidebar({ role, activePath }) {
  const router = useRouter();

  const getLinks = () => {
    switch(role) {
      case 'STUDENT':
        return [
          { name: 'Dashboard', path: '/student' },
          { name: 'Attendance', path: '/student/attendance' },
          { name: 'Timetable', path: '/student/timetable' },
          { name: 'Assignments', path: '/student/assignments' },
          { name: 'Study Materials', path: '/student/materials' },
          { name: 'Quizzes / Surveys', path: '/student/quizzes' },
          { name: 'My Performance', path: '/student/performance' },
          { name: 'Exam Registration', path: '/student/exams' },
          { name: 'Leave Management', path: '/student/leaves' },
          { name: 'Fee Payments', path: '/student/fees' },
          { name: 'Events', path: '/student/events' },
          { name: 'Helpdesk', path: '/student/helpdesk' },
        ];
      case 'FACULTY':
        return [
          { name: 'Dashboard', path: '/faculty' },
          { name: 'Timetable', path: '/faculty/timetable' },
          { name: 'Mark Attendance', path: '/faculty/attendance' },
          { name: 'Upload Materials', path: '/faculty/materials' },
          { name: 'Assignments', path: '/faculty/assignments' },
          { name: 'Events', path: '/faculty/events' }
        ];
      case 'ADMIN':
        return [
          { name: 'Dashboard', path: '/admin' },
          { name: 'Manage Users', path: '/admin/users' },
          { name: 'Courses', path: '/admin/courses' },
          { name: 'Events', path: '/admin/events' }
        ];
      default: return [];
    }
  };

  const links = getLinks();

  const handleLogout = () => {
    // In a real app we would clear tokens here
    router.push('/');
  };

  return (
    <aside className="portal-sidebar glass-panel">
      <div className="sidebar-header">
        <h2 className="logo-title">Campus<span className="text-primary">Connect</span></h2>
      </div>
      <nav className="sidebar-nav">
        {links.map((link) => (
          <Link 
            key={link.path} 
            href={link.path}
            className={`sidebar-link ${activePath === link.path ? 'active' : ''}`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <div className="sidebar-footer">
        <button className="btn btn-outline logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </aside>
  );
}
