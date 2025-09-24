'use client'

import Image from "next/image";

type Logo275Props = {
  className?: string;     // extra Tailwind or CSS classes
};

export default function Logo275({className }: Logo275Props) {
  return (
    <div className={`relative ${className}`}>

    <Image
      src="/logo 275.png"
      alt="Logo 275"
      fill 
        style={{ objectFit: "contain" }}
    />

    </div>
  );
}