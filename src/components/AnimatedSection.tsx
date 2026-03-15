
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const FadeUp = ({ children, className = '', delay = 0 }: AnimatedSectionProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const FadeIn = ({ children, className = '', delay = 0 }: AnimatedSectionProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SlideInLeft = ({ children, className = '', delay = 0 }: AnimatedSectionProps) => (
  <motion.div
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SlideInRight = ({ children, className = '', delay = 0 }: AnimatedSectionProps) => (
  <motion.div
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const ScaleIn = ({ children, className = '', delay = 0 }: AnimatedSectionProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({ children, className = '', delay = 0 }: AnimatedSectionProps) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-80px' }}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: 0.1, delayChildren: delay } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);
