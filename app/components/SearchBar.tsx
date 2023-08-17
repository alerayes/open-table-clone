"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter()
  const [location, setLocation] = useState('')

  
  return (
    <div className="text-left text-lg py-3 m-auto  flex justify-center w-[3/4]">
        <input
        className="rounded font-league mr-3 p-2 w-[2/3]"
        type="text"
        placeholder="State, city or town"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        />
        <button 
        className="rounded bg-red-700 px-9 py-2 text-white font-league"
        onClick={() => {
            if(location === '') return;
            router.push(`/search?city=${location}`);
            setLocation("")
        }}
        >
        Let's go
        </button>
    </div>
  )
}
