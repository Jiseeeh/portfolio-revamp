"use client";

import localFont from "next/font/local";
import { useEffect, useState } from "react";

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});

interface PatternWrapperProps {
  children: React.ReactNode;
}

const PatternWrapper: React.FC<PatternWrapperProps> = ({ children }) => {
  const patterns = [
    "bg-topography",
    "bg-tictac",
    "bg-leaf",
    "bg-brick",
    "bg-jigsaw",
    "bg-skull",
    "bg-diamond",
    "bg-rain",
    "bg-circuit",
  ];

  const [pattern, setPattern] = useState("");

  useEffect(() => {
    const randomPattern = patterns[Math.floor(Math.random() * patterns.length)];

    setPattern(randomPattern);
  }, []);

  return <body className={`${satoshi.className} ${pattern}`}>{children}</body>;
};

export { PatternWrapper };
