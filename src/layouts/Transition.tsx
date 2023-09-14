import React, {useEffect, useState} from "react";

const Transition: React.FC<{ children: any, duration: number, from: string, to: string }> = (props) =>{
    const [className, setClassName] = useState(props.from)

    useEffect(() => {
        // Apply the target class after a delay for the transition to take effect
        const timer = setTimeout(() => {
            setClassName(props.to);
        }, props.duration);

        return () => clearTimeout(timer); // Clear the timer on unmount
    }, [props.duration]);

    return <div className={props.from + " transition-all ease-linear " + className}
    style={{
        transition: `${props.duration}ms`
    }}>
        { props.children }
    </div>

}

export default Transition