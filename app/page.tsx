"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-hidden flex items-center justify-center flex-col gap-9">
      <Image width={60} height={64} src="/logo.svg" alt="lightsprint" />

      <div className="flex flex-col gap-6">
        <h1 className="max-w-xl mx-auto font-paragon text-2xl md:text-3xl lg:text-4xl text-center font-serif tracking-tight">
          Lightsprint Next.js starter.
        </h1>

        <p className="w-full text-lg text-center max-w-md text-white/60">
          Plan visually, preview live, ship production-ready code. Spin up your
          next Lightsprint app from this template to start sprinting.{" "}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Button>Deploy now</Button>
        <Button variant="ghost">Learn more</Button>
      </div>
    </div>
  );
}
