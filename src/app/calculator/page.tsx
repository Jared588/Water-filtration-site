import Link from "next/link";

import { api, HydrateClient } from "~/trpc/server";
import Header from "../_components/header";
import { Calculator } from "../_components/calculator";

export default function CalculatorPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#262e52] to-[#254764] text-white">
      <Header />
      <Calculator />
      <div className="flex flex-col md:flex-row text-center gap-x-20 gap-y-10 p-16 pb-16">
          <div className="rounded-xl bg-slate-500 bg-opacity-15 p-6">
            <h2 className="pb-4 text-4xl text-blue-500">How Are Costs Calculated?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.
            </p>
          </div>
          <div className="rounded-xl bg-slate-500 bg-opacity-15 p-6">
            <h2 className="pb-4 text-4xl text-blue-500">What Packages We Offer?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.
            </p>
          </div>
      </div>
    </main>
  );
}
