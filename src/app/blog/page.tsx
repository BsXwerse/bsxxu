import { getAllPost } from '@/lib/mdx';
import Link from 'next/link';

//TODO ssg
export default function AllPosts() {
  const posts = getAllPost();
  return (
    <div className="min-h-screen">
      <div className="text-center mt-32">共{posts.length}篇文章</div>
      {posts.map(p => (
        <Link href={`/blog/${p.slug}`} key={p.title}>
          <div>
            {p.title}
            {p.date}
          </div>
        </Link>
      ))}
    </div>
  );
}
