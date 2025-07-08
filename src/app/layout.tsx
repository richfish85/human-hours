import '../styles/globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Human Hours · Time designed for living',
  description: 'Fresh data, real stories, and practical tools to end death-by-overwork.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-surface dark:bg-surface-dark antialiased">
        <Navbar />
        <main className="mx-auto max-w-7xl px-6 py-12">{children}</main>
      </body>
    </html>
  );
}
