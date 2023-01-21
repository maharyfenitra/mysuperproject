import type { TComponentsProps } from "../types/types";

const Rectangle = (props: TComponentsProps) => {
    return (
        <div
            ref={props.ref}
            style={{
                position: "absolute",
                width: props.size.width,
                height: props.size.height,
                background: props.backgroundColor,
                top: props.position.y,
                left: props.position.x,
            }}
            onMouseDown={props.handleMouseDown}
            onMouseMove={props.handleMouseMove}
            onMouseUp={props.handleMouseUp}
            onMouseLeave={props.handleMouseLeave}
        >
            Rectangle
        </div>
    );
};

export default Rectangle;
