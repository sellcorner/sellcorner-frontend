'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

type Post = {
  id: string
  title: string
  slug: string
  date: string
  excerpt: string
}
export default function LatestPosts() {
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `{
          posts(first: 4) { nodes { id title slug date excerpt } }
        }`,
      }),
    })
      .then((r) => r.json())
      .then((json) => setPosts(json.data.posts.nodes))
  }, [])
  return (
    <section className="my-12 max-w-screen-xl mx-auto px-4 md:px-8">
      <h2 className="text-2xl font-bold mb-6">Latest Blog Posts</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {posts.map((p) => (
          <article key={p.id} className="shadow rounded-lg overflow-hidden border">
            <div className="p-4">
              <h3 className="text-lg font-semibold" dangerouslySetInnerHTML={{ __html: p.title }} />
              <p
                className="text-sm mt-2 text-gray-600"
                dangerouslySetInnerHTML={{ __html: p.excerpt }}
              />
              <Link href={`/post/${p.slug}`} className="text-primary hover:underline inline-block mt-4">
                Read more
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

