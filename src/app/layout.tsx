import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SocialImage from "./components/SocialImage";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="relative linen-header pt-12 px-6 sm:px-8 pb-16 border-b border-slate-700/50">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-start mb-8">
              <div className="flex-1">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Laura Pelofske
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mt-2">
                  Senior Software Developer
                </p>
              </div>
              <div className="flex gap-6 ml-6">
                <SocialImage
                  image="/LinkedIn_icon.svg"
                  link="https://www.linkedin.com/in/laura-pelofske-26a69775/"
                  alt="LinkedIn profile"
                />
                <SocialImage
                  image="/github-mark.svg"
                  link="https://github.com/cellarstella"
                  alt="GitHub profile"
                />
                <SocialImage
                  image="/file.svg"
                  link="/LauraPelofske_Resume_2025.pdf"
                  alt="PDF resume"
                />
              </div>
            </div>
            <nav className="text-gray-400 text-lg max-w-3xl">
              <div className="flex gap-8">
                <Link href="/">Home</Link>
                <Link href="/experience">Experience</Link>
                <Link href="/examples">Examples</Link>
              </div>
            </nav>
          </div>
        </header>
          <div className="font-sans bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-screen">
            <main className="flex flex-col gap-16 max-w-6xl mx-auto px-6 sm:px-8 py-12 pb-20">
              {children}
            </main>
          </div>
        <footer className="border-t border-slate-700/50 py-8 text-center text-sm text-gray-400 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">© {currentYear} Laura Pelofske. All rights reserved.</div>
        </footer>
      </body>
    </html>
  );
}
