"use client";

import { ReactNode, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { ScrollArea } from "@/components/ui/scroll-area";

import { MdEdit } from "react-icons/md";

interface EditDialogProps {
  title: string;
  children?: ReactNode;
}

export function EditDialog({ title, children }: EditDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          size="icon"
          className={
            "bg-rose-400 hover:bg-neutral-300 text-neutral-100 hover:text-rose-400 m-0"
          }
        >
          <MdEdit />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-neutral-100">
        <DialogHeader>
          <DialogTitle className="text-muted-foreground">{title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh]">
          <div className="space-y-6 px-2">{children}</div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
