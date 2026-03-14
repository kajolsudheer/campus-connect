'use client';

import PortalLayout from '../../components/PortalLayout';

export default function AdminLayout({ children }) {
  return (
    <PortalLayout role="ADMIN" userName="System Admin">
      {children}
    </PortalLayout>
  );
}
