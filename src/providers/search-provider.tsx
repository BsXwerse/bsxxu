'use client';

import { POSTS_INDEX } from '@/lib/constants';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import { useSingleton } from 'foxact/use-singleton';
import { InstantSearchNext } from 'react-instantsearch-nextjs';

export default function SearchProvider({
  children,
  host,
  apikey,
}: { children?: React.ReactNode; host: string; apikey: string }) {
  const clientRef = useSingleton(() => instantMeiliSearch(host, apikey));
  const { searchClient } = clientRef.current;
  return (
    <InstantSearchNext indexName={POSTS_INDEX} searchClient={searchClient}>
      {children}
    </InstantSearchNext>
  );
}
