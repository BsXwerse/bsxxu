'use client';

import { PostMetadata } from '@/lib/mdx';
import { useSetPostMetadata } from '@/providers/post-metadata-provider';

export default function PostMetadataSetter({
  children,
  data,
}: {
  children: React.ReactNode;
  data: PostMetadata;
}) {
  const setPostMetaData = useSetPostMetadata();
  setPostMetaData(data);
  return children;
}
