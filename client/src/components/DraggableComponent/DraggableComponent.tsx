import { ReactNode, useEffect, useState, useRef } from 'react';
import './DraggableComponent.css'

function DraggableComponent({ children, canvasRef } : { children: ReactNode, canvasRef: React.HTMLDivElement}) {
    const [mouseX, setMouseX] = useState<number>(100);
    const [mouseY, setMouseY] = useState<number>(100);
    const [isDraggable, setIsDraggable ] = useState<boolean>(false)
    const [isSelected, setIsSelected] = useState<boolean>(false)
    const draggableComponentRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        window.addEventListener('mousemove', mouseMoveHandler)

        // attempting to make isselected false when click outside of the div
        window.addEventListener('click', (e) => {
            // if (e.target === draggableComponentRef) {

            // }
        })

        window.addEventListener('mouseup', () => {
            removeEventListener('mousemove', mouseMoveHandler)
            setIsDraggable(false)
        })
        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, [isDraggable])

    const mouseMoveHandler = (e: MouseEvent) => {
        const test = canvasRef.current.getBoundingClientRect()
        if (isDraggable) {
            e.preventDefault();
            setMouseX((e.clientX - test.x - 50))
            setMouseY((e.clientY - test.y - 50))
        }
    }

    const mouseDownHandler = () => {
        setIsDraggable(true)
        setIsSelected(true)
    }

    const styles = {
        left: mouseX,
        top: mouseY,
    }

    return ( <div style={styles} data-state={isDraggable} ref={draggableComponentRef} className='draggable-component' onMouseDownCapture={mouseDownHandler} onMouseUp={() => setIsDraggable(false)}>
        {children}
        {isSelected && <div className='post-tl post'></div>}
        {isSelected && <div className='post-tr post'></div>}
        {isSelected && <div className='post-bl post'></div>}
        {isSelected && <div className='post-br post'></div>}
    </div> );
}

export default DraggableComponent;