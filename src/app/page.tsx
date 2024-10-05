import Link from "next/link";

import { api, HydrateClient } from "~/trpc/server";
import Header from "./_components/header";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#262e52] to-[#254764] text-white">
        <Header />
        <div className="flex flex-grow items-center justify-center">
          <h1 className="pb-56 text-center text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            The <span className="text-blue-600">Future</span> Of Your{" "}
            <span className="text-blue-600">Water</span> Supply
          </h1>
        </div>
      </main>
    </HydrateClient>
  );
}
