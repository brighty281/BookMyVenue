import VenueCard from "@/core/components/VenueCard"
import Banner from "./components/Banner"

type Props = {}

export default function Home({}: Props) {
  return (
    <>
      <Banner />
      <div className="mx-auto my-6 md:max-w-6xl lg:max-w-7xl grid grid-cols-5 gap-8">
        <VenueCard />
        <VenueCard />
        <VenueCard />
        <VenueCard />
        <VenueCard />
        <VenueCard />
        <VenueCard />
        <VenueCard />
        <VenueCard />
        <VenueCard />
      </div>
    </>
  )
}
