//import react from 'react'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './components/layout'
import ProductDetails from './pages/ProductDetails'
const App = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>} >
                    <Route index element={<Home/>} />
                    <Route path='products' element={<Product/>} />
                    <Route path='products/:id' element={<ProductDetails/>} />
                    <Route path='cart' element={<Cart/>} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default App