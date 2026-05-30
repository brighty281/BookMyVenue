import { Button } from "@/components/ui/button"

type Props = {}

export default function Footer({}: Props) {
  return (
    <>
      <footer className="bg-[#333333] py-4">
        <div className="mx-auto flex items-center justify-between md:max-w-6xl lg:max-w-7xl">
          <p className="text-base font-bold text-white">List your venue </p>
          <Button className="p-6 text-sm" size={"lg"}>
            Conact today!
          </Button>
        </div>
        <div>
          <div></div>
        </div>
      </footer>
    </>
  )
}
