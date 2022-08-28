import React, { Fragment, ReactNode, useEffect, useState } from 'react'
import Select from 'react-select'

//Components
import Layout from "../../components/Layout"
import ProductCard from "../../components/Card/Product"
import Banner from "../../components/Banner"
import Message from "../../components/Message"

//Utils
import { getPriceText } from "../../utils"

//interfaces
import { ListTypes } from "../../interfaces"

interface Props {
  list: ListTypes[]
  title: string
  listFallBack?: ReactNode
}

const orderOptions = [
  { value: 'all', label: 'All' },
  { value: 'hotel', label: 'Hotel' },
  { value: 'transport', label: 'Transport' },
  { value: 'attraction', label: 'Attraction' }
]

interface HandleOrderChangeParams {
  value: string
  label: string
}

type Type = 'hotel' | 'transport' | 'attraction' | 'all'

const PageTemplate = ({ list, title, listFallBack }: Props) => {
  const [newList, setNewList] = useState<ListTypes[] | []>([])

  const orderList = (type: Type) => {
    console.log({type})
    console.log({list})
    if(type === 'all'){
      setNewList(list)
    }else{
      const filteredList = list.filter(item => item.type === type)
      setNewList(filteredList)
    }
  }

  const handleOrderChange = ({ value }:HandleOrderChangeParams) => {
    orderList(value as Type)
  }

  useEffect(() => {
    orderList('all')
  }, [list])

  return (
    <Layout>
      <Banner
        title={title}
        image='https://storage.googleapis.com/images-lugares/master/aeecb1e1dd20ea59a334c5741c36ff368d5e0157-0b31fafbdc8a67d157710385144a5be7'
      />
      <main className="px-4">
        <div className="flex justify-center items-center mb-4">
          <strong className="text-gray-700 mr-2">Order by: </strong>
          <Select 
            onChange={(e: any) => handleOrderChange(e)} 
            className="max-w-[300px] w-[300px]" 
            options={orderOptions} />
        </div>
        <div className="sm:flex sm:flex-wrap justify-center">
          {list.length ? 
            <>
              {newList.length ?
                newList?.map(({ name, image, address, about, price, type, _id }) => 
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
                ):
                (
                  <Message 
                    title="No favorites with this order option"
                    description="Try selecting another sorting option"
                  />
                )
              }
            </> :
            <>{listFallBack}</>
          }
          
        </div>
      </main>
    </Layout>
  )
}

export default PageTemplate