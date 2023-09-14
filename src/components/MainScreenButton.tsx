import React, {Component} from "react";
import {Link} from "gatsby";

const MainScreenButton: React.FC<MainScreenButtonProps> = ( props, context ) => {
    return <div className="p-4">
        <Link to={props.link}
        className="text-center font-jockey">
            {props.text}
        </Link>
    </div>

}

export default MainScreenButton