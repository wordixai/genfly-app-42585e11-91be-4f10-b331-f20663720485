import React from 'react';
import { cn } from '@/lib/utils';

interface VoiceButtonProps {
  name: string;
  isSelected?: boolean;
  hasStar?: boolean;
  hasLED?: boolean;
  onClick?: () => void;
  className?: string;
}

const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-[12px] h-[12px]" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M10.5248 3.15838C10.5656 2.4022 11.1831 1.75 12 1.75C12.8169 1.75 13.4344 2.4022 13.4752 3.15836C13.6966 7.25635 16.727 10.2914 20.8187 10.5134C21.5854 10.555 22.25 11.1807 22.25 12.0119C22.25 12.8463 21.5806 13.4727 20.8113 13.5108C16.7255 13.7132 13.6966 16.7437 13.4752 20.8416C13.4344 21.5978 12.8169 22.25 12 22.25C11.1831 22.25 10.5656 21.5978 10.5248 20.8416C10.3034 16.7434 7.2739 13.7126 3.18751 13.5107C2.41877 13.4728 1.75 12.8469 1.75 12.0132C1.75 11.1794 2.41879 10.5537 3.18717 10.5155C7.27028 10.3124 10.3032 7.26175 10.5248 3.15838ZM12.0004 6.01235C11.0373 8.86655 8.848 11.0618 5.99104 12.0117C8.84653 12.9562 11.0364 15.1398 12 17.9892C12.9654 15.1345 15.1615 12.9482 18.0247 12.0066C15.1626 11.0555 12.9661 8.86773 12.0004 6.01235Z"></path>
  </svg>
);

const LED = () => (
  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
);

export const VoiceButton: React.FC<VoiceButtonProps> = ({
  name,
  isSelected = false,
  hasStar = false,
  hasLED = true,
  onClick,
  className
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "aspect-[4/3] sm:aspect-[2/1] lg:aspect-[2.5/1] xl:aspect-square min-h-[60px] max-h-[100px]",
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
      <span className="text-sm font-medium">{name}</span>
      
      {hasLED && (
        <div className="absolute left-[0.93rem] bottom-[0.93rem]">
          <LED />
        </div>
      )}
      
      {hasStar && (
        <div className="absolute right-[13px] bottom-[10.5px]">
          <StarIcon />
        </div>
      )}
    </button>
  );
};