import './globals.css';
import type { Metadata } from 'next';
import { Outfit, Fira_Code } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://shash-portfolio.vercel.app'),
  title: 'Shashwat Vaish — Full-Stack Developer',
  description: 'Portfolio of Shashwat Vaish, a full-stack developer and BTech CSE student building modern web applications with Next.js, TypeScript, and AI.',
  keywords: ['Shashwat Vaish', 'developer', 'portfolio', 'software engineer', 'full-stack', 'Next.js', 'TypeScript', 'Delhi'],
  authors: [{ name: 'Shashwat Vaish' }],
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shash-portfolio.vercel.app',
    title: 'Shashwat Vaish — Full-Stack Developer',
    description: 'Portfolio of Shashwat Vaish, a full-stack developer building modern web applications.',
    siteName: 'Shashwat Vaish Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shashwat Vaish — Full-Stack Developer',
    description: 'Portfolio of Shashwat Vaish, a full-stack developer building modern web applications.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${firaCode.variable} font-[var(--font-outfit)]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}