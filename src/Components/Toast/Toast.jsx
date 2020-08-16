import React, { useState, useEffect } from 'react';

import './toast.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
const Toast = props => {
    const { toastList, position } = props;
    const [list, setList] = useState(toastList);

    useEffect(() => {
        setList(toastList);
    }, [toastList, list]);

    return (
        <>
            <div className={`notification-container ${position}`}>
                {
                    list.map((toast) =>     
                        <div 
                            key={toast.id}
                            className={`notification toast ${position}`}
                        >
                           
                            <div className="notification-image">
                            <FontAwesomeIcon icon={faInfoCircle} size="lg" />
                            </div>
                            <div>
                                <p className="notification-title">Dans deux Jours</p>
                                <p className="notification-message">
                                    {toast.title}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}
export default Toast