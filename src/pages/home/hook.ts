import { useEffect, useState } from 'react'

interface ListTypes {
  about: string
  address: string
  email: string
  image: string
  isActive: boolean
  latitude: number
  longitude: number
  name: string
  phone: string
  price: number
  type: string
  _id: string
}

const useHome = () => {
  const [list, setList] = useState<ListTypes[] | []>([])

  const fetchList = () => {
    const endpoint = 'https://us-central1-rapid-api-321400.cloudfunctions.net/instaviagem-challenge'
    fetch(endpoint)
      .then(response => response.json())
      .then(response => {
        console.log({ response })
        setList(response)
      })
      .catch(err => console.error({err}))
  }

  useEffect(() => {
    fetchList()
  }, [])

  return {
    list
  }
}

export default useHome