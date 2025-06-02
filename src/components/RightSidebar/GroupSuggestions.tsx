import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';

interface GroupSuggestionItem {
  id: string;
  name: string;
  memberCount: number;
  coverImageUrl: string;
}

interface GroupSuggestionsProps {
  className?: string;
}

const suggestedGroupsData: GroupSuggestionItem[] = [
  {
    id: 'group1',
    name: 'Mad Men (MADdicts)',
    memberCount: 6195,
    coverImageUrl: 'https://placehold.co/300x150/8D3DA8/FFFFFF?text=Mad+Men+Fans',
  },
  {
    id: 'group2',
    name: 'Dexter Morgan Fans',
    memberCount: 6984,
    coverImageUrl: 'https://placehold.co/300x150/E53935/FFFFFF?text=Dexter+Fans',
  },
  {
    id: 'group3',
    name: 'React Developers Community',
    memberCount: 12500,
    coverImageUrl: 'https://placehold.co/300x150/03A9F4/FFFFFF?text=React+Devs',
  },
];

const GroupSuggestions: React.FC<GroupSuggestionsProps> = ({ className }) => {
  const [dismissedGroups, setDismissedGroups] = React.useState<string[]>([]);

  const handleDismiss = (groupId: string) => {
    setDismissedGroups(prev => [...prev, groupId]);
  };

  const activeGroups = suggestedGroupsData.filter(group => !dismissedGroups.includes(group.id));

  if (activeGroups.length === 0) {
    return null; // Or a placeholder message if all groups are dismissed
  }

  return (
    <Card className={cn("w-full bg-card shadow-sm rounded-lg", className)}>
      <CardHeader className="flex flex-row items-center justify-between p-4 pb-3">
        <CardTitle className="text-base font-semibold text-prd-primary-text">Suggested Groups</CardTitle>
        <Button variant="link" className="text-prd-accent-blue p-0 h-auto text-sm hover:underline">
          See All
        </Button>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="space-y-4">
          {activeGroups.map((group) => (
            <div key={group.id} className="flex flex-col pb-3 border-b border-border last:border-b-0 last:pb-0">
              <div className="relative mb-2">
                <img 
                  src={group.coverImageUrl} 
                  alt={group.name} 
                  className="w-full h-24 object-cover rounded-md" 
                />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => handleDismiss(group.id)}
                  className="absolute top-1.5 right-1.5 bg-black/50 hover:bg-black/70 text-white rounded-full w-6 h-6 p-1"
                >
                  <X className="w-full h-full" />
                </Button>
              </div>
              <div className='flex flex-row items-start justify-between gap-2'>
                <div className='flex-grow'>
                  <h3 className="font-semibold text-sm text-prd-primary-text hover:underline cursor-pointer">{group.name}</h3>
                  <p className="text-xs text-prd-secondary-text">{group.memberCount.toLocaleString()} members</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="mt-1 text-sm text-prd-secondary-text border-border hover:bg-secondary/50 px-3 py-1 h-auto flex-shrink-0"
                >
                  <Plus className="w-4 h-4 mr-1.5 text-prd-accent-blue" /> Join
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GroupSuggestions;
