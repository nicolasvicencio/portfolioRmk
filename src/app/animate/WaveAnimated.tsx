'use client'
import { motion } from "framer-motion";

export default function WaveAnimated({ children, ...rest }: { children: React.ReactNode }) {
  return (
    <motion.div
      {...rest}
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      whileInView={{opacity: 1}}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
}
