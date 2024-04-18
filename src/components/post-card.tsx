import { PostMetadata } from '@/lib/mdx';
import AnimateView from './animate-view';
import { memo } from 'react';
import Link from 'next/link';
import { RiArrowRightSFill } from 'react-icons/ri';

function PostCard({
  metadata,
  offset = 0,
}: {
  metadata: PostMetadata & { slug: string };
  offset?: number;
}) {
  return (
    <AnimateView
      as="div"
      className="p-4 space-y-3 rounded-xl border border-bk-minor relative hover:bg-bk-minor transition-colors"
      motionProps={{
        initial: {
          opacity: 0,
          x: -offset,
        },
        whileInView: {
          opacity: 1,
          x: 0,
        },
        transition: {
          delay: 0.7,
          duration: 0.5,
          ease: 'easeInOut',
        },
        viewport: {
          once: true,
        },
      }}
    >
      <div className="font-semibold text-lg">{metadata.title}</div>
      <div className="text-sm">{metadata.description}</div>
      <div className="text-xs text-ft-minor">
        <span>{metadata.date}</span>
        <span>{metadata.tags?.join('·')}</span>
      </div>
      <Link
        href={`/blog/${metadata.slug}`}
        className="absolute right-3 bottom-3 flex items-center transition-colors hover:text-ft-minor"
      >
        <RiArrowRightSFill />
        阅读
      </Link>
    </AnimateView>
  );
}

export default memo(PostCard);
