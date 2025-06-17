import { type Metadata } from 'next';

type Post = {
  title: { rendered: string };
  content: { rendered: string };
};

type PageProps = {
  params: { slug: string };
};

export const revalidate = 60;

async function getPostData(slug: string): Promise<Post | null> {
  const res = await fetch(`https://sellcorner.net/wp-json/wp/v2/posts?slug=${slug}`);
  const posts = await res.json();
  return posts.length > 0 ? posts[0] : null;
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = params;
  const post = await getPostData(slug);

  if (!post) {
    return <main><h1>Post not found</h1></main>;
  }

  return (
    <main>
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <article dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </main>
  );
}

// For static generation of dynamic routes
export async function generateStaticParams() {
  const res = await fetch("https://sellcorner.net/wp-json/wp/v2/posts?per_page=100");
  const posts = await res.json();

  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}
