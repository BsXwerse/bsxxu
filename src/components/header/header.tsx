'use client';

import Image from 'next/image';
import Link from 'next/link';
import Avatar from '@/assets/avatar.jpg';
import ThemesToggle from './themes-toggle';
import { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { usePathname } from 'next/navigation';
import PostHeader from './post-header';
import { cm } from '@/utils/common';
import AnimateView from '../animate-view';

const nav = ['blog', 'gallery'];

//TODO 移动端适配
export default function Header() {
  const [isScroll, setScroll] = useState(false);
  const segments = usePathname().split('/');
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', value => {
    value >= 110 && segments.length > 2 && segments[1] === 'blog'
      ? setScroll(true)
      : setScroll(false);
  });

  return (
    <div className="w-full h-16 px-20 py-2 fixed top-0 backdrop-blur shadow overflow-hidden z-10">
      <AnimateView
        as="div"
        motionProps={{
          animate: {
            y: isScroll ? -60 : 0,
          },
        }}
      >
        <div className="flex items-center justify-between min-h-12">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Image
                src={Avatar}
                alt="avatar"
                className="w-10 h-10 rounded-xl hover:rotate-180 transition-transform duration-500 border"
              />
            </Link>
            <div className="font-semibold">
              Bsx&apos;s tiny website
              <div className="text-xs font-normal text-ft-minor translate-x-3">
                still alive...?
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 text-ft-minor">
            {nav.map(n => (
              <Link
                key={n}
                href={`/${n}`}
                className={cm('hover:text-ft-strong transition-colors', {
                  ['text-ft-strong font-semibold']: segments[1] === n,
                })}
              >
                {n}
              </Link>
            ))}
            <ThemesToggle isScroll={isScroll} />
          </div>
        </div>
        <PostHeader />
      </AnimateView>
    </div>
  );
}
