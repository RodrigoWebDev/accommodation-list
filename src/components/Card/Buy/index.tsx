import React from "react"
import Card from "../"
import Button from "../../Button"

//Assets
//@ts-ignore
import heart from "../../../assets/heart.svg"


interface Props {
  price: string
  priceBeforeTaxes?: number
  buyText?: string
  favoriteButtonClick: () => void
  favoriteButtonText: string
}

const BuyCard = ({ price, priceBeforeTaxes, buyText = 'Buy', favoriteButtonClick, favoriteButtonText }:Props) => {
  return (
    <Card>
      <div className="p-6">
        <span className="block text-xs">Price with tax</span>
        <strong className="block text-lg mb-2">${price}</strong>
        <Button
          customClass="block w-full mb-2"
        >
          {buyText}
        </Button>

        <Button
          customClass="block w-full mb-4 active:bg-red-800 focus:bg-red-700 hover:bg-red-700 bg-red-600 flex items-center justify-center"
          onClick={favoriteButtonClick}
        >
          <img className="mr-1 w-[16px]" src={heart} alt="Heart icon"/>
          <span>{favoriteButtonText}</span>
        </Button>

        <span className="text-sm">
          Total before taxes: 
          <strong className="ml-1">${priceBeforeTaxes}</strong>
        </span>
      </div>
    </Card>
  )
}

export default BuyCard