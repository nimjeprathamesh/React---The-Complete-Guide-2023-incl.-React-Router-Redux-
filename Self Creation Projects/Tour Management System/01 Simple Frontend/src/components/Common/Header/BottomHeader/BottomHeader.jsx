import React from 'react';
import { menuItem } from '../../../MenuItem';
import Lists from '../../../UI/Lists';
import './BottomHeader.css';

export default function BottomHeader() {
    function openNav() {
        document.getElementById("mySidenav").classList.add("activenav");
        document.getElementById("mySidenav").classList.remove("closenavbar");
    }
    
    function closeNav() {
        document.getElementById("mySidenav").classList.remove("activenav");
        document.getElementById("mySidenav").classList.add("closenavbar");
    }

    return (
        <header id="bottom-header">
            <div className="row navbar">
                <div className="col-xxl-6 col-xl-5 col-lg-4 col-md-3 col-sm-3 col-xs-3 col-3">
                    <img src='/images/logo.png' alt='It is a logo.' />
                </div>
                <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-9 col-sm-9 col-xs-3 col-9">
                    <nav className="navbar navbar-expand-md">
                        <div id="mySidenav" className="sidenav">
                            <button className="closebtn" onClick={closeNav}>&times;</button>
                            <ul className="navbar-nav">
                                {menuItem.map((item, index) => (
                                    <Lists
                                        key={index}
                                        to={item.to}
                                        children={item.name}
                                        className={({isActive}) => isActive ? 'activeBottomHeader' : undefined}
                                    />
                                ))}
                            </ul>
                        </div>
                    </nav>
                    <span className="openNav" onClick={openNav}>&#9776;</span>
                </div>
            </div>
        </header>
    );
}