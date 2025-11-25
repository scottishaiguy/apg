import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/container";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer>
      <div className="bg-white text-black">
        <Container className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/APG-logo.svg"
                alt="Ainslie Park Garage"
                width={120}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-700 text-sm">
              Edinburgh&apos;s most trusted auto repair service since 1975. Professional car servicing, MOT testing, and repairs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-700 hover:text-apg-red transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-700 hover:text-apg-red transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-700 hover:text-apg-red transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-700 hover:text-apg-red transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-700 hover:text-apg-red transition-colors text-sm">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-700 hover:text-apg-red transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-700 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-apg-red" />
                <span>Ainslie Park Garage<br />Edinburgh, EH5 2HF</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700 text-sm">
                <Phone className="h-4 w-4 shrink-0 text-apg-red" />
                <a href="tel:01311234567" className="hover:text-apg-red transition-colors">
                  0131 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-700 text-sm">
                <Mail className="h-4 w-4 shrink-0 text-apg-red" />
                <a href="mailto:info@ainsleyparkgarage.com" className="hover:text-apg-red transition-colors">
                  info@ainsleyparkgarage.com
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-apg-red" />
                <div>
                  <p>Mon - Fri: 8:00 - 18:00</p>
                  <p>Saturday: 9:00 - 16:00</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="bg-apg-dark">
        <Container>
          <div className="py-6">
            <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-apg-red transition-colors"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-apg-red transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-apg-red transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            </div>
            <p className="text-gray-400 text-sm text-center">
              © {new Date().getFullYear()} Ainslie Park Garage. All rights reserved.
            </p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
