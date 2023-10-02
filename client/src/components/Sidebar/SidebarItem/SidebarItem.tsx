import { ReactNode } from "react";
import './SidebarItem.css'

function SidebarItem({ children, clickHandler }: { children: ReactNode, clickHandler: () => void }) {


    return ( 
    <div className="SidebarItem" onClick={clickHandler}>
        {children}
    </div> );
}

export default SidebarItem;