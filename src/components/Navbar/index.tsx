import React, { useState } from "react"
import { Link } from "react-router-dom";

//Hooks
import { useDesktop } from "../../hooks"

//Assets
//@ts-ignore
import logo from "../../assets/logo.png"
//@ts-ignore
import bars from "../../assets/bars.svg"
//@ts-ignore
import xMark from "../../assets/circle-x-mark.svg"

const navItems = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'Favorites',
    url: '/favorites'
  },
  {
    name: 'About',
    url: '/about'
  },
]

const iconSize = 'w-[32px] h-auto'

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const isDesktop = useDesktop()

  const canShowMobileMenu = () => isDesktop || (!isDesktop && showMobileMenu)
  
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <div 
          className="collapse navbar-collapse flex flex-grow items-center justify-between" 
        >
          <Link 
            className="flex items-center text-gray-900hover:text-gray-900 focus:text-gray-900" 
            to="/"
          >
            <img 
              src={logo} alt=""
              loading="lazy"
              className={iconSize}
            />
          </Link>
          {canShowMobileMenu() &&
            <ul className="navbar-nav flex flex-col md:flex-row pl-0 list-style-none fixed md:static w-full md:w-auto h-screen md:h-auto top-0 md:top-auto left-0 md:left-auto z-10 md:z-auto bg-gray-100 md:bg-transparent items-center md:items-stretch text-lg md:text-base p-4 md:p-0">
              <div className="self-end md:hidden">
                <img 
                  className={`${iconSize} opacity-60 cursor-pointer`} 
                  src={xMark} 
                  onClick={() => setShowMobileMenu(false)}
                />
              </div>
              {navItems.map(({ name, url }) =>
                <li key={name} className="nav-item md:p-2">
                  <Link 
                    to={url}
                    className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-4 block md:inline md:p-0" 
                  >
                    {name}
                  </Link>
                </li>
              )}
            </ul>
          }
        </div>
        <button 
          className="navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline md:hidden opacity-60" 
          type="button" 
          aria-label="Toggle navigation"
          onClick={() => setShowMobileMenu(true)}
        >
          <img 
            className={iconSize}
            src={bars} 
            alt='bars' 
          />
        </button>
      </div>
    </nav>
  )
}

export default NavBar