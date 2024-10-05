import Link from "next/link";

import { api, HydrateClient } from "~/trpc/server";
import Header from "../_components/header";
import { Calculator } from "../_components/calculator";

export default function CalculatorPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#262e52] to-[#254764] text-white">
      <Header/>
      <Calculator/>
    </main>
  );
}
