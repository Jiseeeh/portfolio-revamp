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
  generator: "Next.js",
  title: "Jiseeeh - Web Developer | Portfolio",
  description:
    "Welcome to Jiseeeh's personal website. Discover my web development projects, skills, and experience in web development.",
  applicationName: "Jiseeeh's Portfolio",
  keywords: ["Jiseeeh", "Jiseeeh Portfolio", "Jiseeeh's Portfolio"],
  authors: [{ name: "Jiseeeh" }],
  creator: "Jiseeeh",
  openGraph: {
    title: "Jiseeeh",
    description:
      "Explore Jiseeeh's personal website showcasing projects, skills, and experience in web development.",
    url: "https://jiseeeh.codes",
    type: "website",
    siteName: "Jiseeeh",
    locale: "en_US",
    images: [
      {
        url: "https://jiseeeh.codes/og.png",
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Jiseeeh",
    creator: "@Jiseeeh",
    title: "Jiseeeh - Web Developer | Portfolio",
    description:
      "Explore Jiseeeh's personal website showcasing projects, skills, and experience in web development.",
    images: ["https://jiseeeh.codes/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
