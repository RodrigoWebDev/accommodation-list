import React, { ReactNode} from "react"

interface Props {
  title: ReactNode,
  description: ReactNode
}

const Message = ({ title, description}: Props) => (
  <div className="text-center my-8">
    <h5 className="text-gray-900 text-xl font-medium mb-4 ">{title}</h5>
    <p>{description}</p>
  </div>
)

export default Message