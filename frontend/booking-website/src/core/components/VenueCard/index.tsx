import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

type Props = {}

export default function VenueCard({}: Props) {
  return (
    <div className="cursor-pointer">
      <Card className="m-0 p-0">
        <CardContent className="relative m-0 h-89.75 w-full p-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/bb/RU_Auditorium_Building.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute right-0 bottom-0 left-0 flex items-center gap-2 bg-black text-white p-2">
            <Star className="fill-primary stroke-primary size-5" />
            <p>8.3/10</p>
          </div>
        </CardContent>
      </Card>
      <div className="mt-1">
        <p className="text-lg font-semibold">Kakkand, Kochi</p>
        <span className="text-sm text-gray-400">Wedding</span>
      </div>
    </div>
  )
}
