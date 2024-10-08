import Link from "next/link";

import { api, HydrateClient } from "~/trpc/server";
import Header from "../_components/header";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#262e52] to-[#254764] text-white">
      <Header />
      <div className="container flex flex-col items-center justify-center gap-12 py-16 md:px-4">
        <h1 className="pb-20 text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          About <span className="text-blue-600">Us</span>
        </h1>
        <div className="flex flex-col gap-x-20 border-b px-4 pb-16 text-center md:flex-row">
          <div className="flex w-full flex-col gap-y-4 pb-10 md:w-1/3">
            <h2 className="text-4xl text-blue-400">Our Story</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>

          <div className="flex w-full flex-col gap-y-4 pb-10 md:w-1/3">
            <h2 className="text-4xl text-blue-400">Our Mission</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="flex w-full flex-col gap-y-4 md:w-1/3">
            <h2 className="text-4xl text-blue-400">Our Values</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
        <div className="container flex flex-col items-center justify-center gap-y-12 py-10">
          <div className="bg-slate-500 bg-opacity-15 p-6 md:rounded-xl">
            <h2 className="pb-4 text-4xl text-blue-500">What We Do?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="bg-slate-500 bg-opacity-15 p-6 md:rounded-xl">
            <h2 className="pb-4 text-4xl text-blue-500">How We Do It?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="bg-slate-500 bg-opacity-15 p-6 md:rounded-xl">
            <h2 className="pb-4 text-4xl text-blue-500">How We Can Help?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 p-6 text-center">
          <h1 className="pb-8 text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Contact <span className="text-blue-600">Us</span>
          </h1>
          <p>📍 123 Aqua Street</p>
          <p>🕒 Mon-Thurs: 8am-6pm, Fri-Sun: 8am-3pm</p>
          <p>☎️ (222)-888 5555</p>
        </div>
      </div>
    </main>
  );
}
