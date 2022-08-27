import React from "react"

interface CardProps {
  image: string
  name: string
  address: string
  about: string
  price: string,
  type: string
}

const Card = ({ image, name, address, about, price, type }: CardProps) => {
  const renderPrice = () => {
    if(type === 'hotel'){
      return <>${price}/Night</>
    }
    
    return <>${price}</>
    
  }
  
  return (
    <div className="mb-6 sm:w-[49%] md:w-[32%]">
      <div className="rounded-lg shadow-lg bg-white">
        <div className="overflow-hidden h-[200px] md:h-[300px]">
          <img className="rounded-t-lg" src={image} alt={about}/>
        </div>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
          <p className="text-gray-700 text-base mb-4 text-ellipsis overflow-hidden whitespace-nowrap">{about}</p>
          <p className="text-gray-700 text-base mb-4">{address}</p>
          <strong className="text-gray-700 text-base mb-4 block">{renderPrice()}</strong>
          <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">More info</button>
        </div>
      </div>
    </div>
  )
}

export default Card