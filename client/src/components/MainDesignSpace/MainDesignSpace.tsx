import { ReactNode } from 'react';
import './MainDesignSpace.css'

function MainDesignSpace({ children } : { children : ReactNode }) {
    return ( 
        <div className="main-design-space">
            {children}
        </div> 
    );
}

export default MainDesignSpace;