import React from 'react';
import { cn } from '@/lib/utils';

interface RefreshButtonProps {
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

const RefreshIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M30.7442 18.8497L30.6514 19.5939C29.867 25.8841 24.5025 30.7511 18 30.7511C14.1461 30.7511 10.6158 29.04 8.25 26.33V30.7511H6.75V24.0011C6.75 23.5869 7.08579 23.2511 7.5 23.2511H14.25V24.7511H8.89767C10.967 27.4804 14.3146 29.2511 18 29.2511C23.7364 29.2511 28.471 24.957 29.1629 19.4083L29.2557 18.6641L30.7442 18.8497Z"></path>
    <path fillRule="evenodd" clipRule="evenodd" d="M5.34866 16.4072C6.13304 10.117 11.4976 5.25 18.0001 5.25C21.8636 5.25 25.402 6.96967 27.7678 9.6915V5.25H29.2678V12C29.2678 12.4142 28.932 12.75 28.5178 12.75H28.5144C28.5053 12.7502 28.4962 12.7502 28.4871 12.75H21.7678V11.25H27.1024C25.033 8.52068 21.6855 6.75 18.0001 6.75C12.2637 6.75 7.52905 11.0441 6.83714 16.5928L6.74433 17.337L5.25586 17.1514L5.34866 16.4072Z"></path>
  </svg>
);

export const RefreshButton: React.FC<RefreshButtonProps> = ({
  onClick,
  className,
  ariaLabel = "Generate new list of vibes"
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "aspect-[4/3] sm:aspect-[2/1] lg:aspect-[2.5/1] min-h-[60px] max-h-[100px]",
        "flex items-center justify-center",
        "p-4 rounded-lg border border-gray-300 bg-gray-100",
        "hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500",
        "transition-all duration-200 text-gray-600",
        className
      )}
      role="button"
      tabIndex={0}
      aria-label={ariaLabel}
    >
      <RefreshIcon />
    </button>
  );
};