import React from "react";
import Transition from "../layouts/Transition";

const PlayAgainButton: React.FC = ( props, context ) => {
    return <div className="border-amber-50 p-4 m-2">
        <Transition
            from={"opacity-0"}
            to={"opacity-100 bg-indigo-950/[.5]"}
            duration={1800}>
            <div className="text-center w-full h-full absolute font-jockey bg-indigo-950/[.5] flex"
            style={{
                top: 0,
                left: 0
            }}>
                <div className="mx-auto my-auto">
                    <div className="p-4 bg-amber-900 rounded shadow">
                        You won!
                    </div>
                </div>
            </div>
        </Transition >
    </div>
}

export default PlayAgainButton