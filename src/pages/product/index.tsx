import React from "react"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

//Components
import Layout from "../../components/Layout"
import Banner from "../../components/Banner"
import BuyCard from "../../components/Card/Buy"
import ProductInformation from "../../components/ProductInformation"
import Map from "../../components/Map"
import useProduct from "./hook";

const Product = () => {
  const {
    productInfo,
    price,
    priceBeforeTaxes,
    buyText,
    favoriteButtonClick,
    favoriteButtonText
  } = useProduct()

  if(!productInfo) <></>

  return (
    <Layout>
      <Banner 
        title={productInfo?.name || ''}
        image={productInfo?.image || ''}
      />

      <main className="p-4 md:w-[80%] md:mx-auto">
        <div className="md:flex md:justify-between">
          <div className="md:w-[65%] md:mr-8">
            <ProductInformation 
              description={productInfo?.about || ''}
              phone={productInfo?.phone || ''}
              email={productInfo?.email || ''}
            />
          </div>

          <aside className="md:w-[35%]">
            <BuyCard
              price={price()}
              priceBeforeTaxes={priceBeforeTaxes()}
              buyText={buyText()}
              favoriteButtonClick={() => { favoriteButtonClick() }}
              favoriteButtonText={favoriteButtonText()}
            />
          </aside>
        </div>

        <hr className="bg-black w-full my-6" />

        <h2 
          className="font-medium leading-tight text-2xl mb-5"
        >
          Where is your destination?
        </h2>

        <address>{productInfo?.address}</address>

        {
          (productInfo?.latitude && productInfo?.longitude) && (
            <Map 
              lat={productInfo?.latitude}
              lng={productInfo?.longitude}
            />
          )
        }

      </main>
      <ToastContainer />
    </Layout>
  )
}

export default Product