import { motion } from 'framer-motion';
import React from 'react';

interface PageTemplateProps {
  children: React.ReactNode;
}

const SinglePageTemplate = ({ children }: PageTemplateProps) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    className="flex flex-col justify-center items-center py-12 shadow-2xl md:flex-row rounded-xl"
  >
    {children}
  </motion.div>
);

export default SinglePageTemplate;
