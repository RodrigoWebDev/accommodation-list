import React from "react"

//Assets
//@ts-ignore
import emailIcon from "../../assets/email.svg"
//@ts-ignore
import phoneIcon from "../../assets/phone.svg"

//Components
import ContactItem from "../ContactItem"

interface Props {
  description: string
  email: string
  phone: string
}

const ProductInformation = ({ description, email, phone }: Props) => {
  return (
    <>
      <p className="mb-4">{description}</p>
      <h2 
        className="font-medium leading-tight text-2xl mb-5"
      >
        Contact info
      </h2>

      <ul>
        <ContactItem 
          icon={emailIcon}
          value={email}
          title='E-mail'
        />

        <ContactItem 
          icon={phoneIcon}
          value={phone}
          title='Phone'
        />
      </ul>
    </>
  )
}

export default ProductInformation