import './globals.css';

export const metadata = {
  title: 'Campus Connect - Empowering Education',
  description: 'All-in-one student portal and campus management system',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <main className="app-main">
          {children}
        </main>
      </body>
    </html>
  );
}
