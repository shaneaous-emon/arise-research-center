import React from 'react';

interface StatCardProps {
  count: string | number;
  label: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ count, label, icon }) => {
  return (
    <div className="flex items-center p-6 bg-white rounded-lg shadow-card">
      <div className="mr-4 text-accent-300">{icon}</div>
      <div>
        <div className="text-3xl font-bold text-primary-800">{count}</div>
        <div className="text-sm text-neutral-600">{label}</div>
      </div>
    </div>
  );
};

export default StatCard;