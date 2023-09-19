import React, { useEffect, useState } from "react";
import "./gradient.css";
import {getRandomInt} from "../services/random";

const Layout: React.FC<{ children: any }> = (props) => {
    const [meshes, setMeshes] = useState([] as Mesh[]);
    const meshCount = 5;
    const meshColours: string[] = [
        "#0c563e",
        "#185c45",
        "#184c5c",
        "rgba(6,162,209,0.68)",
        "rgba(67,165,196,0.83)",
        "#171b82",
        "#4f52b8",
        "rgba(28,110,67,0.82)",
        "#085940",
        "#1b4f4d",
        "#0a3548",
    ];

    useEffect(() => {
        const initMeshes = [];
        for (let count = 0; count < meshCount; count++) {
            let randomWidth = getRandomInt(200, 500)
            initMeshes.push({
                width: randomWidth,
                height: randomWidth,
                x: getRandomInt(1, 100),
                y: getRandomInt(1, 100),
                colour: meshColours[Math.floor(Math.random() * meshColours.length)],
            });
        }
        setMeshes(initMeshes);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setMeshes((prevMeshes) =>
                prevMeshes.map((mesh) => ({
                    ...mesh,
                    x: getRandomInt(1, 100),
                    y: getRandomInt(1, 100),
                }))
            );
        }, 10000); // Decreased the interval to 1 second for testing

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="w-full h-full">
            <div
                className="fixed absolute w-full h-full -z-100"
                style={{
                    top: 0,
                    left: 0,
                    backgroundColor: '#0a3548'
                }}
            >
                {meshes.map((mesh, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: mesh.colour,
                            position: "absolute",
                            width: `${mesh.width}px`,
                            height: `${mesh.height}px`,
                            borderRadius: "100%",
                            transform: `translate(${mesh.x}%, ${mesh.y}%)`, // Removed the *0.01 multiplier
                            transition: "transform 9s ease-in-out", // Added a transition for smooth movement
                            filter: 'blur(1.5rem)'
                        }}
                    >
                        <div style={{
                            backgroundColor: mesh.colour,
                            position: "absolute",
                            width: `${mesh.width}px`,
                            height: `${mesh.height}px`,
                            borderRadius: "100%",
                            transform: `translate(${mesh.x}%, ${mesh.y}%)`, // Removed the *0.01 multiplier
                            transition: "transform 9s ease-in-out", // Added a transition for smooth movement
                            filter: 'blur(1.5rem)'
                        }}>
                        </div>
                    </div>
                ))}
            </div>

            <main>{props.children}</main>
        </div>
    );
};

export default Layout;
