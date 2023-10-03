import { ReactNode } from "react";
import './PurpleButton.css'

function PurpleButton({ children, clickHandler } : { children: ReactNode, clickHandler: () => void }) {
    return ( <button onClick={clickHandler} className="custom-button">
        {children}
    </button> );
}

export default PurpleButton;