"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function FadeAnimation({ children }) {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1,   // Trigger when 10% of the element is visible
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }} // Start with invisible and slightly translated down
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }} // Animate to visible and original position when in view
            transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01],
            }}
        >
            {children}
        </motion.div>
    );
}
