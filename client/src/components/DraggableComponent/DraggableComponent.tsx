import { ReactNode, useEffect, useState, useRef } from 'react';
import './DraggableComponent.css'

function DraggableComponent({ children } : { children: ReactNode }) {
    const [mouseX, setMouseX] = useState<number>(100);
    const [mouseY, setMouseY] = useState<number>(100);
    const [isDraggable, setIsDraggable ] = useState<boolean>(false)
    const [isSelected, setIsSelected] = useState<boolean>(false)
    const draggableComponentRef = useRef(null)

    useEffect(() => {
        window.addEventListener('mousemove', mouseMoveHandler)

        window.addEventListener('mouseup', () => {
            removeEventListener('mousemove', mouseMoveHandler)
            setIsDraggable(false)
        })
        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, [isDraggable])

    const mouseMoveHandler = (e: MouseEvent) => {
        if (isDraggable) {
            e.preventDefault();
            setMouseX(e.clientX)
            setMouseY(e.clientY)
        }
    }

    const mouseDownHandler = () => {
        setIsDraggable(true)
        setIsSelected(true)
    }


    const styles = {
        left: mouseX,
        top: mouseY
    }

    return ( <div style={styles} ref={draggableComponentRef} className='draggable-component' onMouseDownCapture={mouseDownHandler} onMouseUp={() => setIsDraggable(false)}>
        {children}
    </div> );
}

export default DraggableComponent;