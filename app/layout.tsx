import './globals.css';
import config from '../config.json';

export const metadata = {
  title: config.meta.title,
  description: config.meta.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { primaryColor, secondaryColor, accentColor } = config.design;
  return (
    <html lang="tr" style={{ '--primary': primaryColor, '--secondary': secondaryColor, '--accent': accentColor } as any}>
      <head>
        <link href={`https://fonts.googleapis.com/css2?family=${config.design.fontFamily}:wght@300;400;500;600;700&display=swap`} rel="stylesheet" />
      </head>
      <body style={{ fontFamily: `'${config.design.fontFamily}', system-ui, sans-serif` }}>
        {children}
      </body>
    </html>
  );
}
