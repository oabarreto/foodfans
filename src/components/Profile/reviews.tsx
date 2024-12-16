"use client";

import { ReviewForm } from "./reviews/review-form";
import { ReviewList } from "./reviews/review-list";

export function ProfileReviews() {
  return (
    <div className="space-y-8">
      <ReviewForm />
      <ReviewList />
    </div>
  );
}
