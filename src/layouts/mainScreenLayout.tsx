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
        "rgba(6,162,209,0.5)",
        "rgba(67,165,196,0.5)",
        "#171b82",
        "rgba(60,48,112,0.76)",
        "rgba(28,110,67,0.5)",
        "rgba(5,73,52,0.76)",
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
        setMeshes((prevMeshes) =>
            prevMeshes.map((mesh) => ({
                ...mesh,
                x: getRandomInt(1, 100),
                y: getRandomInt(1, 100),
            }))
        );
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
        }, 5000); // Decreased the interval to 1 second for testing

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="w-full h-full relative">

            <main style={{
                zIndex: 10000
            }}>{props.children}</main>
            <div
                className="w-full h-full"
                style={{
                    top: 0,
                    left: 0,
                    backgroundColor: '#0a3548',
                    position: "fixed",
                    zIndex: -1
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
                            transform: `translate(${mesh.x}%, ${mesh.y}%)`,
                            transition: "transform 4s ease-in-out",
                            filter: 'blur(3rem)',
                            zIndex: -1,
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
                            filter: 'blur(2rem)',
                            zIndex: -1,
                        }}>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Layout;
