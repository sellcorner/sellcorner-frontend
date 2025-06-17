// src/app/post/[slug]/page.tsx
export const revalidate = 60; // Revalidate post pages every 60 seconds

type Props = {
  params: {
    slug: string;
  };
};

type Post = {
  title: { rendered: string };
  content: { rendered: string };
};

async function getPostData(slug: string): Promise<Post | null> {
  const res = await fetch(`https://sellcorner.net/wp-json/wp/v2/posts?slug=${slug}`);
  const posts = await res.json();
  return posts.length > 0 ? posts[0] : null;
}

export default async function PostPage({ params }: Props) {
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

// Pre-render post pages at build time
export async function generateStaticParams() {
  const res = await fetch("https://sellcorner.net/wp-json/wp/v2/posts?per_page=100");
  const posts = await res.json();

  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}
