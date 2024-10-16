'use client';

import { cn } from '@/lib/utils';
import { useIsClient } from 'foxact/use-is-client';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';

export default function Background() {
  const segments = usePathname().split('/');
  const { resolvedTheme } = useTheme();
  const isClient = useIsClient();
  const show =
    (segments.length > 2 && segments[1] === 'blog') ||
    (segments.length === 2 && segments[1] === 'about');

  return (
    show && (
      <motion.div
        className={cn(
          'absolute inset-0 -z-10 transition-all from-sky-400/10 bg-gradient-to-b to-[350px]',
          {
            ['from-slate-600/50']: isClient && resolvedTheme === 'dark',
          },
        )}
        initial={{
          opacity: 0,
          y: -50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          ease: 'easeOut',
          duration: 1,
        }}
      />
    )
  );
}
