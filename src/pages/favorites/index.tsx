import React from "react"
import PageTemplate from "../../components/PageTemplate"
import { usePageTemplate, useFavorite } from "../../hooks"

const Favorites = () => {
  const { list } = usePageTemplate()
  const { favorites } = useFavorite()

  const favoriteListCards = () => {
    return list.filter(listItem => {
      return favorites.some(item => listItem._id === item)
    })
  }

  return (
    <PageTemplate 
      title="Your favorites"
      list={favoriteListCards()} 
    />
  )
}

export default Favorites