'use client'
import Link from "next/link";

export default function AboutBtn({children}) {
return(
<div className="flex flex-row w-auto h-auto border-1 border-gray-300 shadow-lg transition transform hover:-translate-y-1 bg-transparent p-3 text-gray-300 cursor-pointer">
<Link href='/about'>
{children}
{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg> */}
</Link>
</div>
)}