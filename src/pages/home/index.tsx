import React, { Fragment } from 'react'
import useHome from "./hook"

//Components
import Layout from "../../components/Layout"
import ProductCard from "../../components/Card/Product"

//Utils
import { getPriceText } from "../../utils"

const Home = () => {
  const { list } = useHome()
  return (
    <Layout>
      <main className="px-4">
        <div className="sm:flex sm:flex-wrap sm:justify-between">
          {list?.map(({ name, image, address, about, price, type, _id }) => 
            <Fragment key={_id}>
              <ProductCard
                customClass="sm:w-[49%] lg:w-[32%]" 
                image={image}
                name={name}
                address={address}
                about={about}
                price={`$${getPriceText({price, type})}`}
                id={_id}
              />
            </Fragment>
          )}
        </div>
      </main>
    </Layout>
  )
}

export default Home