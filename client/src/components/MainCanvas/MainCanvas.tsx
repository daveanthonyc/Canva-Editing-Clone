import './MainCanvas.css'
import DraggableComponent from '../DraggableComponent/DraggableComponent';

function MainCanvas() {
    return ( 
        <div className="main-canvas">
            <DraggableComponent>
                <p style={{fontSize: "40px"}}>test</p>
            </DraggableComponent>
        </div>
     );
}

export default MainCanvas;