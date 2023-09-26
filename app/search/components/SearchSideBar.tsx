'use client'

import { Cuisine, Location, PRICE } from "@prisma/client"
import Link from "next/link"
import { Disclosure, Popover } from '@headlessui/react'
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline"

export default function SearchSideBar({
  locations,
  cuisines,
  searchParams
} : {
  locations: Location[]
  cuisines: Cuisine[]
  searchParams: {city?: string, cuisine?: string, price?: PRICE}
}) {

    const prices = [
      {
        id: 1,
        price: PRICE.CHEAP,
        label: "$",
        className: "border w-full text-reg text-center font-light rounded-l p-2"
      },
      {
        id: 2,
        price: PRICE.REGULAR,
        label: "$$",
        className: "border w-full text-reg text-center font-light p-2"
      },
      {
        id: 3,
        price: PRICE.EXPENSIVE,
        label: "$$$",
        className: "border w-full text-reg text-center font-light rounded-r p-2"
      },
    ]

    return (

      <>

<Popover className="sm:block md:hidden mx-1">
  <Popover.Button className='ml-2 left-0'>
    <AdjustmentsHorizontalIcon className="flex border-1 h-6 w-6" aria-hidden="true" />
  </Popover.Button>

  <Popover.Panel className="absolute w-64 z-10 bg-white left-0"> 
    <div className="w-56 mt-4 z-10">
      <div className="border-b pb-4 flex flex-col">
        <h1 className="mb-2 font-league font-bold">Region</h1>
        {locations.map((location) => (
          <Link
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                city: location.name
              }
            }}
            className="font-light font-league capitalize" 
            key={location.id}
          >
            {location.name}
          </Link>
        ))}
      </div>
      <div className="border-b pb-4 mt-3 flex flex-col">
        <h1 className="mb-2 font-league font-bold">Cuisine</h1>
        {cuisines.map((cuisine) => (
          <Link 
            href={{
              pathname:"/search",
              query: {
                ...searchParams,
                cuisine: cuisine.name
              }
            }}
            className="font-light text-reg capitalize" 
            key={cuisine.id}
          >
            {cuisine.name}
          </Link>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2 font-league font-bold">Price</h1>
        <div className="flex">
          {prices.map((price) => (
            <Link
              key={price.id}
              href={{
                pathname: '/search',
                query: {
                  ...searchParams,
                  price: price.price
                }
              }}
              className={price.className} 
            >
              {price.label}
            </Link>
          ))}
        </div>
      </div>
    </div>  
  </Popover.Panel>
</Popover>


        
        <div className="lg:block md:block sm:hidden mx-12 w-56">
                    <div className="border-b pb-4 flex flex-col">
                      <h1 className="mb-2 font-league font-bold">Region</h1>
                      {locations.map((location) => (
                        <Link
                          href={{
                            pathname: "/search",
                            query: {
                              ...searchParams,
                              city: location.name
                            }
                          }}
                          className="font-light font-league capitalize"
                          key={location.id}
                        >
                          {location.name}
                        </Link>
                      ))}
                    </div>
                    <div className="border-b pb-4 mt-3 flex flex-col">
                      <h1 className="mb-2 font-league font-bold">Cuisine</h1>
                      {cuisines.map((cuisine) => (
                        <Link
                          href={{
                            pathname: "/search",
                            query: {
                              ...searchParams,
                              cuisine: cuisine.name
                            }
                          }}
                          className="font-light text-reg font-league capitalize"
                          key={cuisine.id}
                        >
                          {cuisine.name}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 pb-4">
                      <h1 className="mb-2 font-league font-bold">Price</h1>
                      <div className="flex">
                        {prices.map((price) => (
                          <Link
                            key={price.id}
                            href={{
                              pathname: '/search',
                              query: {
                                ...searchParams,
                                price: price.price
                              }
                            }}
                            className={price.className}
                          >
                            {price.label}
                          </Link>
                        ))}
                      </div>
                    </div>
        </div>

      </>
    )
  }