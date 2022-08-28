import React, { createContext, useState, ReactNode } from "react"

interface PageProviderProps {
  children: ReactNode
}

export const PageContext = createContext({
  isFetching: false,
  setIsFetching: (bool: boolean) => {}
})

export const PageProvider = ({children}: PageProviderProps) => {
  const [isFetching, setIsFetching] = useState(false)

  return (
    <PageContext.Provider value={{
      isFetching,
      setIsFetching
    }}>
      {children}
    </PageContext.Provider>
  )
}