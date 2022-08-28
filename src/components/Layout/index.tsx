import React, { useContext, ReactNode } from "react"
import Navbar from "../Navbar"
import Footer from "../Footer"
import Loader from "../../components/Loader"
import { PageContext } from "../../context/pageContext"

interface Props {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  const { isFetching } = useContext(PageContext)

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      {isFetching && <Loader />}
    </>
  )
}

export default Layout