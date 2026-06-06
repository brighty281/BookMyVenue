import { Button } from "@/components/ui/button"
import Banner from "../Home/components/Banner"
import VenueFilters, { venueTypes } from "./components/VenueFilters"
import { venues } from "../Home"
import VenueCard from "@/core/components/VenueCard"
import { useSearchParams } from "react-router"
import { useCallback } from "react"
import { cn } from "@/lib/utils"

type Props = {}

export default function VenueList({}: Props) {
  const [searchParams, setSearchParams] = useSearchParams()

  const getSelected = useCallback(
    (paramKey: string): string[] => {
      const val = searchParams.get(paramKey)
      return val ? val.split(",") : []
    },
    [searchParams]
  )

  const toggleFilter = useCallback(
    (paramKey: string, value: string) => {
      const current = getSelected(paramKey)

      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]

      setSearchParams(
        (prev) => {
          const next = new URLSearchParams(prev)
          if (updated.length === 0) {
            next.delete(paramKey)
          } else {
            next.set(paramKey, updated.join(","))
          }
          return next
        },
        { preventScrollReset: true }
      )
    },
    [getSelected, setSearchParams]
  )

  const clearFilter = useCallback(
    (e: React.MouseEvent, paramKey: string) => {
      e.stopPropagation()
      setSearchParams(
        (prev) => {
          const next = new URLSearchParams(prev)
          next.delete(paramKey)
          return next
        },
        { preventScrollReset: true }
      )
    },
    [setSearchParams]
  )

  const selectedVenueTypes = getSelected("venueType")

  return (
    <>
      <Banner />
      <div className="mx-auto grid grid-cols-12 space-y-6 gap-x-10 py-10 md:max-w-6xl lg:max-w-7xl">
        <VenueFilters
          onClearFilter={clearFilter}
          onGetSelected={getSelected}
          onToggleFilter={toggleFilter}
        />
        <div className="col-span-9">
          <h2 className="text-2xl font-medium">Venues in Kochi</h2>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {venueTypes?.map((item) => {
              const isSelected = selectedVenueTypes?.includes(item?.value)
              return (
                <Button
                  key={item?.value}
                  size={"sm"}
                  variant={"outline"}
                  className={cn(
                    "cursor-pointer rounded-2xl border font-normal text-primary hover:bg-white hover:text-primary",
                    isSelected &&
                      "bg-primary text-white hover:bg-primary hover:text-white"
                  )}
                >
                  {item?.label}
                </Button>
              )
            })}
          </div>

          <div className="mt-10 grid grid-cols-4 gap-8">
            {venues?.map((venue) => (
              <VenueCard data={venue} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
