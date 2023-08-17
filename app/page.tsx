

import Header from "./components/Header"
import RestaurantCard from "./components/RestaurantCard"
import { PrismaClient, Cuisine, Location, PRICE, Review } from "@prisma/client"
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperComponent from "./components/Swiper";


export interface RestaurantCardType {
  id: number
  name: string
  main_image: string
  cuisine: Cuisine
  location: Location
  price: PRICE
  slug: string
  reviews: Review[]
}

const prisma = new PrismaClient()

const fetchRestaurants = async (): Promise<RestaurantCardType[]> =>  {
  const restaurants =  await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      slug: true,
      location: true,
      price: true,
      reviews: true,
    }
  })

  return restaurants
}

export default async function Home() {
  const restaurants = await fetchRestaurants()

  return (
    <main>
      <Header />
      <h2 className="m-10 font-league font-bold text-2xl">
        Trending Restaurants
      </h2>
        {/* <div className="bg-white py-3 px-36 pt-10 flex flex-wrap justify-center">
          {restaurants.map((restaurant) => (
            <RestaurantCard restaurant={restaurant}/>  

          ))}
        </div> */}
        <div className="mx-auto ml-10">
          <SwiperComponent restaurants={restaurants} />
        </div>
    </main>
  )
}
