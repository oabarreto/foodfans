"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";

export function ProfileStories() {
  const stories = [
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
    },
    // Add more stories
  ];

  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex space-x-4 p-4">
        {stories.map((story, index) => (
          <Card key={index} className="w-32 shrink-0">
            <AspectRatio ratio={9/16}>
              {story.type === "image" ? (
                <img
                  src={story.url}
                  alt=""
                  className="object-cover w-full h-full rounded-lg"
                />
              ) : (
                <video
                  src={story.url}
                  className="object-cover w-full h-full rounded-lg"
                />
              )}
            </AspectRatio>
          </Card>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}