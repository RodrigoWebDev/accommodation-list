import React, { useContext, ReactNode } from "react"
import Navbar from "../Navbar"
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
      {isFetching && <Loader />}
    </>
  )
}

export default Layout