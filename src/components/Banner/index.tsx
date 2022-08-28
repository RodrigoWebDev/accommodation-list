import React from "react"

interface BannerProps {
  title: string
  image: string
}

const Banner = ({ title, image }: BannerProps) => {
  return (
    <div className="max-h-[400px] overflow-hidden mb-8 relative">
      <div className="absolute bg-[#000000c9] top-0 left-0 h-full w-full"></div>
      <h1
        className="font-medium leading-tight text-2xl sm:text-5xl mb-5 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center"
      >
        {title}
      </h1>
      <img 
        className="w-full"
        src={image} 
        alt={title} 
      />
    </div>
  )
}

export default Banner