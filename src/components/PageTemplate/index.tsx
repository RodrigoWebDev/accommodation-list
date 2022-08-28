import React, { Fragment } from 'react'

//Components
import Layout from "../../components/Layout"
import ProductCard from "../../components/Card/Product"
import Banner from "../../components/Banner"

//Utils
import { getPriceText } from "../../utils"

const PageTemplate = ({ list, title }) => {
  return (
    <Layout>
      <Banner
        title={title}
        image='https://storage.googleapis.com/images-lugares/master/aeecb1e1dd20ea59a334c5741c36ff368d5e0157-0b31fafbdc8a67d157710385144a5be7'
      />
      <main className="px-4">
        <div className="sm:flex sm:flex-wrap justify-center">
          {list?.map(({ name, image, address, about, price, type, _id }) => 
            <Fragment key={_id}>
              <ProductCard
                customClass="sm:w-[49%] lg:w-[32%] sm:p-[1%]" 
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

export default PageTemplate