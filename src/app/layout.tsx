import { sansFont } from '@/lib/fonts';
import ComposeProvider from '@/providers';
import '@/styles/index.css';
import '@/lib/env';
import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import HeaderShow from '@/components/common/header-show';
import { Toaster } from '@/components/ui/toaster';

//TODO seo

export default async function RootLayout({
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
          <Toaster />
          <HeaderShow>
            <Header />
          </HeaderShow>
          <main className="max-w-5xl mx-auto min-h-screen">{children}</main>
          <Footer />
        </ComposeProvider>
      </body>
    </html>
  );
}
