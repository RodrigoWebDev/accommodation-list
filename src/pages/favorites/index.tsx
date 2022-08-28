import React from "react"
import { Link } from "react-router-dom"
import PageTemplate from "../../components/PageTemplate"
import Message from "../../components/Message"

import useFavoritePage from "./hook"

const Favorites = () => {
  const { favoriteListCards } = useFavoritePage()

  return (
    <PageTemplate 
      title="Your favorites"
      list={favoriteListCards()}
      listFallBack={
        <Message 
          title="You don't have any favorites"
          description={
            <>Go to <Link to="/" className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4">home page</Link>, select an adventure, click in the 'Add to favorites' then go back here</>
          }
        />
      }
    />
  )
}

export default Favorites