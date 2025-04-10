import React from 'react'

const Product = ({image,description,title,price,onClick}) => {
  return (
    <div style={{display:
      "flex",flexDirection:"column",boxShadow: "10px 10px 10px rgb(98, 96, 96)",borderRadius:"10px",padding:"20px",width:'250px'
    }} onClick={onClick}>
      <div style={{objectFit:"cover",objectPosition:'center',}}><img style={{width:'200px',height:'200px'}}src={image} alt={title} /></div>
      <div >
        <h2>{title.slice(0,15)+"..."}</h2>
        <p>{description.slice(0,50)+"..."}</p>
        <h2>{price}</h2>
      </div>
    </div>
  )
}

export default Product
