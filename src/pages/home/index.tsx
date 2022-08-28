import React from 'react'
import { usePageTemplate } from "../../hooks"

//Components
import PageTemplate from '../../components/PageTemplate'

const Home = () => {
  const { list } = usePageTemplate()
  return (
    <PageTemplate 
      title='Welcome! Choose your next adventure'
      list={list} 
    />
  )
}

export default Home