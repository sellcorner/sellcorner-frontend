import { notFound } from 'next/navigation'

export default async function PostPage({ params }: { params: { slug: string } }) {
  const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query GetPost($slug: ID!) {
          post(id: $slug, idType: SLUG) {
            title
            content
            date
          }
        }
      `,
      variables: { slug: params.slug },
    }),
  })

  const { data } = await res.json()

  if (!data?.post) return notFound()

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold" dangerouslySetInnerHTML={{ __html: data.post.title }} />
      <div className="text-sm text-gray-500 mb-4">{new Date(data.post.date).toLocaleDateString()}</div>
      <article dangerouslySetInnerHTML={{ __html: data.post.content }} />
    </main>
  )
}
