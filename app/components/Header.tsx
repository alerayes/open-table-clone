import { useRouter } from "next/navigation";
import { useState } from "react";
import SearchBar from "./SearchBar";

export default function Header(){

    return (
      <div 
          className="relative isolate overflow-hidden "
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div> {/* Color overlay with opacity */}
          <div className="flex flex-col items-center justify-center align-center h-screen mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl font-league font-bold tracking-tight m-0 text-white sm:text-6xl flex items-center justify-center h-full">
                Reserve your dining experience
              </h1>
              <SearchBar />
            </div>
          </div>
      </div>



    )
}