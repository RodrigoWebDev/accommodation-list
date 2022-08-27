import React from "react"
import Navbar from "../Navbar"

interface Props {
  children?: any
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout