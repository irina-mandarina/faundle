import * as React from 'react'
import {Dispatch, SetStateAction, useEffect, useRef, useState} from "react";
import "./gradient.css"

const Layout: React.FC<{ children: any }> = (props) => {
    const [meshes, setMeshes]: [Mesh[], Dispatch<SetStateAction<Mesh[]>> ] =
        useState([] as Mesh[])
    const meshCount = 5
    const meshColours: string[] = ['#18966c', '#185c45', '#184c5c', '#06a2d1', '#6ad6f7', '#171b82', '#4f52b8', '#248753', '#085940', '#1b4f4d']

    useEffect(() => {
        let initMeshes = [];
        for (let count = 0; count < meshCount; count++) {
            let randomWidth = Math.floor(Math.random() * 300);
            initMeshes.push({
                width: randomWidth,
                height: randomWidth,
                x: Math.floor(Math.random() * 100),
                y: Math.floor(Math.random() * 100),
                colour: meshColours[Math.floor(Math.random() * (meshColours.length - 1))],
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
        }, 10000);

        return () => clearInterval(intervalId);
    }, []);



    // useEffect(() => {
    //     let initMeshes = []
    //     for (let count = 0; count < meshCount; count++) {
    //         let randomWidth = Math.floor(Math.random() * 300)
    //         initMeshes.push({
    //             width: randomWidth,
    //             height: randomWidth,
    //             x: Math.floor(Math.random() * 100),
    //             y: Math.floor(Math.random() * 100),
    //             colour: meshColours[Math.floor(Math.random() * (meshColours.length - 1))]
    //         })
    //     }
    //     setMeshes(initMeshes)
    // }, [])
    //
    // setInterval(() => {
    //     for (let meshInx = 0; meshInx < meshes.length; meshInx++) {
    //         let newMeshes = [...meshes]
    //         newMeshes[meshInx].x = Math.floor(Math.random() * 100)
    //         newMeshes[meshInx].y = Math.floor(Math.random() * 100)
    //         setMeshes(newMeshes)
    //         console.log(meshes[meshInx])
    //     }
    // }, 10000)

    return (
        <div className="w-full h-full">
            <div className="absolute w-full h-full"
                 style={{
                    top: 0,
                    left: 0
            }}>
                {
                    meshes.map( (mesh, index) =>
                    <div key={index}
                      style={{
                          backgroundColor: "#0f314d",
                          position: "absolute",
                          width: `${mesh.width}px`,
                          height: `${mesh.height}px`,
                          borderRadius: "100%",
                          transform: `translate(${mesh.x*0.01}%, ${mesh.y*0.01}%)`,
                          transition: '10000ms'
                      }}></div>)
                }

            </div>

            <main>
                {props.children}
            </main>

        </div>
    )
}

export default Layout