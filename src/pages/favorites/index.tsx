import React from "react"
import PageTemplate from "../../components/PageTemplate"
import { Link } from "react-router-dom"
import useFavoritePage from "./hook"

const Favorites = () => {
  const { favoriteListCards } = useFavoritePage()
  
  const listFallBack = () => {
    return (
      <>
        <h5 className="text-gray-900 text-xl font-medium mb-4">You don't have any favorites</h5>
        <p>Go to <Link to="/" className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4">home page</Link>, select an adventure, click in the 'Add to favorites' then go back here</p>
      </>
    )  
  }

  return (
    <PageTemplate 
      title="Your favorites"
      list={favoriteListCards()}
      listFallBack={listFallBack()}
    />
  )
}

export default Favorites