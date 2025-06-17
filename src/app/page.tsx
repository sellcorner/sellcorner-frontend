type Post = {
  id: number;
  slug: string;
  title: { rendered: string };
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://sellcorner.net/wp-json/wp/v2/posts");
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
            <a href={`/post/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          </li>
        ))}
      </ul>
    </main>
  );
}
