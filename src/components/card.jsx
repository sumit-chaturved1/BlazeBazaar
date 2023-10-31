/* eslint-disable react/prop-types */
//import React from 'react'

import { Link } from "react-router-dom"

function Card(props){
    
    return (
    <div className='prodCard'>
        <Link to={`${props.id}`} >
            <img src={props.image} />   
            <div className="prod-info" >
                <h3>{props.title}</h3>
                <p> Price - ${props.price}</p>
            </div>
        </Link>
    </div>
    )
}

export default Card