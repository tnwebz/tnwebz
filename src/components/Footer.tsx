// src/components/Footer.tsx
import Link from 'next/link';
import { locations } from '@/lib/location-data';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Branding & Main Info */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">webz.</h3>
          <p className="text-sm">
            Premium Web Development & Automation Studio. <br />
            Built with React, Next.js & Python FastAPI.
          </p>
        </div>

        {/* Primary Navigation (Optional) */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services/python-fastapi-backend" className="hover:text-white transition-colors">Python FastAPI Backends</Link></li>
            <li><Link href="/services/whatsapp-lead-automation" className="hover:text-white transition-colors">WhatsApp Automations</Link></li>
            <li><Link href="/services/react-development" className="hover:text-white transition-colors">React Frontends</Link></li>
          </ul>
        </div>

        {/* The SEO "Hidden in Plain Sight" Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Areas We Serve</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {locations.map((loc) => (
              <li key={loc.slug}>
                <Link 
                  href={`/locations/${loc.slug}`} 
                  className="hover:text-blue-400 transition-colors"
                >
                  {loc.cityName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-sm text-center">
        © {new Date().getFullYear()} webz. Digital Studio. All rights reserved.
      </div>
    </footer>
  );
}
