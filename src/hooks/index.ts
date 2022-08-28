import { useState, useEffect, useContext } from "react"
import { ListTypes } from "../interfaces"
import { toast } from 'react-toastify';
import { PageContext } from "../context/pageContext"

interface FetchListParams {
  successCallback: (response: ListTypes[]) => void
  errorCallback: () => void
  finnalyCallBack: () => void
}

interface HandleOrderChangeParams {
  value: string
  label: string
}

interface UsePageTemplateReturn {
  list: ListTypes[] | []
}

interface UseFavoriteReturn {
  addFavorite: () => void
  isFavorite?: boolean
  removeFavorite: () => void
  favorites: (string | undefined)[] | []
}

type Type = 'hotel' | 'transport' | 'attraction' | 'all'

export const usePageTemplate = (): UsePageTemplateReturn => {
  const [list, setList] = useState<ListTypes[] | []>([])
  const { fetchList } = useApi()
  const { setIsFetching } = useContext(PageContext)

  useEffect(() => {
    setIsFetching(true)
    fetchList({
      successCallback: (response) => {
        setList(response)
      },
      errorCallback: () => {
        toast("There was an error querying the product list")
      },
      finnalyCallBack: () => {
        setIsFetching(false)
      }
    })
  }, [])


  return {
    list
  }
}

export const useDesktop = () => {
  const [windowSize, setWindowSize] = useState<number>()

  useEffect(() => {
    setWindowSize(window.innerWidth)
    
    window.addEventListener('resize', () => {
      const size = window.innerWidth
      setWindowSize(size)
    });
  }, [])
  
  return windowSize && windowSize > 768
}

export const useApi = () => {
  const fetchList = ({ successCallback, errorCallback, finnalyCallBack }: FetchListParams) => {
    const endpoint = 'https://us-central1-rapid-api-321400.cloudfunctions.net/instaviagem-challenge'
    fetch(endpoint)
      .then(response => response.json())
      .then(response => {
        successCallback(response)
      })
      .catch(() => {
        errorCallback()
      })
      .finally(() => {
        finnalyCallBack()
      })
  }

  return {
    fetchList
  }
}

export const useFavorite = (productId?: string): UseFavoriteReturn => {
  const [favorites, setFavorites] = useState<(string | undefined)[] | []>([])
  const [isFavorite, setIsFavorite] = useState<boolean>()

  const getFavorites = () => {
    const localStorageFavorites = window.localStorage.getItem("favorites")

    if(localStorageFavorites) setFavorites(JSON.parse(localStorageFavorites))
    
  }
  
  const isAlredyFavorite = () => {
    const check = favorites?.some(item => item === productId)
    console.log({ check })
    setIsFavorite(check)
  }

  const addFavorite = () => {
    if(!isFavorite){
      const newFavorites = [...favorites, productId]
        window.localStorage.setItem("favorites", JSON.stringify(newFavorites))
        setFavorites(newFavorites)
    }
  }

  const removeFavorite = () => {
    if(isFavorite){
      const newFavorites = favorites.filter(item => item !== productId)
      window.localStorage.setItem("favorites", JSON.stringify(newFavorites))
      setFavorites(newFavorites)
    }
  }

  useEffect(() => {
    getFavorites()
  }, [])

  useEffect(() => {
    isAlredyFavorite()
  }, [favorites])

  return {
    addFavorite,
    isFavorite,
    removeFavorite,
    favorites
  }
}