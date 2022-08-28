import React, { ReactNode } from "react"

interface CardProps {
  children?: ReactNode;
  customClass?: string
}

const Card = ({ children, customClass }: CardProps) => {
  return (
    <div className={`mb-6 ${customClass}`}>
      <div className="rounded-lg shadow-lg bg-white">
        {children}
      </div>
    </div>
  )
}

export default Card