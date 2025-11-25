import { Container } from "@/components/container";
import { ReviewCard } from "@/components/review-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
  {
    name: "Emma Wilson",
    rating: 5,
    review:
      "Can't fault the service. My car broke down unexpectedly and they fitted me in same day. Professional and efficient!",
    date: "1 month ago",
  },
  {
    name: "Michael Brown",
    rating: 5,
    review:
      "Transparent pricing, no pushy upselling, just honest advice. APG are the only garage I trust with my car.",
    date: "2 months ago",
  },
  {
    name: "Lisa Campbell",
    rating: 5,
    review:
      "Fantastic experience from start to finish. They explained everything clearly and the work was completed on time.",
    date: "3 weeks ago",
  },
  {
    name: "James Anderson",
    rating: 5,
    review:
      "Been coming here for 10+ years. Always excellent service, fair prices, and the team really know their stuff.",
    date: "1 week ago",
  },
  {
    name: "Rachel Stewart",
    rating: 5,
    review:
      "Brilliant service! Fixed my brakes quickly and at a great price. Won't go anywhere else now.",
    date: "2 months ago",
  },
  {
    name: "Peter Murray",
    rating: 5,
    review:
      "Professional, friendly, and knowledgeable. APG sorted out a complex electrical issue that other garages couldn't fix.",
    date: "1 month ago",
  },
  {
    name: "Karen Fraser",
    rating: 5,
    review:
      "Always feel confident leaving my car here. They do quality work and stand by it. Highly recommended!",
    date: "3 weeks ago",
  },
  {
    name: "Tom Hughes",
    rating: 5,
    review:
      "Great garage! Quick MOT turnaround and they even washed my car. Little touches like that make a difference.",
    date: "1 week ago",
  },
  {
    name: "Jennifer Scott",
    rating: 5,
    review:
      "So glad I found APG. They're honest, reliable, and do excellent work. My car drives like new after their full service.",
    date: "2 weeks ago",
  },
];

export default function ReviewsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#1A1A1A] text-white py-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Customer <span className="text-[#E53935]">Reviews</span>
            </h1>
            <p className="text-xl text-gray-300">
              See what our customers have to say about our service
            </p>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#E53935] mb-2">4.9/5</div>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#E53935] mb-2">500+</div>
              <p className="text-gray-600">5-Star Reviews</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#E53935] mb-2">98%</div>
              <p className="text-gray-600">Would Recommend</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#E53935] text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to experience our 5-star service?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join hundreds of satisfied customers who trust APG with their vehicles
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-[#E53935] border-white hover:bg-gray-100 text-lg px-8"
            >
              <Link href="/book">Book Your Service</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
