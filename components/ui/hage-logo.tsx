"use client";

import Image from "next/image";

type HageLogoProps = {
  className?: string; // extra Tailwind or CSS classes
};

export default function HageLogo({ className }: HageLogoProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/HageLogo.png"
        alt="Hage Logo"
        fill
        style={{ objectFit: "contain" }}
        className="rounded"
      />
    </div>
  );
}
