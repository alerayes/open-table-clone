import RestaurantNavBar from "./components/RestaurantNavBar"
import Header from "./components/Header"
import Title from "./components/Title"
import Rating from "./components/Rating"
import Description from "./components/Description"
import Images from "./components/Images"
import Reviews from "./components/Reviews"
import ReservationCard from "./components/ReservationCard"
import { PrismaClient, Review } from "@prisma/client"
import { notFound } from "next/navigation"


const prisma = new PrismaClient

interface Restaurant {
    id: number
    name: string
    main_image: string
    images: string[]
    description: string
    open_time: string
    close_time: string
    slug: string
    reviews: Review[]
}

const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
    const restaurant = await prisma.restaurant.findUnique({
        where: {
            slug
        },
        select: {
            id: true,
            name: true,
            images: true,
            description: true,
            main_image: true,
            slug: true,
            reviews: true,
            open_time: true,
            close_time: true
        }
    })

    if(!restaurant){
        notFound()
    }

    return restaurant
}

export default async function RestaurantDetails({params}: {params: {slug: string}}) {

   const restaurant = await fetchRestaurantBySlug(params.slug);

    return (
        <>
            <div className="bg-white grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col-span-1 md:col-span-2 rounded p-3 shadow">
                    <RestaurantNavBar slug={restaurant.slug} />
                    <Title name={restaurant.name} mainImage={restaurant.main_image} />
                    <Rating reviews={restaurant.reviews} />
                    <Description description={restaurant.description} />
                    <Images images={restaurant.images} />
                    <Reviews reviews={restaurant.reviews} />
                </div>
                <div className="col-span-1 rounded bg-white relative text-reg mt-3 md:mt-0">
                    <ReservationCard
                    openTime={restaurant.open_time}
                    closeTime={restaurant.close_time}
                    slug={restaurant.slug}
                    />
                </div>
            </div>
        </>        
    )
}