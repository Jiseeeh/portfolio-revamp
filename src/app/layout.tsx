import dynamic from "next/dynamic";
import type { Metadata } from "next";

import "./globals.css";
import "./globals-pattern.css";
import { PostHogProvider } from "./post-hog-provider";
import { PatternWrapper } from "./PatternWrapper";

const PostHogView = dynamic(() => import("./post-hog-view"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Jiseeeh",
  description: "Jiseeeh's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
  const pattern = patterns[Math.floor(Math.random() * patterns.length)];
  return (
    <html lang="en">
      <PostHogProvider>
        <PatternWrapper>
          <PostHogView />
          <main>{children}</main>
        </PatternWrapper>
      </PostHogProvider>
    </html>
  );
}
