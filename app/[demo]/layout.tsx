import { loadConfig } from '../../lib/loadConfig';

export function generateMetadata({ params }: { params: { demo: string } }) {
  const config = loadConfig(params.demo);
  return { title: config.meta.title, description: config.meta.description };
}

export default function DemoLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { demo: string };
}) {
  const config = loadConfig(params.demo);
  const font = config.design.fontFamily || 'Inter';

  return (
    <div
      style={{
        '--primary': config.design.primaryColor,
        '--secondary': config.design.secondaryColor,
        '--accent': config.design.accentColor,
        fontFamily: `'${font}', system-ui, sans-serif`,
      } as any}
    >
      <link
        href={`https://fonts.googleapis.com/css2?family=${font.replace(/\s/g, '+')}:wght@300;400;500;600;700;800&display=swap`}
        rel="stylesheet"
      />
      {children}
    </div>
  );
}
