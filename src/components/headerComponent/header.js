import React, { Component } from 'react';
import './header.css'


class Header extends Component {
     navSlide() {
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        hamburger.addEventListener('click', () => {
           nav.classList.toggle('nav-active');

           navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } 
            else {
                link.style.animation = `navLinkFade 0.3s ease forwards ${index / 4 + 1}s`;
            }
          }) 
             hamburger.classList.toggle('toggle');          
        })
        
    }
 render() {
    return (
      <header>        
        <nav > 
            <a className="title">
            Dunder Mifflin
        </a>
            <ul onClick = {this.navSlide} className="nav-links">                
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li> 
                <li><a href="#">Careers</a></li>
                <li><a href="#">Products</a></li> 
                <li><a href="#">Guides</a></li> 
                <li><a href="#">Resources</a></li>                
            </ul>
            <div onClick = {this.navSlide} className="hamburger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    </header>
    )
  }
}

export default Header;