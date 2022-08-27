import React from "react"
import { Link } from "react-router-dom";

//Assets
//@ts-ignore
import locationDot from "../../assets/location-dot.svg"
//@ts-ignore
import info from "../../assets/info.svg"

interface CardProps {
  image: string
  name: string
  address: string
  about: string
  price: string,
  type: string,
  id: number
}

const Card = ({ image, name, address, about, price, type, id }: CardProps) => {
  const renderPrice = () => {
    if(type === 'hotel'){
      return <>${price}/Night</>
    }
    
    return <>${price}</>
    
  }
  
  return (
    <div className="mb-6 sm:w-[49%] lg:w-[32%]">
      <div className="rounded-lg shadow-lg bg-white">
        <img className="rounded-t-lg" src={image} alt={about}/>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-4">{name}</h5>
          <p className="text-gray-700 text-base mb-2 text-ellipsis overflow-hidden whitespace-nowrap">{about}</p>
          <p className="text-gray-700 text-base mb-2 flex items-center">
            <img className="w-[12px] mr-1 opacity-70" src={locationDot} alt="location dot icon"/>
            <address className="text-ellipsis overflow-hidden whitespace-nowrap">{address}</address>
          </p>
          <strong className="text-gray-700 text-base mb-4 block">{renderPrice()}</strong>
          <Link 
            className=" px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out inline-flex items-center"
            to={`/product/${id}`}
          >
            <img 
              className="w-[14px] mr-1"
              src={info} 
              alt="info icon" 
            />
            <span>More info</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card