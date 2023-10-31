import react from 'react'
import Card from '../components/card'
import { Link } from 'react-router-dom'

const Product = () => {
    const [prodData, setProdData] = react.useState([])
    react.useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(jsonData=>setProdData(jsonData))
    },[])
    const prodElement = prodData.map((product) => {
        return (
            <Card 
            key={product.id}
            id={product.id }
            title={product.title}
            description={product.description}
            category={product.category}
            image={product.image}
            price={product.price}
            rating = {product.rating}
            />
        )
    })
    return (
        <>
            <div className='prod-nav' >
                <Link to='/' >Home</Link>
                <h2>/ Products</h2>
            </div>
            <div className='prod-list' >{prodElement}</div>
        </>
        
    )
}

export default Product