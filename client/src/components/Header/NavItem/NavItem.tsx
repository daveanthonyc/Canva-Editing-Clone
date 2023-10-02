import { ReactNode } from "react";
import './NavItem.css'

function NavItem({children} : {children: ReactNode}) {
    return ( 
        <div className="nav-item">
            {children}
        </div> 
    );
}

export default NavItem;