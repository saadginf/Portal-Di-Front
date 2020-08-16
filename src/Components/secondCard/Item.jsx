import React from 'react'
import './item.css'
 const Item = props => {
    return (
        <div className="item-scard"> 
            <img src={props.uri} alt=""></img>
            <div>{props.txt}</div>
        </div>
    )
}

export default Item
