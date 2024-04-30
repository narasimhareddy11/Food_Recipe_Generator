import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './index.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-icons">
                    <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
                    <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /></a>
                    <a href="mailto:youremail@example.com" title="Email"><FaEnvelope /></a>
                </div>
                <div className="footer-info">
                    <p>Contact me:</p>
                    <p><FaEnvelope /> youremail@example.com</p>
                </div>
                <div className="footer-extra-info">
                    <p>Follow me for updates:</p>
                    <p>Find more projects on GitHub and LinkedIn</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
