import { Container } from "@/components/container";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Wrench,
  ClipboardCheck,
  Gauge,
  Car,
  Settings,
  Battery,
  Droplet,
  Wind,
  Thermometer,
  Shield,
  Cog,
  Zap,
} from "lucide-react";

const services = [
  {
    title: "Car Servicing",
    description:
      "Comprehensive vehicle servicing from routine maintenance to full service packages. Keep your car running smoothly with regular servicing.",
    icon: Wrench,
  },
  {
    title: "MOT Testing",
    description:
      "Official MOT testing center approved by DVSA. Quick turnaround with expert technicians ensuring your vehicle meets all safety standards.",
    icon: ClipboardCheck,
  },
  {
    title: "Diagnostics",
    description:
      "Advanced diagnostic equipment to identify issues quickly. Computer diagnostics for all makes and models, pinpointing problems accurately.",
    icon: Gauge,
  },
  {
    title: "Brake Service",
    description:
      "Complete brake system inspection, repair, and replacement. Your safety is our priority with quality brake components and expert fitting.",
    icon: Car,
  },
  {
    title: "Engine Repairs",
    description:
      "Expert mechanical repairs for all vehicle types. From minor fixes to major engine overhauls, we've got the expertise you need.",
    icon: Settings,
  },
  {
    title: "Battery & Electrical",
    description:
      "Battery testing, replacement, and electrical system diagnostics. Keep your car powered and running with our electrical expertise.",
    icon: Battery,
  },
  {
    title: "Oil Change",
    description:
      "Regular oil changes to keep your engine healthy. We use quality oils and filters suitable for your vehicle's specifications.",
    icon: Droplet,
  },
  {
    title: "Air Conditioning",
    description:
      "Air conditioning service, re-gassing, and repair. Stay comfortable in all weather conditions with a properly functioning AC system.",
    icon: Wind,
  },
  {
    title: "Cooling System",
    description:
      "Radiator repairs, coolant replacement, and thermostat services. Prevent overheating and engine damage with proper cooling system maintenance.",
    icon: Thermometer,
  },
  {
    title: "Exhaust System",
    description:
      "Exhaust repairs, replacements, and emissions testing. Ensure your vehicle is environmentally compliant and running efficiently.",
    icon: Shield,
  },
  {
    title: "Clutch Replacement",
    description:
      "Expert clutch repairs and replacements for manual vehicles. We use quality parts and provide warranty on all clutch work.",
    icon: Cog,
  },
  {
    title: "Pre-Purchase Inspections",
    description:
      "Comprehensive vehicle checks before you buy. Get peace of mind with our detailed inspection reports on any used vehicle.",
    icon: Zap,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#1A1A1A] text-white py-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-[#E53935]">Services</span>
            </h1>
            <p className="text-xl text-gray-300">
              Professional automotive services you can trust. From routine
              maintenance to complex repairs, we have the expertise and
              equipment to keep your vehicle in top condition.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a specific service?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Can&apos;t find what you&apos;re looking for? Give us a call and we&apos;ll be
              happy to discuss your vehicle&apos;s needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#E53935] hover:bg-[#C62828]"
              >
                <Link href="/book">Book a Service</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#E53935] text-[#E53935] hover:bg-[#E53935] hover:text-white"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
