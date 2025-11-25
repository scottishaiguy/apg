import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Award, Users, Clock, CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#1A1A1A] text-white py-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-[#E53935]">Ainslie Park Garage</span>
            </h1>
            <p className="text-xl text-gray-300">
              Edinburgh&apos;s most trusted automotive service center since 1975
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Nearly 50 Years of Excellence
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Since opening our doors in 1975, Ainslie Park Garage has been a
                cornerstone of the Edinburgh automotive community. What started
                as a small family-run workshop has grown into one of the city&apos;s
                most trusted garages.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our success is built on a simple principle: treat every customer
                with honesty and respect, and treat every vehicle as if it were
                our own. This philosophy has earned us a loyal customer base and
                countless recommendations.
              </p>
              <p className="text-lg text-gray-700">
                Today, we combine traditional craftsmanship with cutting-edge
                diagnostic technology to provide the best possible service for
                modern vehicles while maintaining the personal touch that has
                always defined us.
              </p>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <p className="text-center px-4">
                  About Image Placeholder
                  <br />
                  <span className="text-sm">
                    (Add image to /public/about-hero.jpg)
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="inline-flex p-4 bg-[#E53935]/10 rounded-full mb-4">
                <Award className="h-10 w-10 text-[#E53935]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Nearly 50 Years</h3>
              <p className="text-gray-600">
                Serving Edinburgh motorists since 1975
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 bg-[#E53935]/10 rounded-full mb-4">
                <Users className="h-10 w-10 text-[#E53935]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Qualified technicians with decades of experience
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 bg-[#E53935]/10 rounded-full mb-4">
                <Clock className="h-10 w-10 text-[#E53935]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Service</h3>
              <p className="text-gray-600">
                Quick turnaround without compromising quality
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 bg-[#E53935]/10 rounded-full mb-4">
                <CheckCircle className="h-10 w-10 text-[#E53935]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">
                All work comes with our comprehensive warranty
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gray-50 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-[#E53935] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Honest & Transparent</h3>
                  <p className="text-gray-600">
                    Clear pricing with no hidden fees. We explain all work before
                    starting.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-[#E53935] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Modern Equipment</h3>
                  <p className="text-gray-600">
                    Latest diagnostic tools for accurate fault finding on all
                    vehicle makes.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-[#E53935] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Quality Parts</h3>
                  <p className="text-gray-600">
                    We use OEM or high-quality aftermarket parts with warranty.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-[#E53935] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Customer Care</h3>
                  <p className="text-gray-600">
                    Friendly service with regular updates throughout your vehicle&apos;s
                    service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#E53935] text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience the APG difference
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of satisfied customers who trust us with their vehicles
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-[#E53935] border-white hover:bg-gray-100 text-lg px-8"
            >
              <Link href="/book">Book Your Service Today</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
