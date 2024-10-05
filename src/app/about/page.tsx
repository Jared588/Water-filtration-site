import Link from "next/link";

import { api, HydrateClient } from "~/trpc/server";
import Header from "../_components/header";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#262e52] to-[#254764] text-white">
      <Header/>
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="pb-20 text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          About <span className="text-blue-600">Us</span>
        </h1>
        <div className="flex flex-col md:flex-row text-center gap-x-20 border-b pb-16">
          <div className="flex flex-col w-full md:w-1/3 gap-y-4 pb-10">
            <h2 className="text-4xl text-blue-400">Our Story</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.
            </p>
          </div>

          <div className="flex flex-col w-full md:w-1/3 gap-y-4 pb-10">
            <h2 className="text-4xl text-blue-400">Our Mission</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="flex flex-col w-full md:w-1/3 gap-y-4">
            <h2 className="text-4xl text-blue-400">Our Values</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.
            </p>
          </div>
        </div>
        <div className="flex flex-col text-center gap-y-4">
          <h1 className="text-5xl text-blue-300 pb-4">Contact Us</h1>
          <p>📍 123 Aqua Street</p>
          <p>🕒 Mon-Thurs: 8am-6pm, Fri-Sun: 8am-3pm</p>
          <p>☎️ (222)-888 5555</p>
        </div>
      </div>
    </main>
  );
}
