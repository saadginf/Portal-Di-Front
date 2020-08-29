import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
const Statistic = (props) => {
    return (
            <div className="col-lg-4 col-sm-6 ">
                <div className={"card-box bg-"+props.color}>
                    <div className="inner">
                        <h3> {props.number}</h3>
                        <h3> {props.unite}</h3>
                    </div>
                    <div className="icon">
                    <FontAwesomeIcon icon={faBook}/>
                    </div>
                   
                </div>
            </div>

    )
}

export default Statistic
