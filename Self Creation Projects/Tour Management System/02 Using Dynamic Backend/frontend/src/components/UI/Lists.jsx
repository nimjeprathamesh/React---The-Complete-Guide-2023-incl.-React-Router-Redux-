import { NavLink } from 'react-router-dom';
import '../Common/Footer/MiddleFooter/MiddleFooter.css';

export default function Lists({to, children, className, ...prop}) {
    return (
        <li>
            <NavLink to={to} className={className} {...prop}>
                <nobr>{children}</nobr>
            </NavLink>
        </li>
    );
}