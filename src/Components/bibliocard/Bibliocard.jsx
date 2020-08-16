import React from 'react'
import logo from "../../assets/logo.png"
import "./biblioCard.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BiblioLink from "../../containers/Biblio/BiblioLinks"
const Bibliocard = (props) => {
    return (
        <div className="search-card-biblio">
            <BiblioLink/>
            
            <h2>{props.unite}</h2>
            <h1>Mediathèque</h1>
            <img src={logo} alt=""/>
            <br/>
            <a href="/search">
                <button className='btn btn-primary input'>Chercher ....</button>
            </a>
           { props.number && <h2>{props.number} Ouvrages</h2>}
        </div>
    )
}

export default Bibliocard
