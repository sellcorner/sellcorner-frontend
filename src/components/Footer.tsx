import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">About</h3>
          <p className="text-sm leading-relaxed">
            SellCorner is an online marketplace and blog providing product
            reviews, business insights and lifestyle tips for smart shoppers.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/business-trick" className="hover:text-white">
                Business Trick
              </Link>
            </li>
            <li>
              <Link href="/health-and-fitness-tips" className="hover:text-white">
                Health & Fitness
              </Link>
            </li>
            <li>
              <Link href="/lifestyle-tips" className="hover:text-white">
                Lifestyle Tips
              </Link>
            </li>
            <li>
              <Link href="/travels-and-nature" className="hover:text-white">
                Travels & Nature
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About SellCorner
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <Link href="https://www.facebook.com/" aria-label="Facebook">
              👍
            </Link>
            <Link href="https://twitter.com/" aria-label="Twitter">
              🐦
            </Link>
            <Link href="https://www.youtube.com/" aria-label="YouTube">
              ▶️
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-center text-sm py-4">
        © {new Date().getFullYear()} SellCorner. All rights reserved.
      </div>
    </footer>
  );
}

