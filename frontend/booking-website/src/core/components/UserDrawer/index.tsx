import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Separator } from "@/components/ui/separator"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Bell, ChevronRightIcon, TicketCheck } from "lucide-react"

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function UserDrawer({ onOpenChange, open }: Props) {
  return (
    <Drawer onOpenChange={onOpenChange} open={open} direction="right">
      <DrawerContent className="rounded-none!">
        <DrawerHeader>
          <DrawerTitle className="text-xl font-bold">Hey!</DrawerTitle>
        </DrawerHeader>
        <Separator />
        <div className="no-scrollbar overflow-y-auto">
          <Item className="cursor-pointer py-4 hover:bg-accent">
            <ItemMedia>
              <Bell className="size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Notifications</ItemTitle>
            </ItemContent>
            <ItemActions>
              <ChevronRightIcon className="size-4" />
            </ItemActions>
          </Item>
          <Item className="cursor-pointer py-4 hover:bg-accent">
            <ItemMedia>
              <TicketCheck className="size-4" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Your Bookings</ItemTitle>
            </ItemContent>
            <ItemActions>
              <ChevronRightIcon className="size-4" />
            </ItemActions>
          </Item>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
