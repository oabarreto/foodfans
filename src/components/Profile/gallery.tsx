"use client";

//import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";

export function ProfileGallery() {
  //const [filter, setFilter] = useState("all");

  const items = [
    {
      type: "image",
      url: "https://plus.unsplash.com/premium_photo-1672363353881-68c8ff594e25",
      exclusive: false,
    },
    {
      type: "image",
      url: "https://plus.unsplash.com/premium_photo-1672363353881-68c8ff594e25",
      exclusive: false,
    },
    {
      type: "image",
      url: "https://plus.unsplash.com/premium_photo-1672363353881-68c8ff594e25",
      exclusive: false,
    },
    {
      type: "image",
      url: "https://plus.unsplash.com/premium_photo-1672363353881-68c8ff594e25",
      exclusive: false,
    },
    {
      type: "image",
      url: "https://plus.unsplash.com/premium_photo-1672363353881-68c8ff594e25",
      exclusive: false,
    },
    {
      type: "image",
      url: "https://plus.unsplash.com/premium_photo-1672363353881-68c8ff594e25",
      exclusive: false,
    },
    {
      type: "image",
      url: "https://plus.unsplash.com/premium_photo-1672363353881-68c8ff594e25",
      exclusive: false,
    },
    {
      type: "image",
      url: "https://plus.unsplash.com/premium_photo-1672363353881-68c8ff594e25",
      exclusive: false,
    },
    {
      type: "image",
      url: "https://plus.unsplash.com/premium_photo-1672363353881-68c8ff594e25",
      exclusive: false,
    },
    {
      type: "image",
      url: "https://plus.unsplash.com/premium_photo-1672363353881-68c8ff594e25",
      exclusive: false,
    },
    {
      type: "image",
      url: "https://plus.unsplash.com/premium_photo-1672363353881-68c8ff594e25",
      exclusive: false,
    },
    {
      type: "image",
      url: "https://plus.unsplash.com/premium_photo-1672363353881-68c8ff594e25",
      exclusive: false,
    },
    {
      type: "image",
      url: "https://plus.unsplash.com/premium_photo-1672363353881-68c8ff594e25",
      exclusive: false,
    },
    {
      type: "image",
      url: "https://plus.unsplash.com/premium_photo-1672363353881-68c8ff594e25",
      exclusive: false,
    },
    // Add more items as needed
  ];

  return (
    <div className="space-y-4">
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger
            value="all"
            className="data-[state=active]:bg-rose-500 data-[state=active]:text-neutral-100 hover:text-rose-500 data-[state=active]:cursor-default"
          >
            All
          </TabsTrigger>
          <TabsTrigger
            value="photos"
            className="data-[state=active]:bg-rose-500 data-[state=active]:text-neutral-100 hover:text-rose-500 data-[state=active]:cursor-default"
          >
            Photos
          </TabsTrigger>
          <TabsTrigger
            value="videos"
            className="data-[state=active]:bg-rose-500 data-[state=active]:text-neutral-100 hover:text-rose-500 data-[state=active]:cursor-default"
          >
            Videos
          </TabsTrigger>
          <TabsTrigger
            value="exclusive"
            className="data-[state=active]:bg-rose-500 data-[state=active]:text-neutral-100 hover:text-rose-500 data-[state=active]:cursor-default"
          >
            Exclusive
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="grid grid-cols-3 gap-4">
          {items.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <AspectRatio ratio={1}>
                {item.type === "image" ? (
                  <img
                    src={item.url}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <video
                    src={item.url}
                    className="object-cover w-full h-full"
                  />
                )}
              </AspectRatio>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="photos" className="grid grid-cols-3 gap-4">
          {items.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <AspectRatio ratio={1}>
                {item.type === "image" && (
                  <img
                    src={item.url}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                )}
              </AspectRatio>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
