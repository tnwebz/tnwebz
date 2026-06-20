import Link from 'next/link';
import { locations } from '@/lib/location-data';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-16 px-4 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand & Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-zinc-800 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black tracking-tight">
                TN
              </span>
              <span className="text-white font-bold text-xl">
                TNWebz
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Premium Web Development & Automation Studio. Built with React, Next.js & Python FastAPI.
            </p>
            <div className="text-zinc-400 text-sm">
              <p>+91 8608113558</p>
              <p className="mt-1">tnwebzz@gmail.com</p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3 text-zinc-400 text-sm">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas We Serve */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Areas We Serve
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-zinc-400 text-sm">
              {locations.map((loc) => (
                <li key={loc.slug}>
                  <Link 
                    href={`/locations/${loc.slug}`} 
                    className="hover:text-white transition-colors"
                  >
                    {loc.cityName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} TNWebz. All rights reserved.
          </p>
          <div className="flex gap-6 text-zinc-500 text-sm">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
