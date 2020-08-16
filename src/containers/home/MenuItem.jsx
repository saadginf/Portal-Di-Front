import React from 'react'

const MenuItem = (props) => {
    return (
        <div className="menu-title" id={props.id}>
            <h3>{props.title}</h3>
        <div className='item-img'>
            <img src={props.urlImage} alt=""/>
        </div>
        </div>
    )
}

export default MenuItem
