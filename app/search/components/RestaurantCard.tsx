import Price from "@/app/components/Price";
import Stars from "@/app/components/Stars";
import { calculateReviewRatingAverage } from "@/utils/calculateReviewRatingAverage";
import { Cuisine, PRICE, Location, Review } from "@prisma/client";
import Link from "next/link";

interface Restaurant {
  id: number;
  name: string;
  main_image: string;
  price: PRICE;
  cuisine: Cuisine;
  location: Location;
  slug: string;
  reviews: Review[];
}

export default function RestaurantCard({restaurant} : {restaurant: Restaurant}) {

    const renderRatingText = () => {
      const rating = calculateReviewRatingAverage(restaurant.reviews)
      
      if(rating > 4) return "Awesome"
      else if(rating <= 4 && rating > 3) return "Good"
      else if(rating <= 3 && rating > 0) return "Average"
      else ""
    }

    return (
     <div className="flex py-4 w-96 mb-2 mx-8 border">
            <img
              src={restaurant.main_image}
              alt=""
              className="w-44 h-36 rounded"
            />
            <div className="pl-5">
              <h2 className="text-2xl font-league font-bold">{restaurant.name}</h2>
              <div className="flex items-start">
                <div className="flex mb-2 font-league">
                  <Stars reviews={restaurant.reviews}/>
                </div>
                <p className="ml-2 text-md font-league">{renderRatingText()}</p>
              </div>
              <div className="mb-9">
                <div className="font-light flex text-reg">
                  <Price price={restaurant.price}/>
                  <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
                  <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
                </div>
              </div>
              <div className="font-league text-red-600">
                <Link href={`restaurant/${restaurant.slug}`}>View more information</Link>
              </div>
            </div>
      </div>
    )
}