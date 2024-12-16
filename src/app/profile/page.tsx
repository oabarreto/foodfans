"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Flag } from "lucide-react";
import { ProfileGallery } from "@/components/Profile/gallery";
import { ProfileReviews } from "@/components/Profile/reviews";
import { ProfileInfo } from "@/components/Profile/info";
import { cn } from "@/lib/utils";

export default function ProfilePage() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Profile Info */}
        <div className="md:col-span-1 space-y-6">
          <div className="relative">
            <Avatar className="w-48 h-48 mx-auto shadow-md ">
              <AvatarImage
                className="object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              />
              <AvatarFallback className="text-8xl bg-neutral-200 text-rose-500">
                JP
              </AvatarFallback>
            </Avatar>
            <Button
              size="icon"
              className={cn(
                "absolute top-2 right-2 bg-neutral-300 hover:bg-rose-500 text-rose-500 hover:text-neutral-300",
                isFavorite
                  ? " bg-rose-500 hover:bg-neutral-300 text-neutral-300 hover:text-rose-500"
                  : ""
              )}
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Heart className={isFavorite ? "fill-current" : ""} />
            </Button>
          </div>

          <div className="text-center space-y-2 mb-2">
            <h1 className="text-2xl font-bold text-muted-foreground">
              Jane Porter
            </h1>
            <p className="text-muted-foreground">@janeporter</p>
          </div>

          <ProfileInfo />
        </div>

        {/* Right Column - Content */}
        <div className="md:col-span-2">
          <Tabs defaultValue="gallery" className="space-y-6 ">
            <TabsList className="grid grid-cols-2 w-full bg-neutral-200 text-rose-400">
              <TabsTrigger
                value="gallery"
                className="data-[state=active]:bg-rose-500 data-[state=active]:text-neutral-100 hover:text-rose-500 data-[state=active]:cursor-default"
              >
                Gallery
              </TabsTrigger>
              {/* <TabsTrigger
                value="stories"
                className="data-[state=active]:bg-rose-500 data-[state=active]:text-neutral-100 hover:text-rose-500 data-[state=active]:cursor-default"
              >
                Stories
              </TabsTrigger> */}
              {/* <TabsTrigger
                value="services"
                className="data-[state=active]:bg-rose-500 data-[state=active]:text-neutral-100 hover:text-rose-500 data-[state=active]:cursor-default"
              >
                Services
              </TabsTrigger> */}
              <TabsTrigger
                value="reviews"
                className="data-[state=active]:bg-rose-500 data-[state=active]:text-neutral-100 hover:text-rose-500 data-[state=active]:cursor-default"
              >
                Reviews
              </TabsTrigger>
            </TabsList>

            <TabsContent value="gallery">
              <ProfileGallery />
            </TabsContent>

            {/* <TabsContent value="stories">
              <ProfileStories />
            </TabsContent> */}

            {/* <TabsContent value="services">
              <ProfileServices />
            </TabsContent> */}

            <TabsContent value="reviews">
              <ProfileReviews />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Button className="gap-2 bg-red-500 hover:bg-neutral-300 text-neutral-100 hover:text-red-500">
          <Flag size={20} />
          Report Profile
        </Button>
      </div>
    </div>
  );
}
