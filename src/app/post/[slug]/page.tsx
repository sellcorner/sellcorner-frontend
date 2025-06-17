export const revalidate = 60;

import { notFound } from 'next/navigation';

type Post = {
  title: { rendered: string };
  content: { rendered: string };
};

async function getPostData(slug: string): Promise<Post | null> {
  const res = await fetch(`https://sellcorner.net/wp-json/wp/v2/posts?slug=${slug}`);
  const posts = await res.json();
  return posts.length > 0 ? posts[0] : null;
}

type PageProps = {
  params: { slug: string };
};

export default async function PostPage({ params }: PageProps) {
  const post = await getPostData(params.slug);

  if (!post) {
    notFound(); // Uses Next.js built-in 404
  }

  return (
    <main>
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <article dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </main>
  );
}

export async function generateStaticParams() {
  const res = await fetch("https://sellcorner.net/wp-json/wp/v2/posts?per_page=100");
  const posts = await res.json();

  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}
