import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import {
  Newspaper,
  MessageSquareText,
  PlaySquare,
  Store,
  Gamepad2,
  CalendarDays,
  Flag,
  UsersRound,
  List as ListIcon, // Renamed to avoid conflict with HTML List
  HeartHandshake,
  ChevronDown,
  Settings,
  LogOut,
} from 'lucide-react';

interface NavItemProps {
  label: string;
  icon: React.ElementType;
  href: string;
  isActive?: boolean;
  isBold?: boolean;
  onClick?: () => void;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, icon: Icon, href, isActive, isBold, onClick, className }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'flex items-center px-3 py-2.5 text-sm rounded-md transition-colors',
        'text-sidebar-foreground hover:bg-sidebar-border focus:bg-sidebar-border focus:outline-none',
        isActive && 'bg-sidebar-primary text-sidebar-primary-foreground font-semibold',
        isBold && !isActive && 'font-medium',
        className
      )}
    >
      <Icon className={cn('h-5 w-5 mr-3 flex-shrink-0', isActive ? 'text-sidebar-primary-foreground' : 'text-sidebar-foreground/80')} />
      {label}
    </a>
  );
};

interface NavSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const NavSection: React.FC<NavSectionProps> = ({ title, children, className }) => (
  <div className={cn('py-2', className)}>
    {title && <h3 className="px-3 pt-2 pb-1 text-xs font-semibold uppercase text-sidebar-foreground/60 tracking-wider">{title}</h3>}
    <div className="space-y-1">{children}</div>
  </div>
);

export const LeftSidebarNav: React.FC = () => {
  const [isExploreExpanded, setIsExploreExpanded] = React.useState(true);

  const userProfile = {
    name: 'Olenna Mason',
    avatarUrl: 'https://placehold.co/40x40/E91E63/white?text=OM',
    profileLink: '#profile',
  };

  const mainNavItems: NavItemProps[] = [
    { label: 'News Feed', icon: Newspaper, href: '#news-feed', isActive: true, isBold: true },
    { label: 'Messenger', icon: MessageSquareText, href: '#messenger' },
    { label: 'Watch', icon: PlaySquare, href: '#watch' },
    { label: 'Marketplace', icon: Store, href: '#marketplace' },
  ];

  const shortcutItems: NavItemProps[] = [
    { label: 'FarmVille 2', icon: Gamepad2, href: '#farmville2' },
  ];

  const exploreNavItems: NavItemProps[] = [
    { label: 'Events', icon: CalendarDays, href: '#events' },
    { label: 'Pages', icon: Flag, href: '#pages' },
    { label: 'Groups', icon: UsersRound, href: '#groups' },
    { label: 'Friend Lists', icon: ListIcon, href: '#friend-lists' },
    { label: 'Fundraisers', icon: HeartHandshake, href: '#fundraisers' },
  ];
  
  const createItems: {label: string; href: string}[] = [
      { label: 'Ad', href: '#create-ad'},
      { label: 'Page', href: '#create-page'},
      { label: 'Group', href: '#create-group'},
      { label: 'Event', href: '#create-event'},
      { label: 'Fundraiser', href: '#create-fundraiser'},
  ];

  return (
    <aside className="fixed top-0 left-0 z-20 flex h-screen w-60 flex-col bg-sidebar text-sidebar-foreground">
      <ScrollArea className="flex-1 px-2 py-4">
        <a href={userProfile.profileLink} className="flex items-center px-3 py-2.5 mb-2 text-sm rounded-md transition-colors text-sidebar-foreground hover:bg-sidebar-border focus:bg-sidebar-border focus:outline-none">
          <Avatar className="w-7 h-7 mr-3 border border-sidebar-border">
            <AvatarImage src={userProfile.avatarUrl} alt={userProfile.name} />
            <AvatarFallback>{userProfile.name.substring(0, 1).toUpperCase()}</AvatarFallback>
          </Avatar>
          <span className="font-medium">{userProfile.name}</span>
        </a>

        <NavSection>
          {mainNavItems.map((item) => <NavItem key={item.label} {...item} />)}
        </NavSection>

        <Separator className="my-3 bg-sidebar-border/50" />

        <NavSection title="Shortcuts">
          {shortcutItems.map((item) => <NavItem key={item.label} {...item} />)}
        </NavSection>
        
        <Separator className="my-3 bg-sidebar-border/50" />

        <NavSection title="Explore">
          {exploreNavItems.slice(0, isExploreExpanded ? exploreNavItems.length : 3).map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
          <button
            onClick={() => setIsExploreExpanded(!isExploreExpanded)}
            className="flex items-center w-full px-3 py-2.5 text-sm rounded-md transition-colors text-sidebar-foreground hover:bg-sidebar-border focus:bg-sidebar-border focus:outline-none"
          >
            <ChevronDown className={cn('h-5 w-5 mr-3 flex-shrink-0 transition-transform', isExploreExpanded && 'rotate-180')} />
            {isExploreExpanded ? 'See Less' : `See ${exploreNavItems.length - 3} More`}
          </button>
        </NavSection>

        <Separator className="my-3 bg-sidebar-border/50" />
        
        <NavSection title="Create">
            <div className="px-3 text-xs text-sidebar-foreground/80 space-x-1.5 flex flex-wrap leading-relaxed">
                {createItems.map((item, index) => (
                    <React.Fragment key={item.label}>
                        <a href={item.href} className="hover:underline focus:underline focus:outline-none">{item.label}</a>
                        {index < createItems.length - 1 && <span className="select-none">·</span>}
                    </React.Fragment>
                ))}
            </div>
        </NavSection>

      </ScrollArea>
      
      <div className="p-2 border-t border-sidebar-border/50 mt-auto">
        <NavItem label="Settings & Privacy" icon={Settings} href="#settings" className="text-sidebar-foreground/80" />
        <NavItem label="Log Out" icon={LogOut} href="#logout" className="text-sidebar-foreground/80" />
      </div>
    </aside>
  );
};

export default LeftSidebarNav;
