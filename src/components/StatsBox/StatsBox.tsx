import React from 'react';

interface StatsBoxProps {
  title: string;
  subtitle: string;
  textStyle?: string;
}

const StatsBox = ({ subtitle, textStyle, title }: StatsBoxProps) => (
  <div className="card shadow-lg compact side bg-base-100">
    <div className="flex-row items-center card-body">
      <div className="flex-1">
        <h2 className={`card-title text-primary ${textStyle || ''}`}>
          {title}
        </h2>
        <p className="text-base-content text-opacity-40">{subtitle}</p>
      </div>
      <div className="flex space-x-2 flex-0" />
    </div>
  </div>
);

export default StatsBox;
