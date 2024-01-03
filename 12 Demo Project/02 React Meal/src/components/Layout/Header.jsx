import { Fragment } from "react";
import mealsImg from '../../asssets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

export default function Header({...props}) {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton showCart={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg} alt='A table full of delicious food!' />
            </div>
        </Fragment>
    );
};