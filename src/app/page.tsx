import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import { Calculator } from "./_components/calculator";
import Header from "./_components/header";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#262e52] to-[#254764] text-white">
        <Header />
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem] pb-20">
            Cost <span className="text-blue-600">Calculator</span>
          </h1>
          
          <Calculator />
        </div>
      </main>
    </HydrateClient>
  );
}
