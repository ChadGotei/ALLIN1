"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
const items = [
    {
        id: 1,
        title: "Motion Tracker",
        subtitle: 'Precisely track objects in footage for seamless interaction with 3D elements',
    },
    {
        id: 2,
        title: "Compositing",
        subtitle: "Combine live-action and 3D elements to create stunning and believable visuals",
    },
    {
        id: 3,
        title: "Color Grading",
        subtitle: "Enhance the visual impact of your video with professional color grading techniques"
    }
];

export default function InnovationContent() {
    const [selectedId, setSelectedId] = useState(null);
    const selectedItem = items.find(item => item.id === selectedId);

    return (
        <div>
            <div className="grid grid-cols-1 md:flex md:justify-center md:flex-1 gap-8 w-full max-w-4xl mt-8 sm:mt-10">
                {items.map(item => (
                    <motion.div
                        layoutId={item.id.toString()}
                        onClick={() => setSelectedId(item.id)}
                        key={item.id}
                        className="bg-primary-100 rounded-lg p-6 shadow-lg cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.h2 className="text-xl font-bold text-gray-800">{item.title}</motion.h2>
                        <motion.h5 className="text-gray-600">{item.subtitle}</motion.h5>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedId && selectedItem && (
                    <motion.div
                        layoutId={selectedId.toString()}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                    >
                        <motion.div className="bg-white rounded-lg p-7 md:p-8 shadow-lg max-w-md w-80 sm:w-full relative">
                            <motion.h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedItem.title}</motion.h2>
                            <motion.h5 className="text-gray-600 mb-6">{selectedItem.subtitle}</motion.h5>
                            <motion.button
                                onClick={() => setSelectedId(null)}
                                className="absolute top-4 right-4 bg-transparent text-gray-800 hover:text-gray-600"
                            >
                                <XCircleIcon className="h-8 w-8" />
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
