"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] p-6">
        <SheetHeader className="pb-6">
          <div className="flex items-center justify-center">
            <img src="/APG-logo.svg" alt="APG Logo" className="h-8 w-8" />
          </div>
        </SheetHeader>
        <nav className="flex flex-col gap-4 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium hover:text-apg-red transition-colors py-2"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-6 px-4">
            <Button asChild className="w-full bg-apg-red hover:bg-apg-red-dark">
              <Link href="/book">Book a Service</Link>
            </Button>
            <Button asChild variant="outline" className="w-full border-apg-red text-apg-red hover:bg-apg-red hover:text-white">
              <a href="tel:01311234567">Call Now</a>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
