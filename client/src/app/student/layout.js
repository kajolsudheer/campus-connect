'use client';

import PortalLayout from '../../components/PortalLayout';

export default function StudentLayout({ children }) {
  // In a real app we'd fetch the user's details and role from context/auth state.
  return (
    <PortalLayout role="STUDENT" userName="Alex Student">
      {children}
    </PortalLayout>
  );
}
