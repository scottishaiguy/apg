import { Hero } from "@/components/hero";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { ReviewCard } from "@/components/review-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Wrench,
  ClipboardCheck,
  Gauge,
  Car,
  Settings,
  Battery,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ainslie Park Garage | Trusted Auto Repair Edinburgh",
  description: "Professional car servicing, MOT testing, and repairs in Edinburgh since 1975. Expert mechanics, competitive prices, and trusted service. Book your appointment today!",
  keywords: [
    "car repair Edinburgh",
    "MOT testing Edinburgh", 
    "car servicing Edinburgh",
    "auto repair Edinburgh",
    "garage Edinburgh",
    "vehicle maintenance Edinburgh",
    "brake repair Edinburgh",
    "exhaust repair Edinburgh",
    "clutch repair Edinburgh",
    "engine diagnostics Edinburgh"
  ],
  openGraph: {
    title: "Ainslie Park Garage | Trusted Auto Repair Edinburgh",
    description: "Professional car servicing, MOT testing, and repairs in Edinburgh since 1975. Expert mechanics, competitive prices, and trusted service.",
    url: "https://ainslieparkgarage.com",
    images: [
      {
        url: "/hero-workshop.jpg",
        width: 1200,
        height: 630,
        alt: "Ainslie Park Garage - Professional Auto Repair in Edinburgh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ainslie Park Garage | Trusted Auto Repair Edinburgh",
    description: "Professional car servicing, MOT testing, and repairs in Edinburgh since 1975. Book your appointment today!",
    images: ["/hero-workshop.jpg"],
  },
};

const services = [
  {
    title: "Car Servicing",
    description:
      "Comprehensive vehicle servicing from routine maintenance to full service packages. Keep your car running smoothly.",
    icon: Wrench,
  },
  {
    title: "MOT Testing",
    description:
      "Official MOT testing center. Quick turnaround with expert technicians ensuring your vehicle meets safety standards.",
    icon: ClipboardCheck,
  },
  {
    title: "Diagnostics",
    description:
      "Advanced diagnostic equipment to identify issues quickly. Computer diagnostics for all makes and models.",
    icon: Gauge,
  },
  {
    title: "Repairs",
    description:
      "Expert mechanical repairs for all vehicle types. From minor fixes to major overhauls, we've got you covered.",
    icon: Settings,
  },
  {
    title: "Brake Service",
    description:
      "Complete brake system inspection, repair, and replacement. Your safety is our priority.",
    icon: Car,
  },
  {
    title: "Battery & Electrical",
    description:
      "Battery testing, replacement, and electrical system diagnostics. Keep your car powered and running.",
    icon: Battery,
  },
];

const reviews = [
  {
    name: "John MacLeod",
    rating: 5,
    review:
      "Excellent service! The team at APG diagnosed and fixed my car's issue quickly. Very professional and honest pricing. Highly recommend!",
    date: "2 weeks ago",
  },
  {
    name: "Sarah Thompson",
    rating: 5,
    review:
      "Been using APG for years. Always reliable, fair prices, and the staff are friendly. My go-to garage in Edinburgh.",
    date: "1 month ago",
  },
  {
    name: "David Robertson",
    rating: 5,
    review:
      "Passed my MOT with flying colours thanks to the pre-check service. Great communication throughout the process.",
    date: "3 weeks ago",
  },
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ainslie Park Garage",
    description: "Professional car servicing, MOT testing, and repairs in Edinburgh since 1975",
    image: "https://ainslieparkgarage.com/hero-workshop.jpg",
    url: "https://ainslieparkgarage.com",
    telephone: "0131 123 4567",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ainslie Park Garage",
      addressLocality: "Edinburgh",
      addressRegion: "Scotland",
      postalCode: "EH5 2HF",
      addressCountry: "GB"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 55.9765,
      longitude: -3.2055
    },
    openingHours: [
      "Mo-Fr 08:00-18:00",
      "Sa 09:00-16:00",
      "Su Closed"
    ],
    priceRange: "££",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    currenciesAccepted: "GBP",
    sameAs: [
      "https://www.facebook.com/ainslieparkgarage",
      "https://www.twitter.com/ainslieparkgarage"
    ],
    servicesOffered: [
      {
        "@type": "Service",
        name: "Car Servicing",
        description: "Comprehensive vehicle servicing and maintenance"
      },
      {
        "@type": "Service", 
        name: "MOT Testing",
        description: "Official MOT testing centre"
      },
      {
        "@type": "Service",
        name: "Brake Repair",
        description: "Professional brake repair and replacement"
      },
      {
        "@type": "Service",
        name: "Engine Diagnostics",
        description: "Advanced engine diagnostics and repair"
      }
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
      bestRating: "5"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <SectionHeader
            title="Our Services"
            subtitle="Professional automotive services tailored to your needs"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Trusted by Edinburgh motorists{" "}
                <span className="text-apg-red">since 1975</span>
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                For nearly five decades, Ainslie Park Garage has been
                Edinburgh&apos;s trusted choice for automotive care. Our
                family-run business combines traditional values with modern
                technology.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our experienced technicians are passionate about keeping your
                vehicle in top condition. From routine servicing to complex
                repairs, we treat every car as if it were our own.
              </p>
              <Button
                asChild
                size="lg"
                className="w-full bg-apg-red hover:bg-apg-red-dark text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <p className="text-center px-4">
                  Workshop Image Placeholder
                  <br />
                  <span className="text-sm">
                    (Add image to /public/about-workshop.jpg)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <SectionHeader
            title="What Our Customers Say"
            subtitle="Don't just take our word for it"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-apg-red text-sm font-medium border-apg-red hover:bg-apg-red hover:text-white"
            >
              <Link href="/reviews">View All Reviews</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-apg-red text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to book your service?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get your car serviced by Edinburgh&apos;s most trusted mechanics.
              Book online or give us a call today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white text-apg-red border-white hover:bg-gray-100 text-lg px-8"
              >
                <Link href="/book">Book Online</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white border-2 border-white text-apg-red hover:bg-gray-100 text-lg px-8"
              >
                <a href="tel:01311234567">Call 0131 123 4567</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
