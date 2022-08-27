//Libs
import React from 'react'
import useHome from "./hook"
import Layout from "../../components/Layout"
import Card from "../../components/Card"

const Home = () => {
  const { list } = useHome()
  return (
    <Layout>
      <div className="sm:flex sm:flex-wrap sm:justify-between">
        {list?.map(({ name, image, address, about, price, type, _id }) => 
          <Card 
            key={_id}
            image={image}
            name={name}
            address={address}
            about={about}
            price={price}
            type={type}
            id={_id}
          />
        )}
      </div>
    </Layout>
  )
}

export default Home