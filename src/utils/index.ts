interface GetPriceTextParams {
  price: number
  type: string
}

export const formatCurrency = (number: number) => {
  let dollarUSLocale = Intl.NumberFormat('en-US');
  return dollarUSLocale.format(number)
}

export const getPriceText = ({ price, type}: GetPriceTextParams) => {
  const formatedPrice = formatCurrency(price)
    if(type === 'hotel'){
      return `${formatedPrice}/Night`
    }
    
    return formatedPrice
}