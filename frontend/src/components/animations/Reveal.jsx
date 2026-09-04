
import { motion } from "framer-motion";

export const HeadingAnimation = ({ children, className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const Reveal = ({
    children,
    className = "",
    delay = 0,
    direction = "up",
}) => {
    const directions = {
        up: { y: 20, x: 0 },
        down: { y: -20, x: 0 },
        left: { y: 0, x: -30 },
        right: { y: 0, x: 30 },
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...directions[direction],
            }}
            animate={{
                opacity: 1,
                y: 0,
                x: 0,
            }}
            transition={{
                duration: 0.6,
                delay,
                ease: "easeOut",
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const HeroContentAnimation = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};