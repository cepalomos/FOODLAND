import React from 'react'
import azucar from "../../Imgs/azucar.jpg"
import  "./DetailCard.css"
import { useParams, NavLink } from "react-router-dom"
import { products } from "../../Components/products"



const DetailCard = () => {
  const { id } = useParams();
  const decodedName = decodeURI(id);
  const product = products.find((product) => product.name === decodedName);


  return (
    <div>
      <div className="breadcrumb">
                <NavLink to="/">
                  CATEGORIES   /
                  </NavLink>

                 <NavLink active to="/">
                  CATEGORY NAME  / 
                 </NavLink>    
                 <NavLink className="active" to={`/detail/${id}`}>
                  PRODUCT NAME 
                 </NavLink>    
      </div>
    
    <div className='DetailCard'>
      <div className='detail-img'>
        <img src={product.image} alt="azucar ledesma" />
      </div>
      <div className='detail-info'>
        <h4>{product.brand}</h4>
        <h1>{product.name}</h1>
        <h4>({product.price} x 1K )</h4>
        <h2>${product.price}</h2>
        <div className="contador">
                <button>-</button>
                1
                <button>+</button>
            </div>
        <button className='addButton'>ADD TO CART</button>
        <button className='returnButton'>Cambios y devoluciones →</button>
      </div>

    </div>
  </div>
  )
}

export default DetailCard
