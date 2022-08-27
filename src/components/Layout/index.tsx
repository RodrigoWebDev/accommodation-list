import React from "react"
import Navbar from "../Navbar"

interface Props {
  children: any
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className="px-4">
        {children}
      </main>
    </>
  )
}

export default Layout