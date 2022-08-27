import React from "react"

interface ButtonProps {
  type?: "button" | "submit" | "reset"
  children?: any
  customClass?: string
}

const className = 'inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'

const Button = ({ type, children, customClass }: ButtonProps) => {
  return <button className={`${className} ${customClass}`} type={type}>{children}</button>
}

export default Button