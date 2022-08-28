import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';

import { useApi, useFavorite } from "../../hooks"
import { ListTypes } from "../../interfaces"
import { getPriceText } from "../../utils"
import { PageContext } from "../../context/pageContext"


const useProduct = () => {
  const { productId } = useParams();
  const { fetchList } = useApi();
  const { addFavorite, isFavorite, removeFavorite } = useFavorite(productId);
  const [productInfo, setProductInfo] = useState()
  const { setIsFetching } = useContext(PageContext)

  const getProductInfo = () => {
    setIsFetching(true)
    fetchList({
      successCallback: (response) => {
        const responseItem = response.filter(item => item._id === productId)[0]
        setProductInfo(responseItem)
      },
      errorCallback: () => {
        toast("There was an error querying the product information")
      },
      finnalyCallBack: () => {
        setIsFetching(false)
      }
    })
  }

  const price = () => 
    getPriceText({
      price: productInfo?.price || 0,
      type: productInfo?.type || ''
    })

  const priceBeforeTaxes = () => {
    if(!productInfo) return
    return productInfo?.price - 50
  }

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