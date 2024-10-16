'use client';

import Avatar from '@/assets/avatar.jpg';
import { cn } from '@/lib/utils';
import { useScrollValue } from '@/providers/scroll-provider';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ClickView from '../motion/click-view';
import PostHeader from './post-header';
import ThemesToggle from './themes-toggle';

const nav = ['post', 'project'];

//TODO 移动端适配
export default function Header() {
  const segments = usePathname().split('/');
  const y = useScrollValue();
  const isScroll =
    y >= 110 &&
    ((segments.length > 2 && segments[1] === 'blog') ||
      (segments.length === 2 && segments[1] === 'about'));

  return (
    <div className="w-full h-16 px-2 md:px-20 py-2 fixed top-0 backdrop-blur shadow overflow-hidden border-b border-muted z-20">
      <motion.div
        animate={{
          y: isScroll ? -60 : 0,
        }}
      >
        <div className="flex items-center justify-between min-h-12">
          <div className="flex items-center gap-3">
            <ClickView>
              <Link href="/">
                <Image
                  src={Avatar}
                  alt="avatar"
                  className="w-10 h-10 rounded-xl"
                />
              </Link>
            </ClickView>
            <div className="font-semibold">
              Bsx&apos;s tiny website
              <div className="text-xs font-normal text-muted-foreground translate-x-3">
                still alive...?
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 text-muted-foreground">
            {nav.map((n) => (
              <Link
                key={n}
                href={`/${n}`}
                className={cn(
                  'transition-colors hover:text-accent-foreground',
                  {
                    ['font-semibold text-accent-foreground']: segments[1] === n,
                  },
                )}
              >
                {`${n.charAt(0).toUpperCase()}${n.slice(1)}`}
              </Link>
            ))}
            <ThemesToggle />
          </div>
        </div>
        <PostHeader />
      </motion.div>
    </div>
  );
}
