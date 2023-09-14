import * as React from 'react'
import {Dispatch, SetStateAction, useState} from "react";

const Layout: React.FC<{ children: any }> = (props) => {
    const [meshLocations, setMeshLocations]: [number[][], Dispatch<SetStateAction<number[][]>> ] = useState([[55, 20], [13, 58], [88, 82], [80, 35], [2, 97]])

    setInterval(() => {
        for (let i = 0; i < meshLocations.length; i++) {
            if (meshLocations[i][0] >= 100) {
                meshLocations[i][0] = 0
            }
            else {
                meshLocations[i][0] += 5
            }
            if (meshLocations[i][1] >= 100) {
                meshLocations[i][1] = 0
            }
            else {
                meshLocations[i][1] += 5
            }
            console.log(meshLocations)
        }
    }, 0.0001)

    const divStyle = {
        backgroundColor: "hsl(202, 68%, 14%)",
        transition: "10ms",
        backgroundImage: `
            radial-gradient(at ${meshLocations[0][0]}% ${meshLocations[0][1]}%, hsla(178, 53%, 54%, 0.59) 0px, transparent 50%),
            radial-gradient(at ${meshLocations[1][0]}% ${meshLocations[1][0]}%, hsla(222, 64%, 22%, 1) 0px, transparent 50%),
            radial-gradient(at ${meshLocations[2][0]}% ${meshLocations[2][0]}%, hsla(178, 78%, 28%, 1) 0px, transparent 50%),
            radial-gradient(at ${meshLocations[3][0]}% ${meshLocations[3][0]}%, hsl(197, 82%, 15%) 0px, transparent 50%),
            radial-gradient(at ${meshLocations[4][0]}% ${meshLocations[4][0]}%, hsl(174, 60%, 17%) 0px, transparent 50%)`
    };

    return (
        <div className="w-full h-full"
        style={divStyle}>
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout

