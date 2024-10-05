import Link from "next/link"

export default function Header() {
    return (
        <div className="flex justify-between w-full p-8">
            <h1 className="text-4xl font-medium -tracking-tighter">H20-Awesome</h1>
            <div className="flex gap-5 items-center">
                <Link className="text-xl" href={"/"}>Home</Link>
                <Link className="text-xl" href={"/calculator"}>Calculator</Link>
                <Link className="text-xl" href={"/about"}>About</Link>
            </div>
        </div>
    )
}