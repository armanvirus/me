import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import styles from "../page.module.css";

import Social from "./Social"

export const Header = () => {
    return (
        <>
        <div className={styles.header}>
            <div className="logo">
                <span>Arman</span> <span>Grema</span>
            </div>
            <div className="nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">Contacts</a></li>
                </ul>
            </div>
            <Social/>
        </div>
        <div className="mobile-header">
        <div className="logo">
                <span>Arman</span> <span>Grema</span>
            </div>
            <div className="menu">
            <FontAwesomeIcon icon={faCircleNotch}/>
            </div>
        </div>
        </>
    )
}
