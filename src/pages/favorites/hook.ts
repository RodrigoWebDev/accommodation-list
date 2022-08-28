import { usePageTemplate, useFavorite } from "../../hooks"

const useFavoritePage = () => {
  const { list } = usePageTemplate()
  const { favorites } = useFavorite()

  const favoriteListCards = () => {
    return list.filter(listItem => {
      return favorites.some(item => listItem._id === item)
    })
  }

  return {
    favoriteListCards
  }
}

export default useFavoritePage