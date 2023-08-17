import { Time, convertToDisplayTime } from "@/utils/convertToDisplayTime";
import {format} from "date-fns"

export default function Header({
  image,
  name,
  date,
  partySize
} : {
  image: string;
  name: string;
  date: string;
  partySize: string
}) {

  const [day, time] = date.split("T")

  return (
    <div>
        <h3 className="font-bold font-league text-lg">You're almost done!</h3>
        <div className="mt-5 flex">
            <img
            src={image}
            alt=""
            className="w-32 h-18 rounded"
            />
            <div className="ml-4">
            <h1 className="text-3xl font-bold font-league">
                {name}
            </h1>
            <div className="flex mt-3">
                <p className="mr-6 font-league">
                  {format(new Date(date), "ccc, LLL d")}
                </p>
                <p className="mr-6 font-league">{convertToDisplayTime(time as Time)}</p>
                <p className="mr-6 font-league">{partySize} {parseInt(partySize) === 1 ? "person" : "people"}</p>
            </div>
            </div>
        </div>
    </div>
  )
}
