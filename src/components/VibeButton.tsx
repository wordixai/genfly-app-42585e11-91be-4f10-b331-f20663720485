import React from 'react';
import { cn } from '@/lib/utils';

interface VibeButtonProps {
  name: string;
  isSelected?: boolean;
  hasLED?: boolean;
  onClick?: () => void;
  className?: string;
}

const LED = () => (
  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
);

export const VibeButton: React.FC<VibeButtonProps> = ({
  name,
  isSelected = false,
  hasLED = true,
  onClick,
  className
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "aspect-[4/3] sm:aspect-[2/1] lg:aspect-[2.5/1] min-h-[60px] max-h-[100px]",
        "flex flex-col items-start justify-between relative",
        "p-4 rounded-lg border transition-all duration-200",
        "hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500",
        isSelected 
          ? "bg-blue-50 border-blue-200 text-blue-900" 
          : "bg-white border-gray-200 text-gray-900",
        className
      )}
      role="button"
      tabIndex={0}
    >
      <span className="text-sm font-medium break-words pr-1">{name}</span>
      
      {hasLED && (
        <div className="absolute left-[0.93rem] bottom-[0.93rem]">
          <LED />
        </div>
      )}
    </button>
  );
};