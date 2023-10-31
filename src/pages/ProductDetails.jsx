
import React from "react"
import star from "../assets/star.png"
import { Link, useParams } from "react-router-dom"
const ProductDetails = () => {
    const params = useParams()
    const [productData, setProductData] = React.useState(null)
    React.useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res=>res.json())
            .then(jsonData=>setProductData(jsonData))
    },[params.id])
    console.log(productData)
    return (
        <>
            {
                productData?
                (
                <>
                <div className='prod-nav' >
                    <Link to='/' >Home</Link>
                    <Link to='..' relative="path">/ Products</Link>
                    <h2>/ {productData.category}</h2>
                </div>

                <div className="prodDetail-backButton" >
                    <Link to=".." relative="path"  >
                        Back to products
                    </Link>
                </div>

                <div className="prodDetailCard" >
                    <img src={productData.image} />
                    <div className="prodDetailCardInfo" >
                    <h1>{productData.title}</h1>
                    <div className="rating" >
                        <p>{productData.rating.rate}</p>
                        <img src={star} />
                        <p>{`( ${productData.rating.count} reviews )`}</p>
                    </div>
                    <h2>{` $${productData.price}`}</h2>
                    <p className="description" >{productData.description}</p>
                    <div className="availability">
                        <h3>Availabe : </h3>
                        <p>In Stock</p>
                    </div>
                    <div className="category">
                        <h3>Category : </h3>
                        <p>{productData.category}</p>
                    </div>
                    <hr/>
                    <p style={{marginLeft: "100px",marginTop:"20px"}} >add to cart goes here</p>
                    </div>
                </div>
                </> 
                )
                : <h1>Loading...</h1>
            
            }
        </>
    )
}

export default ProductDetails