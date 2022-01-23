import React from 'react';

interface ProgressBarProps {
  value: number;
  maxValue: number;
  title: string;
}

function ProgressBar({ value, maxValue, title }: ProgressBarProps) {
  return (
    <div className="w-full mt-2 border stats border-base-300">
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
    </div>
  );
}

export default ProgressBar;
