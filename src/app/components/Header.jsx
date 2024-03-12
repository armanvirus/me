import React from 'react'
import styles from "../page.module.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Header = () => {
    return (
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
            <div className={styles.flexAround}>
            <a href=""><LinkedInIcon/></a>
            <a href=""><XIcon/></a>
            <a href=""><GitHubIcon/></a>
            </div>
        </div>
    )
}
