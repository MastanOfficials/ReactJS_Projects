import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Styles.css"

const Axios = () => {
    
    const [products,setProducts] = useState();
    const [loading,setLoading] = useState(true);
    const fetchData = async() => {
        const response = await axios.get('https://fakestoreapi.com/products');
        const data =  await response.data;
        setProducts(data)
        setLoading(false)
    }

    useEffect(()=>{fetchData()},[])
  return (
<div className="container">
    {loading?<h1>Loading...</h1>:null}
  {products && products.map((product) => (
    <div className="product" key={product.id}>
      <h2>{product.title.split(' ').slice(0,2).join(' ')}</h2>
      <img src={product.image} alt={product.title}/>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
    </div>
  ))}
</div>
  )
}

export default Axios