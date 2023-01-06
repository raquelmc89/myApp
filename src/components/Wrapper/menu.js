import React from 'react';
import { Link } from 'react-router-dom';


function Menu(){
return (

<nav>
    <ul>
    <li><Link to ="/home">About me</Link></li>
    <li><Link to ="/education">Education</Link></li>
    <li><Link to ="/reviews">Reviews</Link></li>
    <li><Link to ="/contact.me">Contact</Link></li>
    </ul>
   </nav>
  
 )
}

export default Menu