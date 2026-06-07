import { Avatar } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

type Props = {}

export default function Profile({}: Props) {
  return (
    <>
      <Card>
        <CardHeader>
          <Avatar></Avatar>
          <CardTitle>Unni Krishnan</CardTitle>
        </CardHeader>
      </Card>
    </>
  )
}
