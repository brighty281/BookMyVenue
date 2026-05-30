import Navbar from "@/core/components/Navbar"
import { Outlet } from "react-router"

type Props = {}

export default function AppLayout({}: Props) {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
