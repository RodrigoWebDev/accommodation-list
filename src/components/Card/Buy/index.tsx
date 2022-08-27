import React from "react"
import Card from "../"
import Button from "../../Button"

interface Props {
  price: string
  priceBeforeTaxes: number
  buyText?: string
}

const BuyCard = ({ price, priceBeforeTaxes, buyText = 'Buy' }:Props) => {
  return (
    <Card>
      <div className="p-6">
        <span className="block text-xs">Price with tax</span>
        <strong className="block text-lg mb-2">${price}</strong>
        <Button
          customClass="block w-full mb-4"
        >
          {buyText}
        </Button>

        <span className="text-sm">Total before Taxes: ${priceBeforeTaxes}</span>
      </div>
    </Card>
  )
}

export default BuyCard