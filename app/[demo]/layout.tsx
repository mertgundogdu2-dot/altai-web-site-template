import { loadConfig } from '../../lib/loadConfig';

export function generateMetadata({ params }: { params: { demo: string } }) {
  const config = loadConfig(params.demo);
  return { title: config.meta.title, description: config.meta.description };
}

export default function DemoLayout({ children, params }: { children: React.ReactNode; params: { demo: string } }) {
  const config = loadConfig(params.demo);
  return (
    <div style={{ '--primary': config.design.primaryColor, '--secondary': config.design.secondaryColor, '--accent': config.design.accentColor } as any}>
      {children}
    </div>
  );
}
