import Image from 'next/image'
export default function HeroSection() {
  return (
    <section className="relative bg-[url('/hero-banner.jpg')] bg-cover bg-center text-white py-32 mb-12">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative max-w-screen-xl mx-auto px-4 md:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to SellCorner
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Your one-stop destination for insightful blogs and quality products.
        </p>
        <a
          href="#shop"
          className="inline-block bg-secondary hover:bg-secondary-dark text-white font-medium py-3 px-6 rounded-full transition-colors"
        >
          Shop Now
        </a>
      </div>
    </section>
  )
}

