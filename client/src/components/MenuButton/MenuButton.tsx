import './MenuButton.css'
import { ReactNode } from 'react';

function MenuButton({ children, clickHandler, align } : { children: ReactNode, clickHandler: () => void, align?: string }) {
    const inputStyle = {
        textAlign: (align || 'center') as React.CSSProperties['textAlign']
    }
    return ( <button onClick={clickHandler} className="menu-button" style={inputStyle}>
    {children}
</button> );
}

export default MenuButton;