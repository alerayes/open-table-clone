import Header from "./components/Header"
import SearchSideBar from "./components/SearchSideBar"
import RestaurantCard from "./components/RestaurantCard"
import { PRICE, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

interface SearchParams {city?: string, cuisine?: string, price?: PRICE}
 
const fetchRestaurantsByCity = async (searchParams: SearchParams) => {

  const where: any = {}

  if(searchParams.city){
    const location = {
      name: {
        equals: searchParams.city.toLowerCase()
      }
    }
    where.location = location
  }
  if(searchParams.cuisine){
    const cuisine = {
      name: {
        equals: searchParams.cuisine.toLowerCase()
      }
    }
    where.cuisine = cuisine
  }
  if(searchParams.price){
    const price = {
      equals: searchParams.price
    }
    where.price = price
  }

  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
    reviews: true
  }

  return prisma.restaurant.findMany({
    where,
    select,
  })
}

const fetchLocations = async () => {
  return prisma.location.findMany();
};

const fetchCuisines = async () => {
  return prisma.cuisine.findMany();
};

export default async function Search({
  searchParams
} : {
  searchParams: SearchParams
}){

    const restaurants = await fetchRestaurantsByCity(searchParams)
    const location = await fetchLocations()
    const cuisine = await fetchCuisines()

    console.log(cuisine)

    console.log(location)

    return (
      <>
        <Header />
        <div className="max-w-7xl flex flex-col items-center">
          <h2 className="mx-10 my-8 font-bold font-league text-xl">
            We've found {restaurants.length} restaurants based on your search:
          </h2>
          <div className="flex py-4 m-auto  justify-between items-start">
            <SearchSideBar
              locations = {location}
              cuisines = {cuisine}
              searchParams={searchParams}
            />
              <div className="w-5/6">
                {restaurants.length ? (
                  <>
                    {restaurants.map((restaurant) => (
                      <RestaurantCard restaurant={restaurant} key={restaurant.id}/>
                    ))}
                  </>
                ) : (
                  ''
                )}
              </div>
        </div>
        </div>
      </>

    )
}