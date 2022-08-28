import React from "react"

interface Props {
  lat: number
  lng: number
}

const Marker = ({ lat, lng }: Props) => {
  return (
    <svg className="w-[30px] h-auto" xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 384 512" data-cordinates={`${lat}, ${lng}`}>{/* <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}<path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg>
  )
};

export default Marker