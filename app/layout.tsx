import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";
import React from "react";
import Cursor from "../Cursor"
import { Analytics } from "@vercel/analytics/react";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ashton Michelstein - Software Engineer",
  description: "A website to display my projects",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

const pages = await getPages()

  return (
    <html lang="en">
      <body className="bg-neutral-900 max-w-5xl mx-auto py-10">
      <Cursor/>
      <Analytics/>
        <header className="flex items-center justify-between text-lg font-bold">
          <Link href="/" className="button">Home</Link>
          <div className="flex items-center gap-3 text-lg font-bold">
            {pages.map(page => (
              <Link href={`/${page.slug}`} key= {page._id} className="button">{page.title}</Link>
            ))}
          </div>
        </header>

        <main>{children}</main>
        
        </body>
    </html>
  );
}
