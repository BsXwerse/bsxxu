import Header from '@/components/header/header';
import { sansFont } from '@/lib/fonts';
import ComposeProvider from '@/providers';
import { Toaster } from 'react-hot-toast';
import '@/styles/index.css';
import Background from '@/components/backgroud';
import Footer from '@/components/footer';
import PaschalEggs from '@/components/paschal-eggs';

//TODO seo

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh"
      className={`${sansFont.variable} scroll-smooth scrollbar-thin font-sans antialiased `}
    >
      <body className="bg-background text-foreground transition-colors">
        <ComposeProvider>
          <PaschalEggs />
          <Toaster />
          <Header />
          <Background />
          <main className="max-w-5xl mx-auto min-h-screen">{children}</main>
          <Footer />
        </ComposeProvider>
      </body>
    </html>
  );
}
