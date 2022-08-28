import React from "react"
import PageTemplate from "../../components/PageTemplate"
import { usePageTemplate, useFavorite } from "../../hooks"
import { Link } from "react-router-dom"

const Favorites = () => {
  const { list } = usePageTemplate()
  const { favorites } = useFavorite()

  const favoriteListCards = () => {
    return list.filter(listItem => {
      return favorites.some(item => listItem._id === item)
    })
  }

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