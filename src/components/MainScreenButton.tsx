import React, {Component} from "react";
import {Link} from "gatsby";

const MainScreenButton: React.FC<MainScreenButtonProps> = ( props, context ) => {
    return <div className="flex my-4">
        <Link to={props.link}
        className="text-center font-staatliches bg-[#D9D9D9]/[.35] text-[16pt] rounded-lg w-full mx-auto p-4">
            {props.text}
        </Link>
    </div>

}

export default MainScreenButton