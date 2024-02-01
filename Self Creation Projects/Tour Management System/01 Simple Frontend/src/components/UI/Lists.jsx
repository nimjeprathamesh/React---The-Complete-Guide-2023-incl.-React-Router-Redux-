import { NavLink } from 'react-router-dom';

export default function Lists({to, children, className, onClick, ...prop}) {
    return (
        <li>
            <NavLink to={to} className={className} onClick={onClick} {...prop}>
                <nobr>{children}</nobr>
            </NavLink>
        </li>
    );
}