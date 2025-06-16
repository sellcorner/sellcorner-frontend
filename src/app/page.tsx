// src/app/page.tsx
'use client'

import { useEffect, useState } from 'react'

type Post = {
  id: string
  title: string
  excerpt: string
  date: string
}

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
            query GetPosts {
              posts(first: 5) {
                nodes {
                  id
                  title
                  excerpt
                  date
                }
              }
            }
          `,
        }),
      })

      const json = await res.json()
      setPosts(json.data.posts.nodes)
      setLoading(false)
    }

    fetchPosts()
  }, [])

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Latest Blog Posts</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.id}>
              <h2
                className="text-xl font-semibold"
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
              <div className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div
                className="mt-2 text-gray-700"
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
              />
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
