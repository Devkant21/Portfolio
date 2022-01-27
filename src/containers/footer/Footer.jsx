import React from 'react';
import './footer.css';
import twitter from '../../assets/twitter.svg';

import {FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";
const footer = () => {
  return (
        <div className="dev__footer section__padding">
            <div className="dev__footer-heading">
                <h1 className="gradient__text">Connect with me</h1>
            </div>
            <div className="dev__footer-links">
                <div className="dev__footer-links_logo">
                    <ul>
                        <li>
                            <a href="https://twitter.com/devkant21">
                                <FaGithub/> 
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/devkant21">
                                <FaEnvelope />  
                            </a>
                            
                        </li>
                        <li>
                            <a href="https://twitter.com/devkant21">
                                <FaTwitter />  
                            </a>
                            
                        </li>
                    </ul>
                    {/* <img src={ twitter } href="https://twitter.com/devkant21" alt="logo"/> */}
                </div>
            </div>
            <div className="dev__lastline">
                <p>Devkant Swargiary. All Rights Reserved.</p>
            </div>
        </div>
  );
};

export default footer;
