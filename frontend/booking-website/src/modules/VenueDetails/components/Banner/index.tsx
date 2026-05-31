import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

type Props = {}

export default function Banner({}: Props) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%), url("https://images.unsplash.com/photo-1519167758481-83f550bb49b3")`,
      }}
      className="h-120 bg-[#1a1a1a] bg-cover"
    >
      <div className="mx-auto flex h-full items-center gap-8 md:max-w-6xl lg:max-w-7xl">
        <Card className="m-0 h-105 w-65.25 p-0">
          <img
            src={"https://images.unsplash.com/photo-1519167758481-83f550bb49b3"}
            alt=""
            className="h-full w-full object-cover"
          />
        </Card>
        <div className="flex-1 space-y-6 text-white">
          <h1 className="text-3xl font-bold capitalize">Kakkanad, Kochi</h1>
          <div className="flex items-center gap-2">
            <Star className="size-5 fill-primary text-primary" />
            <p className="text-lg font-bold">8.1/10</p>
          </div>
          <div>
            <Badge className="rounded-md bg-[#616161e5] py-2 text-center text-sm">
              Wedding Hall
            </Badge>
          </div>
          <Button className="text-md cursor-pointer px-12 py-6">
            Book Venue
          </Button>
        </div>
        <div></div>
      </div>
    </div>
  )
}
