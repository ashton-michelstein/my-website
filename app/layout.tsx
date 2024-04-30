import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";

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
        <header className="flex items-center justify-between">
          <Link href="/" className="text-indigo-300 text-lg font-bold hover:scale-110 hover:text-white transition">Home</Link>
          <div className="flex items-center gap-3 text-indigo-300 text-lg font-bold">
            {pages.map(page => (
              <Link href={`/${page.slug}`} key= {page._id} className="hover:scale-110 hover:text-white transition">{page.title}</Link>
            ))}
          </div>
        </header>

        <main>{children}</main>
        
        </body>
    </html>
  );
}
