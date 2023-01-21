import { MouseEventHandler } from "react";
import { useRef, useState } from "react";

export const usePosition = ({x,y}: {x:number,y:number}) => {

    const [position, setPosition] = useState({ x, y});
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const ref = useRef<HTMLDivElement>(null);
    const [isMousePress, setIsMousePress] = useState(false);

    const handleMouseDown: MouseEventHandler<HTMLDivElement> = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
        setIsMousePress(true);
    };

    const handleMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {

        if (isMousePress) {
            setPosition({
                x: position.x + event.clientX - mousePosition.x,
                y: position.y + event.clientY - mousePosition.y,
            });
            setMousePosition({ x: event.clientX, y: event.clientY });
        }
    };

    const handleMouseUp: MouseEventHandler<HTMLDivElement> = () => {
        setIsMousePress(false);
    };

    const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
        setIsMousePress(false);
    };

    return {
        ref,
        position,
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        handleMouseLeave,
    };
};
