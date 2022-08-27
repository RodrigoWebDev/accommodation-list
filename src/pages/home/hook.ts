import { useEffect, useState } from 'react'
import { useApi } from "../../hooks"
import { ListTypes } from "../../interfaces"

const useHome = () => {
  const [list, setList] = useState<ListTypes[] | []>([])
  const { fetchList } = useApi()

  useEffect(() => {
    fetchList({
      successCallback: (response) => {
        setList(response)
      } 
    })
  }, [])

  return {
    list
  }
}

export default useHome