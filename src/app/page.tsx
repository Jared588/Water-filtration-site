import Link from "next/link";

import { api, HydrateClient } from "~/trpc/server";
import Header from "./_components/header";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#262e52] to-[#254764] text-white">
        <Header />
        <div className="flex flex-col flex-grow items-center justify-center pt-20 pb-36 md:pt-40 md:pb-64">
          <h1 className="w-2/3 text-center text-5xl font-extrabold tracking-tight leading-tight sm:text-[4rem] md:text-[5rem]">
            The <span className="text-blue-600">Future</span> Of Your {" "}
            <span className="text-blue-600">Water</span> Supply
          </h1>
          <div className="flex gap-x-4 pt-6">
            <Link className="mb-36 px-4 py-3 rounded-xl bg-slate-600 bg-opacity-70 hover:bg-opacity-100" href={"/calculator"}>
              Calculator
            </Link>
            <Link className="mb-36 px-4 py-3 rounded-xl bg-slate-600 bg-opacity-70 hover:bg-opacity-100" href={"/about"}>
              About Us
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center mt-[-160px]">
          <div className="md:w-2/5 rounded-xl p-6">
            <h2 className="pb-6 text-4xl text-blue-500">
              We value quality without compromising on affordability
            </h2>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div>
            <svg
              className="w-64 fill-blue-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>water-check</title>
              <path d="M21.75 16.25L17 21L14.25 18L15.41 16.84L17 18.43L20.59 14.84L21.75 16.25M17.62 12C16.31 8.1 12 3.25 12 3.25S6 10 6 14C6 17.31 8.69 20 12 20H12.34C12.12 19.36 12 18.7 12 18C12 14.82 14.5 12.22 17.62 12Z" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly py-20 gap-y-6">
          <div className="bg-slate-500 bg-opacity-15 p-6 md:rounded-xl md:w-1/4">
            <h2 className="flex items-center gap-x-2 pb-6 text-2xl text-blue-500">
              <svg className="w-10 fill-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cash</title><path d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" /></svg>
              Affordability
            </h2>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="bg-slate-500 bg-opacity-15 p-6 md:rounded-xl md:w-1/4">
            <h2 className="flex items-center gap-x-2 pb-6 text-2xl text-blue-500">
              <svg className="w-10 fill-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star-box</title><path d="M19,3A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M15.58,17L14.63,12.92L17.79,10.19L13.62,9.83L12,6L10.38,9.84L6.21,10.2L9.37,12.93L8.42,17L12,14.84L15.58,17Z" /></svg>
              Quality
            </h2>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="bg-slate-500 bg-opacity-15 p-6 md:rounded-xl md:w-1/4">
            <h2 className="flex items-center gap-x-2 pb-6 text-2xl text-blue-500">
              <svg className="w-10 fill-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>wrench</title><path d="M22.7,19L13.6,9.9C14.5,7.6 14,4.9 12.1,3C10.1,1 7.1,0.6 4.7,1.7L9,6L6,9L1.6,4.7C0.4,7.1 0.9,10.1 2.9,12.1C4.8,14 7.5,14.5 9.8,13.6L18.9,22.7C19.3,23.1 19.9,23.1 20.3,22.7L22.6,20.4C23.1,20 23.1,19.3 22.7,19Z" /></svg>
              Services
            </h2>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
