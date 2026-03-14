'use client';

import PortalLayout from '../../components/PortalLayout';

export default function FacultyLayout({ children }) {
  return (
    <PortalLayout role="FACULTY" userName="Prof. Davis">
      {children}
    </PortalLayout>
  );
}
