'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

type Product = {
  id: string
  name: string
  slug: string
  price: string
}
export default function LatestProducts() {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT!}?rest_route=/wc/store/products?per_page=4`)
      .then((r) => r.json())
      .then((data) => setProducts(data))
  }, [])
  return (
    <section id="shop" className="my-12 max-w-screen-xl mx-auto px-4 md:px-8">
      <h2 className="text-2xl font-bold mb-6">Latest Products</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <article key={p.id} className="shadow rounded-lg overflow-hidden border p-4 text-center">
            <Link href={`/product/${p.slug}`} className="block font-semibold hover:underline">
              {p.name}
            </Link>
            <p className="text-primary mt-2 font-medium">${p.price}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
