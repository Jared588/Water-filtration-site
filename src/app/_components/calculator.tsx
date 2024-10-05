"use client";

import { useState } from "react";
import { Slider } from "~/components/ui/slider"


export function Calculator() {
    const [clientPrice, setClientPrice] = useState(0.35);
    const [amount, setAmount] = useState(750);
    const [companyPrice, setCompanyPrice] = useState(0.30);

    return (
        <div className="flex flex-col w-full gap-5">
            <div className="flex flex-wrap gap-10 justify-center ">
                <div className="flex flex-col justify-center content-center items-center gap-y-6">
                    <div className="flex flex-col sm:items-end items-center">
                        <h3>Price per litre:</h3>
                        <p className="text-blue-400">R{clientPrice.toFixed(2)}</p>
                        <Slider defaultValue={[0.25]} max={2.00} min={0.01} step={0.01} onValueChange={(val) => setClientPrice(val[0] ?? 0)} className="w-60 py-4" />
                    </div>
                    <div className="flex flex-col sm:items-end items-center">
                        <h3>Weekly Usage:</h3>
                        <p className="text-blue-400">{amount} litres</p>
                        <Slider defaultValue={[750]} max={5000} min={50} step={1} onValueChange={(val) => setAmount(val[0] ?? 0)} className="w-60 py-4" />
                    </div>
                </div>
                <svg className="fill-blue-300 max-w-52" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>water</title><path d="M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z" /></svg>
            </div>
            <div className="flex flex-col sm:flex-row w-full justify-evenly pt-20 gap-y-10">
                <div className="flex flex-col text-center">
                    <p className="text-lg">You&apos;re currently paying:</p>
                    <p className="text-3xl text-blue-400">
                        R{(clientPrice * amount)
                        .toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                    <p>per week</p>
                </div>
                <div className="flex flex-col text-center">
                    <p className="text-lg">Switching to H20-Awesome</p>
                    <p className="text-3xl text-blue-400">
                        R{(companyPrice * amount)
                        .toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                    <p>per week</p>
                </div>
            </div>
            <div className="flex flex-col text-center pt-5">
                <p className="text-lg">Annual Savings:</p>
                <p className="text-3xl text-blue-400">
                    R{((clientPrice * amount * 54) - (companyPrice * amount * 54))
                    .toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
            </div>
            <div></div>
        </div>
    )
}