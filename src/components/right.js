import React from 'react';
import './right.css';
import logoncc from './logoNCC.png';
import htmlicon from './html-icon1.png';
import cssicon from './css-icon1.png';
import urlicon from './url-icon1.png';

export default function Right (){
    return(
        <div className='right'>
            <Logo/>
            <Greydiv/>
            <Content/>
            <Footer/>
        </div>
    )
}

export function Logo(){
    return(
        <div className='logo--container'>
            <div className='logo--contain' style={{
            backgroundImage:`url(${logoncc})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain'
            }}>
                
            </div>
        </div>
    )
}

export function Greydiv (){
    return(
        <div className='greydiv'>
            <h>Lorem ipsum dolor sit asmet?</h>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</p>
        </div>
    )
}

export function Content (){
    return(
        <div className='card--container'>
            <Card image = {htmlicon}/>
            <Card image = {cssicon}/>
            <Card image = {urlicon}/>
        </div>
    )
}

export function Card (props){
    return(
        <div className='card'>
            <h>Lorem ipsum dolor sit amet</h>
            <p1 className="card--content"><img src={props.image}/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p1>
            
        </div>
    )
}

export function Footer (){
    return(
        <div className='footer'>
            Copyright © 2021
        </div>
    )
}