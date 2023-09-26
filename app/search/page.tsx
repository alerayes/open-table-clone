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
        <div className="">
          <Header />
          <h2 className="mx-4 mt-8 mb-4 font-bold font-league text-xl text-center">
            We've found {restaurants.length} restaurants based on your search:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-screen-lg">
            <div className="col-span-1 w-4/12">
              <SearchSideBar
                locations={location}
                cuisines={cuisine}
                searchParams={searchParams}
              />
            </div>
            <div className="col-span-1 w-8/12">
              {restaurants.length ? (
                <>
                  {restaurants.map((restaurant) => (
                    <RestaurantCard restaurant={restaurant} key={restaurant.id} />
                  ))}
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>


    )
}