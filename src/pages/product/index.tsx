import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import { useApi } from "../../hooks"
import { ListTypes } from "../../interfaces"
import { getPriceText } from "../../utils"

//Components
import Layout from "../../components/Layout"
import Banner from "../../components/Banner"
import BuyCard from "../../components/Card/Buy"
import ProductInformation from "../../components/ProductInformation"
import Map from "../../components/Map"
import Marker from "../../components/Map/Marker"

const Product = () => {
  const { productId } = useParams();
  const [productInfo, setProductInfo] = useState<ListTypes>()

  const getProductInfo = () => {
    useApi().fetchList({
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

  const mapLocation = () => ({
    lat: productInfo?.latitude || 0,
    lng: productInfo?.longitude || 0
  })

  const renderMap = (status) => {
    switch (status) {
      case Status.LOADING:
        return 'Loading';
      case Status.FAILURE:
        return 'Map Error';
      case Status.SUCCESS:
        return (
          <Map 
            center={mapLocation()}
            zoom={10}
          >
            <Marker 
              position={mapLocation()} 
              title='Title'
            />
          </Map>
        )
    }
  }

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

        <Wrapper 
          apiKey="AIzaSyAroVYQsjCocZryzS13ra5yndO77lAABh0" 
          render={renderMap} 
        />

      </main>
    </Layout>
  )
}

export default Product