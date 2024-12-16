"use client";

import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ReviewList() {
  const reviews = [
    {
      id: 1,
      author: "John Doe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      rating: 5,
      comment: "Excellent service!",
      date: "2024-03-20",
    },
    {
      id: 2,
      author: "Jane Smith",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      rating: 4,
      comment: "Great experience overall.",
      date: "2024-03-19",
    },
  ];

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <Card key={review.id} className="p-4 bg-neutral-100">
          <div className="flex items-start space-x-4">
            <Avatar>
              <AvatarImage src={review.avatar} />
              <AvatarFallback>{review.author[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-muted-foreground">
                  {review.author}
                </h4>
                <div className="flex">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{review.comment}</p>
              <span className="text-xs text-rose-500">{review.date}</span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
