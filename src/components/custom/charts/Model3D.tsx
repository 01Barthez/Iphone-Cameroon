import React from "react";
import { useGLTF } from "@react-three/drei";
import { type Object3D } from "three";

type Model3DProps = {
    modelPath: string;
};

const Model3D: React.FC<Model3DProps> = ({ modelPath }) => {
    const gltf = useGLTF(modelPath);
    return (
        <primitive object={gltf.scene as Object3D} scale={1} />
    );
};

export default Model3D;
