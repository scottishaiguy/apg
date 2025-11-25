"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your message! We'll be in touch soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-apg-slate text-white py-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in <span className="text-apg-red">Touch</span>
            </h1>
            <p className="text-xl text-gray-300">
              We&apos;re here to help with all your automotive needs
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us how we can help..."
                    rows={6}
                    className="mt-2"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-apg-red hover:bg-[#C62828]"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-6 shrink-0">
                    <div className="inline-flex p-3 bg-apg-red/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-apg-red" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1">Address</h3>
                    <p className="text-gray-600">
                      Ainslie Park Garage
                      <br />
                      Edinburgh, EH5 2HF
                      <br />
                      Scotland, UK
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-6 shrink-0">
                    <div className="inline-flex p-3 bg-apg-red/10 rounded-lg">
                      <Phone className="h-6 w-6 text-apg-red" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1">Phone</h3>
                    <a
                      href="tel:01311234567"
                      className="text-gray-600 hover:text-apg-red transition-colors"
                    >
                      0131 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-6 shrink-0">
                    <div className="inline-flex p-3 bg-apg-red/10 rounded-lg">
                      <Mail className="h-6 w-6 text-apg-red" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1">Email</h3>
                    <a
                      href="mailto:info@ainsleyparkgarage.com"
                      className="text-gray-600 hover:text-apg-red transition-colors"
                    >
                      info@ainsleyparkgarage.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-6 shrink-0">
                    <div className="inline-flex p-3 bg-apg-red/10 rounded-lg">
                      <Clock className="h-6 w-6 text-apg-red" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1">Opening Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 - 18:00</p>
                      <p>Saturday: 9:00 - 16:00</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg h-[300px] flex items-center justify-center">
                <p className="text-gray-400 text-center px-4">
                  Map Placeholder
                  <br />
                  <span className="text-sm">
                    (Integrate Google Maps or similar)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
