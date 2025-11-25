import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

interface ReviewCardProps {
  name: string;
  rating: number;
  review: string;
  date?: string;
}

export function ReviewCard({ name, rating, review, date }: ReviewCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-bold text-lg">{name}</h3>
            {date && <p className="text-sm text-gray-500">{date}</p>}
          </div>
          <Quote className="h-8 w-8 text-[#E53935]/20" />
        </div>
        <div className="flex gap-1 mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating
                  ? "fill-[#E53935] text-[#E53935]"
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 italic">&quot;{review}&quot;</p>
      </CardContent>
    </Card>
  );
}
