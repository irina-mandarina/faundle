import React, { useEffect, useState } from "react";
import "./gradient.css";

const Layout: React.FC<{ children: any }> = (props) => {
    const [meshes, setMeshes] = useState([] as Mesh[]);
    const meshCount = 5;
    const meshColours: string[] = [
        "#18966c",
        "#185c45",
        "#184c5c",
        "#06a2d1",
        "#6ad6f7",
        "#171b82",
        "#4f52b8",
        "#248753",
        "#085940",
        "#1b4f4d",
    ];

    useEffect(() => {
        const initMeshes = [];
        for (let count = 0; count < meshCount; count++) {
            let randomWidth = Math.floor(Math.random() * 300);
            initMeshes.push({
                width: randomWidth,
                height: randomWidth,
                x: Math.floor(Math.random() * 100),
                y: Math.floor(Math.random() * 100),
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
                    x: Math.floor(Math.random() * 100),
                    y: Math.floor(Math.random() * 100),
                }))
            );
        }, 1000); // Decreased the interval to 1 second for testing

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="w-full h-full">
            <div
                className="absolute w-full h-full"
                style={{
                    top: 0,
                    left: 0,
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
                            transition: "transform 1s", // Added a transition for smooth movement
                        }}
                    ></div>
                ))}
            </div>

            <main>{props.children}</main>
        </div>
    );
};

export default Layout;
