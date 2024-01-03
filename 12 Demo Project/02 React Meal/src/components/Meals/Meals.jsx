import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals.jsx";
import MealsSummary from "./MealsSummary.jsx";

export default function Meals() {
    return (
        <Fragment>
            <MealsSummary />
            <AvailableMeals />
        </Fragment>
    );
}