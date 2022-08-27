import React, { useEffect, useRef, memo, ReactNode } from 'react'

interface Coordinates {
  lat: number,
  lng: number
}

interface Props {
  coordinates: Coordinates
  center: google.maps.LatLngLiteral
  zoom: number
  children: ReactNode
}

const Map = ({ 
  center,
  zoom,
  children
}: Props) => {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return (
    <div 
      ref={ref} 
      id="map" 
      className="w-full h-[500px]"
    >
      {children}
    </div>
  );
}

export default memo(Map)