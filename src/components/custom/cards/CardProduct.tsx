import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei/core";
import Model3D from '../charts/Model3D';
import TruncateText from '@/services/TruncateText';
import { motion } from 'framer-motion';

export interface IProductCardProps {
    product: {
        name: string;
        price: string;
        description: string;
        discount?: string;
        modelPath: string;
    };
};

const CardProduct: React.FC<IProductCardProps> = ({ product }) => {
    return (
        <motion.div
            className="bg-white shadow-lg rounded-lg p-4 max-w-sm"
            whileHover={{ scale: 1.03 }}
        >
            {/* Header */}
            <div className="flex justify-between items-center px-2 py-1 bg-opacity-50 bg-gray-200 rounded-t-lg">
                {product.discount && (
                    <span className="text-sm font-bold text-red-500">{product.discount}% Off</span>
                )}
                <button className="text-gray-500 hover:text-red-500">
                    ❤️
                </button>
            </div>

            {/* Main Content */}
            <div className="relative h-64">
                <Canvas>
                    <Suspense fallback={<>Loading...</>}>
                        <Model3D modelPath={product.modelPath} />
                        <OrbitControls enableZoom={true} enablePan={false} />
                    </Suspense>
                </Canvas>
            </div>

            {/* Footer */}
            <div className="mt-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500">{product.price}</p>
                <p className="text-sm text-gray-600">
                    <TruncateText text={product.description} />
                </p>
                <button className="w-full mt-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                    Buy Now
                </button>
            </div>
        </motion.div>
    )
}

export default CardProduct
