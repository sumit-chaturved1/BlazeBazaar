import { Link, NavLink } from "react-router-dom";
export default function Header(){
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return(
        <header>
            <Link to='/' className="site-logo">LOgo</Link>
            <nav>
                <NavLink 
                to='/'
                style={({isActive}) => isActive ? activeStyles : null} 
                >Home
                </NavLink>

                <NavLink 
                to='/products' 
                style={({isActive})=> isActive? activeStyles: null}
                >Products
                </NavLink>

                <NavLink 
                to='/cart'
                style={({isActive})=>isActive?activeStyles:null}
                >Cart
                </NavLink>

            </nav>
        </header>
    )
}