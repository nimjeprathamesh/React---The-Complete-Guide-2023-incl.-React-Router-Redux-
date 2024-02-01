import React from 'react';
import { menuItem } from '../../../../MenuItem';
import Lists from '../../../../UI/Lists';
import '../MiddleFooter.css';

export default function QuickLinks() {
    return (
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 col-12">
            <div className="middlefooter-area">
                <div className="heading">
                    Quick Links
                    <hr></hr>
                </div>
                <ul className="unorder">
                    {menuItem.map((item, index) => (
                        <Lists
                            key={index}
                            to={item.to}
                            children={item.name}
                            className={({isActive}) => (isActive ? 'activeLinks' : undefined)}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}