import React from 'react';
import { cn } from '@/lib/utils';
import LeftSidebarNav from './LeftSidebarNav';
import TopHeader from './TopHeader';
import StoryPanel from './StoryPanel';
import { ScrollArea } from '@/components/ui/scroll-area';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn("min-h-screen bg-background", className)}>
      <LeftSidebarNav />
      <TopHeader />
      
      <main className="ml-60 mr-80 pt-16">
        <div className="p-6 min-h-[calc(100vh-4rem)]"> 
          {children}
        </div>
      </main>

      <aside className="fixed top-0 right-0 h-screen w-80 bg-surface z-10 border-l border-border">
        <ScrollArea className="h-full">
          {/* This pt-16 aligns content with main area, as if under a full-width header line */}
          <div className="pt-16">
            <div className="p-4 space-y-6">
              <StoryPanel />
              {/* Other right sidebar components like GroupSuggestions would be placed here */}
              {/* Example placeholder for where GroupSuggestions might go (not part of this task's generated files) */}
              {/* <div className="bg-card p-4 rounded-lg shadow-sm">*/}
              {/*   <h3 className="text-base font-semibold text-prd-primary-text mb-2">Suggested Groups</h3>*/}
              {/*   <p className="text-xs text-prd-secondary-text">Content for suggested groups...</p>*/}
              {/* </div>*/}
            </div>
          </div>
        </ScrollArea>
      </aside>
    </div>
  );
};

export default MainAppLayout;
