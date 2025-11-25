import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
}

export function ServiceCard({ title, description, icon: Icon, href = "/services" }: ServiceCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-[#E53935]/50">
      <CardHeader>
        <div className="mb-4 inline-flex p-3 bg-[#E53935]/10 rounded-lg group-hover:bg-[#E53935] transition-colors">
          <Icon className="h-8 w-8 text-[#E53935] group-hover:text-white transition-colors" />
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>
        <Link
          href={href}
          className="text-[#E53935] font-medium flex items-center gap-2 hover:gap-3 transition-all group"
        >
          Learn More
          <ArrowRight className="h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
