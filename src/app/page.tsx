import Link from "next/link";


export default function Home() {
  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <nav>
        <ul>
          <li>
            <Link prefetch={false} href="/server-only-component">/server-only-component</Link>
          </li>
          
        </ul>
      </nav>
      <h1>Home Page</h1>
      <div className="flex flex-col gap-8 row-start-2 sm:items-start bg-white">
       hello
      </div>
    </main>
  );
}
