
import Image from "next/image"
import Link from "next/link"

import { NAV_LINKS } from "@/constant"
import { Button } from "../Button/Button"

const Navbar = () => {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div>
        <span>Helo</span>
      </div>
    </header>
  )
}

export default Navbar