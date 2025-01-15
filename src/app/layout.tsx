import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Video countdown",
  description: "Created by Aleksan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <Link prefetch={false} href="/">Home Page</Link>
              </li>
              <li>
                <Link prefetch={false} href="/countdown">Countdown Page</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="mx-auto h-full flex items-center flex-col container">
          {children}
        </main>
      </body>
    </html>
  );
}
