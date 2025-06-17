// src/app/page.tsx
import Link from 'next/link';

export const revalidate = 60; // Revalidate static content every 60 seconds

type Post = {
  id: number;
  slug: string;
  title: { rendered: string };
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://sellcorner.net/wp-json/wp/v2/posts?per_page=10");
  const posts = await res.json();
  return posts;
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main>
      <h1>Recent Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.slug}`}>
              <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
