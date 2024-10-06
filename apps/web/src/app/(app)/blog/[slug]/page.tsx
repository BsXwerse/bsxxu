import Article from '@/components/post/article';
import PostMetadataSetter from '@/components/post/post-metadata-setter';
import ProgressBar from '@/components/post/progress-bar';
import { trpcServer } from '@/lib/trpc/server';
import { timeFormat } from '@/lib/utils';

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const keys = await trpcServer.posts.getAllPostsKey.query();
  return keys.map((k) => ({
    slug: k,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const res = await trpcServer.posts.getPostByKey.query(params.slug);

  return (
    <>
      <PostMetadataSetter data={res} />
      <ProgressBar />
      <div className="text-center mt-40 mb-10 text-3xl font-bold">
        {res.title}
      </div>
      <div className="mb-5 flex justify-center gap-2 text-muted-foreground text-xs">
        <div className="flex items-center gap-1">
          <span className="i-ri-calendar-2-line" />
          {timeFormat(res.date, 'YYYY-MM-DD')}
        </div>
        {res.tags && res.tags.length >= 0 && (
          <div className="flex items-center gap-1">
            <span className="i-ri-hashtag" />
            {res.tags.slice(0, 3).join(', ')}
          </div>
        )}
        <div className="flex items-center gap-1">
          <span className="i-ri-time-fill" />
          <span>约{res.readingTime?.words}字</span>
          <span>需阅读{Math.ceil(res.readingTime?.minutes ?? 10)}分钟</span>
        </div>
      </div>
      <Article content={res.content} />
    </>
  );
}
