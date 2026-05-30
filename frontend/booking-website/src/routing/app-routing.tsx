import AppLayout from "@/layout/AppLayout"
import { appRoutes } from "@/routes"
import { lazy } from "react"
import { Navigate, Route, Routes } from "react-router"

type Props = {}

const Home = lazy(() => import("@/modules/Home"))

export default function AppRouting({}: Props) {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Navigate to={appRoutes.home} replace />} />
        <Route path={appRoutes.home} element={<Home />} />
      </Route>
    </Routes>
  )
}
