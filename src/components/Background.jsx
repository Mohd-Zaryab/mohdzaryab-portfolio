import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
    // Dawn -> Day -> Dusk -> Night (3-minute loop)
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#050505]">
            <motion.div
                className="absolute inset-0"
                animate={{
                    background: [
                        'radial-gradient(circle at 50% 50%, #2D1B4D 0%, #050505 100%)', // Dawn
                        'radial-gradient(circle at 50% 50%, #0F172A 0%, #050505 100%)', // Day
                        'radial-gradient(circle at 50% 50%, #4C1D95 0%, #050505 100%)', // Dusk
                        'radial-gradient(circle at 50% 50%, #020617 0%, #050505 100%)', // Night
                        'radial-gradient(circle at 50% 50%, #2D1B4D 0%, #050505 100%)'  // Back to Dawn
                    ]
                }}
                transition={{
                    duration: 180,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            {/* Ambient Star-field Simulation */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-px h-px bg-white rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                    />
                ))}
            </div>

            {/* Grain Overlay */}
            <div className="grain-overlay" />
        </div>
    );
};

export default Background;
