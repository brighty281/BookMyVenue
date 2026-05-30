import { Link } from "react-router"
import appLogo from "@/assets/app-logo-v1.png"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu } from "lucide-react"
import SearchInput from "../SearchInput"
import { useState } from "react"
import SignInModal from "@/auth/components/SignInModal"

type Props = {
  onLocationOpen: (open: boolean) => void
  onDrawerOpen: (open: boolean) => void
}

export default function Navbar({ onLocationOpen, onDrawerOpen }: Props) {
  const [isSignIn, setIsSignIn] = useState<boolean>(false)
  return (
    <>
      <nav className="mx-auto flex items-center justify-between py-2 md:max-w-6xl lg:max-w-7xl">
        <div className="flex items-center gap-4">
          <Link to={"/"} className="h-14 w-28.5">
            <img
              className="h-full w-full"
              src={appLogo}
              alt="Book My Venue"
              loading="lazy"
            />
          </Link>
          <div className="w-md lg:w-xl">
            <SearchInput placeholder="Search venue..." />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            className="flex cursor-pointer items-center gap-2 bg-transparent hover:bg-transparent"
            variant={"ghost"}
            size={"sm"}
            onClick={() => onLocationOpen(true)}
          >
            Kochi
            <ChevronDown />
          </Button>
          <Button
            onClick={() => setIsSignIn(true)}
            className="cursor-pointer"
            size={"sm"}
          >
            Sign In
          </Button>
          <Button
            className="cursor-pointer bg-transparent hover:bg-transparent"
            variant={"ghost"}
            size={"icon-lg"}
            onClick={() => onDrawerOpen(true)}
          >
            <Menu className="size-5" />
          </Button>
        </div>
      </nav>

      <SignInModal onOpenChange={setIsSignIn} open={isSignIn} />
    </>
  )
}
