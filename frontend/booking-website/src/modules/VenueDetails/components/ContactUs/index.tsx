import { Globe, Mail, Phone } from "lucide-react"


type Props = {}

export default function ContactUs({}: Props) {
  return (
    <>
      <div>
        <h2 className="text-2xl font-medium">Contact Us</h2>
        <ul className="mt-2">
          <li className="flex items-center gap-2 text-sm leading-loose">
            <Phone className="size-4 text-primary" />
            <span>+91 98765 43210</span>
          </li>
          <li className="flex items-center gap-2 text-sm leading-loose">
            <Mail className="size-4 text-primary" />
            <span>bookings@grandharmony.com</span>
          </li>
          <li className="flex items-center gap-2 text-sm leading-loose">
            <Globe className="size-4 text-primary" />
            <span>www.grandharmony.com</span>
          </li>
        </ul>
      </div>
    </>
  )
}
