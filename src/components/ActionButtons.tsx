import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Share, Play } from 'lucide-react';

export const ActionButtons: React.FC = () => {
  return (
    <div className="flex gap-3 mt-8">
      <Button 
        variant="secondary" 
        className="flex-1 bg-gray-600 hover:bg-gray-700 text-white"
      >
        <Download className="w-4 h-4 mr-2" />
        DOWNLOAD
      </Button>
      
      <Button 
        variant="secondary" 
        className="flex-1 bg-gray-800 hover:bg-gray-900 text-white"
      >
        <Share className="w-4 h-4 mr-2" />
        SHARE
      </Button>
      
      <Button 
        className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
      >
        <Play className="w-4 h-4 mr-2" />
        PLAY
      </Button>
    </div>
  );
};