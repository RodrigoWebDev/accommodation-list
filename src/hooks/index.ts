import { useState, useEffect } from "react"
import { ListTypes } from "../interfaces"

interface FetchListParams {
  successCallback: (response: ListTypes[]) => void
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
  const fetchList = ({ successCallback }: FetchListParams) => {
    const endpoint = 'https://us-central1-rapid-api-321400.cloudfunctions.net/instaviagem-challenge'
    fetch(endpoint)
      .then(response => response.json())
      .then(response => {
        successCallback(response)
      })
      .catch(err => console.error({err}))
  }

  return {
    fetchList
  }
}