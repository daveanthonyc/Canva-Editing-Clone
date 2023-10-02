import { ReactNode } from "react";

function ToolTip({children, toolTitle} : {children: ReactNode, toolTitle: string}) {
    return ( <div className="tool-tip">
        <span>{toolTitle}</span>
        <div className="inline-flex">
            {children}
        </div>
    </div> );
}

export default ToolTip;