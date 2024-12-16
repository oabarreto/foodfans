"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";

export function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ rating, comment });
    setRating(0);
    setComment("");
  };

  return (
    <Card className="bg-neutral-100">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="text-muted-foreground">Write a Review</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Button
                key={star}
                variant="ghost"
                size="sm"
                className="p-0 hover:bg-transparent"
                onClick={() => setRating(star)}
                type="button"
              >
                <Star
                  className={`w-6 h-6 ${
                    star <= rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              </Button>
            ))}
          </div>
          <Textarea
            placeholder="Share your experience..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="min-h-[100px]"
          />
          <Button
            type="submit"
            className="w-full bg-rose-400 hover:bg-neutral-300 text-neutral-100 hover:text-rose-400"
          >
            Submit Review
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
