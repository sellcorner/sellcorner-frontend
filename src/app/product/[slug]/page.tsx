import { notFound } from 'next/navigation'

type Product = {
  id: number
  name: string
  description: string
  price: string
  images: { src: string; alt: string }[]
}

export async function generateStaticParams() {
  const res = await fetch('https://sellcorner.net/wp-json/wc/store/products')
  const products = await res.json()
  return products.map((product: Product) => ({ slug: product.slug }))
}

async function getProduct(slug: string): Promise<Product | null> {
  const res = await fetch(`https://sellcorner.net/wp-json/wc/store/products?slug=${slug}`, {
    next: { revalidate: 60 },
  })

  const json = await res.json()
  return json.length ? json[0] : null
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)

  if (!product) return notFound()

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

      {product.images?.[0] && (
        <img
          src={product.images[0].src}
          alt={product.images[0].alt || product.name}
          className="w-full max-w-md mb-6"
        />
      )}

      <p className="text-xl text-gray-800 mb-4">${product.price}</p>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: product.description }}
      />
    </main>
  )
}
