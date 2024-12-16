"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ProfileServices() {
  const services = [
    {
      id: 1,
      name: "Service 1",
      description: "Description of service 1",
      price: "$100",
      categories: ["Category 1", "Category 2"],
    },
    // Add more services
  ];

  return (
    <div className="space-y-4">
      {services.map((service) => (
        <Card key={service.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{service.name}</CardTitle>
              <span className="text-xl font-bold">{service.price}</span>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{service.description}</p>
            <div className="flex gap-2">
              {service.categories.map((category) => (
                <Badge key={category} variant="outline">
                  {category}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}