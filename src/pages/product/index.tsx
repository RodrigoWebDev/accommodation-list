import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import { useApi, useFavorite } from "../../hooks"
import { ListTypes } from "../../interfaces"
import { getPriceText } from "../../utils"

//Components
import Layout from "../../components/Layout"
import Banner from "../../components/Banner"
import BuyCard from "../../components/Card/Buy"
import ProductInformation from "../../components/ProductInformation"
import Map from "../../components/Map"

const Product = () => {
  const { productId } = useParams();
  const { fetchList } = useApi();
  const { addFavorite, isFavorite, removeFavorite } = useFavorite(productId);
  const [productInfo, setProductInfo] = useState<ListTypes>()

  const getProductInfo = () => {
    fetchList({
      successCallback: (response) => {
        const responseItem = response.filter(item => item._id === productId)[0]
        setProductInfo(responseItem)
      }
    })
  }

  const price = () => 
    getPriceText({
      price: productInfo?.price,
      type: productInfo?.type
    })

  const priceBeforeTaxes = () => parseFloat(productInfo?.price) - 50

  const buyText = () => productInfo?.type === 'hotel' ? 'Book' : undefined

  const favoriteButtonClick = () => {
    console.log({ isFavorite })
    if(isFavorite){
      removeFavorite()
      toast("Favorite removed")
    }else{
      addFavorite()
      toast("Favorite added")
    }
  }

  const favoriteButtonText = () => isFavorite ? "Remove favorite" : 'Add to Favorites'

  useEffect(() => {
    getProductInfo()
  }, [])

  return (
    <Layout>
      <Banner 
        title={productInfo?.name}
        image={productInfo?.image}
      />

      <main className="p-4 md:w-[80%] md:mx-auto">
        <div className="flex justify-between">
          <div className="w-[65%] mr-8">
            <ProductInformation 
              description={productInfo?.about}
              phone={productInfo?.phone}
              email={productInfo?.email}
            />
          </div>

          <aside className="w-[35%]">
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