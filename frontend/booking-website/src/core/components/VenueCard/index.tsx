import { Card, CardContent } from "@/components/ui/card"
import { appRoutes } from "@/routes"
import { Star } from "lucide-react"
import { Link } from "react-router"

type Props = {
  data: any
}

export default function VenueCard({ data }: Props) {
  return (
    <Link to={appRoutes.venueDetails?.replace(":id", data?.id)}>
      <div className="cursor-pointer">
        <Card className="m-0 p-0">
          <CardContent className="relative m-0 h-89.75 w-full p-0">
            {/* <img
            src={data?.image}
            alt={data?.name}
            className="h-full w-full object-cover"
          /> */}
            <div className="absolute right-0 bottom-0 left-0 flex items-center gap-2 bg-black p-2 text-white">
              <Star className="size-5 fill-primary stroke-primary" />
              <p>{data?.rating}/10</p>
            </div>
          </CardContent>
        </Card>
        <div className="mt-1">
          <p className="text-lg font-semibold">{data?.name}</p>
          <span className="text-sm text-gray-400">{data?.category}</span>
        </div>
      </div>
    </Link>
  )
}
