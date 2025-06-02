import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlusCircle, Archive, Settings2 as SettingsIcon } from 'lucide-react';

interface StoryPanelProps {
  className?: string;
}

const StoryPanel: React.FC<StoryPanelProps> = ({ className }) => {
  return (
    <div className={cn("w-full bg-card p-4 rounded-lg shadow-sm", className)}> {/* Added bg-card and padding here */}
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-semibold text-prd-primary-text">Stories</h2>
        <div className="space-x-1">
          <Button variant="ghost" size="sm" className="text-prd-accent-blue hover:bg-secondary px-1.5 py-1 h-auto text-xs">
            <Archive className="mr-1 h-3.5 w-3.5" /> Archive
          </Button>
          <Button variant="ghost" size="sm" className="text-prd-accent-blue hover:bg-secondary px-1.5 py-1 h-auto text-xs">
            <SettingsIcon className="mr-1 h-3.5 w-3.5" /> Settings
          </Button>
        </div>
      </div>

      <Card className="overflow-hidden shadow-none border-none bg-transparent">
        <CardContent className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-md">
          <Button 
            variant="outline" 
            size="icon" 
            className="h-10 w-10 rounded-full border-2 border-primary bg-primary/10 text-primary hover:bg-primary/20 shrink-0"
            aria-label="Add to your story"
          >
            <PlusCircle className="h-5 w-5" />
          </Button>
          <div>
            <h3 className="font-semibold text-prd-primary-text text-sm">Add to Your Story</h3>
            <p className="text-xs text-prd-secondary-text leading-tight">Share a photo, video or write something.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StoryPanel;
