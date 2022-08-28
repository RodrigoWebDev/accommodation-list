import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';

import { useApi, useFavorite } from "../../hooks"
import { ListTypes } from "../../interfaces"
import { getPriceText } from "../../utils"

const useProduct = () => {
  const { productId } = useParams();
  const { fetchList } = useApi();
  const { addFavorite, isFavorite, removeFavorite } = useFavorite(productId);
  const [productInfo, setProductInfo] = useState<ListTypes>()

  const getProductInfo = () => {
    fetchList({
      successCallback: (response) => {
        const responseItem = response.filter(item => item._id === productId)[0]
        setProductInfo(responseItem)
      },
      errorCallback: () => {
        toast("There was an error querying the product information")
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
  
  return {
    productInfo,
    price,
    priceBeforeTaxes,
    buyText,
    favoriteButtonClick,
    favoriteButtonText
  }
}

export default useProduct