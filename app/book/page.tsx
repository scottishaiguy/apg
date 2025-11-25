"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "lucide-react";
import { useState } from "react";

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicleReg: "",
    make: "",
    model: "",
    serviceType: "",
    preferredDate: "",
    preferredTime: "",
    additionalInfo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your booking request! We'll contact you shortly to confirm.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      vehicleReg: "",
      make: "",
      model: "",
      serviceType: "",
      preferredDate: "",
      preferredTime: "",
      additionalInfo: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-apg-slate text-white py-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Book <span className="text-apg-red">Service</span>
            </h1>
            <p className="text-apg-red text-sm">
              Fill in the form below and we&apos;ll get back to you to confirm your
              booking
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg border-2 p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="0131 123 4567"
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john.smith@example.com"
                      className="mt-2"
                    />
                  </div>
                </div>

                {/* Vehicle Information */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Vehicle Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="vehicleReg">Vehicle Registration *</Label>
                      <Input
                        id="vehicleReg"
                        name="vehicleReg"
                        value={formData.vehicleReg}
                        onChange={handleChange}
                        required
                        placeholder="AB12 CDE"
                        className="mt-2 uppercase"
                      />
                    </div>
                    <div>
                      <Label htmlFor="make">Make</Label>
                      <Input
                        id="make"
                        name="make"
                        value={formData.make}
                        onChange={handleChange}
                        placeholder="e.g. Ford"
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <Label htmlFor="model">Model</Label>
                    <Input
                      id="model"
                      name="model"
                      value={formData.model}
                      onChange={handleChange}
                      placeholder="e.g. Focus"
                      className="mt-2"
                    />
                  </div>
                </div>

                {/* Service Details */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Service Details</h2>
                  <div>
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select
                      name="serviceType"
                      value={formData.serviceType}
                      onValueChange={(value) =>
                        handleSelectChange("serviceType", value)
                      }
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-service">Full Service</SelectItem>
                        <SelectItem value="interim-service">Interim Service</SelectItem>
                        <SelectItem value="mot">MOT Test</SelectItem>
                        <SelectItem value="mot-service">MOT & Service</SelectItem>
                        <SelectItem value="diagnostics">Diagnostics</SelectItem>
                        <SelectItem value="brakes">Brake Service</SelectItem>
                        <SelectItem value="repairs">General Repairs</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <Label htmlFor="preferredDate">Preferred Date *</Label>
                      <Input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="preferredTime">Preferred Time</Label>
                      <Select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onValueChange={(value) =>
                          handleSelectChange("preferredTime", value)
                        }
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (8:00-12:00)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12:00-16:00)</SelectItem>
                          <SelectItem value="evening">Evening (16:00-18:00)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Label htmlFor="additionalInfo">Additional Information</Label>
                    <Textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      placeholder="Any specific concerns or requirements..."
                      rows={4}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-apg-red hover:bg-[#C62828]"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Submit Booking Request
                  </Button>
                  <p className="text-sm text-gray-600 text-center mt-4">
                    * Required fields. We&apos;ll contact you to confirm your booking.
                  </p>
                </div>
              </form>
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">What happens next?</h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="font-bold text-[#E53935]">1.</span>
                  <span>We&apos;ll review your booking request within 24 hours</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#E53935]">2.</span>
                  <span>
                    You&apos;ll receive a confirmation call or email with your booking
                    details
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#E53935]">3.</span>
                  <span>
                    Bring your vehicle to our garage at the confirmed time
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#E53935]">4.</span>
                  <span>
                    We&apos;ll keep you updated throughout the service with regular
                    progress reports
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
