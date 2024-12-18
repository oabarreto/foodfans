"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  MapPinnedIcon,
  PhoneIcon,
  CoinsIcon,
} from "lucide-react";
import { MdEdit } from "react-icons/md";
import { EditDialog } from "./edit-dialog";
import { EditPersonalForm } from "./edit-personal-form";
import { EditAboutForm } from "./edit-about-form";
import { EditServicesForm } from "./edit-services-form";

export function ProfileInfo() {
  const physicalCharacteristics = {
    height: "170cm",
    weight: "65kg",
    eyeColor: "Brown",
    hairColor: "Black",
  };

  const services = ["service 1", "service 2", "service 3"];
  const phoneNumber = "+1234567890";
  //const birthDate = "1990-01-01";

  function transformString(input: string): string {
    return input
      .replace(/([A-Z])/g, " $1") // Adiciona um espaço antes de letras maiúsculas
      .replace(/^./, (str) => str.toUpperCase()) // Capitaliza a primeira letra
      .trim(); // Remove espaços extras (se existirem)
  }

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber.replace(/\D/g, "")}`, "_blank");
  };

  return (
    <div className="space-y-6">
      <Card className="bg-neutral-100">
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle className="text-muted-foreground text-ellipsis overflow-hidden">
            Personnal
          </CardTitle>
          <EditDialog title={"Personnal"}>
            <EditPersonalForm />
          </EditDialog>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-start gap-2">
            <MapPinnedIcon className="text-muted-foreground" size={20} />
            <span className="text-muted-foregroundtext-ellipsis overflow-hidden">
              New York
            </span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <PhoneIcon size={20} />
            <span>{phoneNumber}</span>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <CoinsIcon size={20} className="fill-amber-400" />
            <span>799</span>
          </div>

          <Button
            variant="default"
            className="w-full gap-2 bg-rose-500 hover:bg-neutral-300 text-neutral-100 hover:text-rose-400 min-w-10"
            onClick={handleWhatsAppClick}
          >
            <MessageCircle size={24} />
            Chat on WhatsApp
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-neutral-100">
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle className="text-muted-foreground text-ellipsis overflow-hidden">
            About
          </CardTitle>
          <EditDialog title={"About"}>
            <EditAboutForm />
          </EditDialog>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Professional profile with years of experience...
          </p>
        </CardContent>
      </Card>

      <Card className="bg-neutral-100">
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle className="text-muted-foreground text-ellipsis overflow-hidden">
            Physical Characteristics
          </CardTitle>
          <Button
            size="icon"
            className={
              "bg-rose-400 hover:bg-neutral-300 text-neutral-100 hover:text-rose-400 m-0 min-w-10"
            }
          >
            <MdEdit />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(physicalCharacteristics).map(([key, value]) => (
              <div key={key} className="flex flex-col py-1">
                <span className="text-muted-foreground font-semibold">
                  {transformString(key)}
                </span>
                <span className="text-muted-foreground font-normal">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-neutral-100">
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle className="text-muted-foreground">services</CardTitle>
          <EditDialog title={"Services"}>
            <EditServicesForm />
          </EditDialog>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {services.map((service) => (
              <Badge
                key={service}
                className="gap-1 bg-rose-500 hover:bg-neutral-200 text-neutral-100 hover:text-rose-500 font-medium py-2"
              >
                {service}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
