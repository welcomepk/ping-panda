"use client"

import React from "react"
import { usePathname } from "next/navigation"
import Navbar from "./Navbar"

const RenderNavbar = () => {
  const pathname = usePathname()
  return <>{pathname === "/" && <Navbar />}</>
}

export default RenderNavbar
