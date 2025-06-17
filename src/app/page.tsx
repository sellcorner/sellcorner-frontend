import { ReactNode } from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default function PostPage({ params }: Props) {
  const { slug } = params;

  // Use the slug to fetch data or display content
  return (
    <main>
      <h1>Post: {slug}</h1>
      {/* You can fetch the post content here or use a component */}
    </main>
  );
}


export async function generateStaticParams() {
  // Fetch your posts slugs from your backend (replace with your real API)
  const res = await fetch("https://yourwordpresssite.com/wp-json/wp/v2/posts");
  const posts = await res.json();

  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

