import React from 'react';
import './left.css';

export default function Sidebar (){
    return(
        <div className='sidebar'>
            <Nav/>
        </div>
    )
}
export function Nav(){
    return(
        
            <ul className='nav--bar'>
                <li className='active'>Home</li>
                <li>Services</li>
                <li>News</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
       
    )
}