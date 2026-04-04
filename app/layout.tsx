import './globals.css';

export const metadata = { title: 'Altai Digital Demo', description: 'AI-powered demo websites' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"/></head>
      <body style={{fontFamily:"'Inter',system-ui,sans-serif"}}>{children}</body>
    </html>
  );
}
