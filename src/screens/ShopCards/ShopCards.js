import React from 'react'
import ShopCard from '../../components/ShopCard/ShopCard'
import style from './ShopCards.module.css'

// const item = {
//   brand: 'Tiger of Sweden',
//   title: 'Leonard coat',
//   description: 'Minimalistic coat in cotton-blend',
//   descriptionFull: "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
//   price: 399,
//   currency: '£',
//   stars: 3
// }


const items = [
  {
    id: 1,
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: "Men's minimalistic overcoat...",
    price: 399,
    currency: '£',
    stars: 4,
    imgCard: 'https://paris64.com/cdn/shop/files/abrigo-leonard-camel-01_1080x.png?v=1754889612'
  },
  {
    id: 2,
    brand: 'Marni',
    title: 'Fur coat',
    description: 'Coat with fur',
    descriptionFull: "Women's fur coat...",
    price: 1200,
    currency: '£',
    stars: 5,
    imgCard: 'https://www.spirithoods.com/cdn/shop/products/SpiritHoodsFauxFurAnimalInspiredVAMPWolfFakeFurCollectorEditionMensJacket_1200x.jpg?v=1634506316'

  },
  {
    id: 3,
    brand: 'Balenciaga',
    title: 'Hat',
    description: 'Black hat',
    descriptionFull: "Unisex black hat...",
    price: 150,
    currency: '£',
    stars: 3,
    imgCard:'https://m.media-amazon.com/images/I/71mKPDquJqL._AC_SX385_.jpg'
  }
]

function ShopCards() {
  return (
    <div>
      <h2 className='nameScreen'>Выберите товар</h2>
      <div className={style.container}>
        {items.map( (item, i) => <ShopCard key={item.id} {...item} />)
        }
      </div>
    </div>
  )
}

export default ShopCards