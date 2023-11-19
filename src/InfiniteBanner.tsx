import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface InfiniteBannerProps {
    direction: {
        axis: 'X' | 'Y';
        direction: 'normal' | 'reverse';
    };
    gap: number;
    duration?: number;
    children: React.ReactNode[];
}

export const InfiniteBanner: React.FC<InfiniteBannerProps> = ({ direction, children, gap = 0, duration = 10 }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimension, setDimension] = useState(0);
    const extendedChildren = [...children, ...children];

    const isHorizontal = () => {
        return direction.axis === "X";
    }

    // Function to compute dimension and update variants
    const updateAnimation = () => {
        if (containerRef.current) {
            let total = 0;
            const nodes = containerRef.current.children;
            for (let i = 0; i < nodes.length; i++) {
                total += direction.axis === 'X' ? (nodes[i] as HTMLElement).offsetWidth + gap : (nodes[i] as HTMLElement).offsetHeight + gap;
            }
            const newDimension = total / 2; // Since children are duplicated
            setDimension(newDimension);
        }
    };

    useEffect(() => {
        updateAnimation();
        window.addEventListener('resize', updateAnimation);
        return () => window.removeEventListener('resize', updateAnimation);
    }, [direction, gap, children]);


    const variants = {
        animate: {
            'x': [0, 0],
            'y': [0, 0],
            [direction.axis === 'X' ? 'x' : 'y']: direction.direction === 'reverse' ? [0, -dimension] : [-dimension, 0],
            transition: {
                'x': null,
                'y': null,
                [direction.axis === 'X' ? 'x' : 'y']: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: duration,
                    ease: "linear"
                }
            }
        }
    }


    return (
        <motion.div
            style={{
                ...(isHorizontal() ? { width: dimension, height: "fit-content" } : { height: dimension, width: "fit-content" }),
                overflow: 'hidden',
            }}
        >
            <motion.div
                key={"duration" + duration}
                ref={containerRef}
                variants={variants}
                animate="animate"
                style={{
                    display: 'flex',
                    gap: gap,
                    ...(isHorizontal() ? { flexDirection: 'row' } : { flexDirection: 'column' })
                }}
            >
                {extendedChildren.map((value, index) => {
                    return (
                        <React.Fragment key={`copy${index}`}>{value}</React.Fragment>
                    );
                })}
            </motion.div>
        </motion.div>
    );
};