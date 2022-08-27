import React from "react"

interface Props {
  title: string
  value: string
  icon: any
}

const ContactItem = ({title, value, icon}: Props) => {
  return (
    <li className="flex">
      <img className="w-[14px] mr-1" src={icon} alt="" />
      <strong className="mr-1">{title}:</strong> 
      {value}
    </li>
  )
}

export default ContactItem