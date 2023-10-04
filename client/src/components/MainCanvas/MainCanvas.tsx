import './MainCanvas.css'
import DraggableComponent from '../DraggableComponent/DraggableComponent';
import { useRef } from 'react';

function MainCanvas() {
    const mainCanvasRef = useRef<HTMLDivElement | null>(null)

    return ( 
        <div className="main-canvas" ref={mainCanvasRef}>
            <DraggableComponent canvasRef={mainCanvasRef}>
                <p style={{fontSize: "40px"}}>Text</p>
            </DraggableComponent>
            <DraggableComponent canvasRef={mainCanvasRef}>
                <p style={{fontSize: "40px"}}>Title</p>
            </DraggableComponent>
        </div>
     );
}

export default MainCanvas;