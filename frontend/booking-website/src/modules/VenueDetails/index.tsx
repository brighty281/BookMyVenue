import Banner from "./components/Banner"

import AboutTheVenue from "./components/AboutTheVenue"
import VenueMap from "./components/VenueMap"
import ReviewList from "./components/ReviewList"
import ContactUs from "./components/ContactUs"
import OtherVenues from "./components/OtherVenues"

type Props = {}

export default function VenueDetails({}: Props) {
  return (
    <>
      <Banner />
      <div className="bg-white">
        <div className="mx-auto space-y-6 py-10 md:max-w-6xl lg:max-w-7xl">
          <AboutTheVenue />
          <ContactUs />
          <VenueMap />
          <ReviewList />
          <OtherVenues />
        </div>
      </div>
    </>
  )
}
