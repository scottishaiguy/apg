import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/hero-workshop.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="block text-white mb-2">
            Edinburgh&apos;s Most Trusted
          </span>
          <span className="block text-[#E53935] text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Auto Repair Service
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium max-w-3xl mx-auto mb-10">
          Professional car servicing, MOT testing, and repairs in the heart of Edinburgh since 1975.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-[#E53935] hover:bg-[#C62828] text-white text-lg px-8 py-6 w-full sm:w-auto"
          >
            <Link href="/book">
              Book a Service
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white border-2 border-white text-[#0D0D0D] hover:bg-gray-100 text-lg px-8 py-6 w-full sm:w-auto"
          >
            <a href="tel:01311234567">Call Us Now</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
