import Navbar from "@/components/Navbar"
import React from "react"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default layout
