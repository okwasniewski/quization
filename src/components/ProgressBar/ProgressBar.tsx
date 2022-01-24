import { motion } from 'framer-motion';
import React from 'react';

interface ProgressBarProps {
  value: number;
  maxValue: number;
  title: string;
}

function ProgressBar({ value, maxValue, title }: ProgressBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full mt-2 border stats border-base-300"
    >
      <div className="stat">
        <div className="stat-value">
          {value}/{maxValue}
        </div>
        <div className="stat-title">{title}</div>
        <div className="stat-desc">
          <progress
            value={value}
            max={maxValue}
            className="progress progress-secondary"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default ProgressBar;
