import Link from "next/link";

import { api, HydrateClient } from "~/trpc/server";
import Header from "./_components/header";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#262e52] to-[#254764] text-white">
        <Header />
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          
        </div>
      </main>
    </HydrateClient>
  );
}
