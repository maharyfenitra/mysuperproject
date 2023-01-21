import { MouseEventHandler } from "react";

export type TComponentsProps = {
    size: {
        width: number;
        height: number;
    };
    position: {
        x: number;
        y: number;
    };
    handleMouseDown: MouseEventHandler<HTMLDivElement>;
    handleMouseMove: MouseEventHandler<HTMLDivElement>;
    handleMouseUp: MouseEventHandler<HTMLDivElement> ;
    handleMouseLeave: MouseEventHandler<HTMLDivElement>;
    backgroundColor: string;
    ref: any
}