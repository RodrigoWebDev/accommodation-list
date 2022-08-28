import { useState } from "react"
import { useDesktop } from "../../hooks"

const useNavbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const isDesktop = useDesktop()

  const canShowMobileMenu = () => isDesktop || (!isDesktop && showMobileMenu)

  return {
    canShowMobileMenu,
    setShowMobileMenu
  }
}

export default useNavbar