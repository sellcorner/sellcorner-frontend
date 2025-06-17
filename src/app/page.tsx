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
