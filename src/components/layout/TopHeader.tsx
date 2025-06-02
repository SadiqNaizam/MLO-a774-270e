import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Facebook,
  Search,
  Home,
  Users,
  MessageCircle,
  Bell,
  ChevronDown,
  HelpCircle,
} from 'lucide-react';

interface TopHeaderProps {
  className?: string;
}

interface NavLinkProps {
  href: string;
  label: string;
  icon: React.ElementType;
  isActive?: boolean;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, icon: Icon, isActive, className }) => (
  <a
    href={href}
    className={cn(
      "flex flex-col items-center justify-center h-full w-20 md:w-24 border-b-[3px] hover:bg-secondary focus:bg-secondary focus:outline-none transition-colors",
      isActive ? "text-primary border-primary" : "text-muted-foreground border-transparent hover:border-border",
      className
    )}
    aria-label={label}
  >
    <Icon className={cn("h-6 w-6", isActive ? "text-primary" : "text-muted-foreground")} />
  </a>
);

const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  const user = {
    name: 'Olenna Mason',
    avatarUrl: 'https://placehold.co/40x40/E91E63/white?text=OM',
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-60 right-80 z-10 flex h-16 items-center justify-between border-b border-border bg-card px-4 sm:px-6 shadow-sm',
        className
      )}
    >
      <div className="flex items-center space-x-2 sm:space-x-3">
        <a href="/" aria-label="Homepage" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
          <Facebook className="h-10 w-10 text-primary" />
        </a>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          <Input
            type="search"
            placeholder="Search Social Dashboard"
            className="h-10 w-full rounded-full bg-secondary pl-9 pr-3 text-sm sm:w-56 md:w-64 focus-visible:ring-primary"
          />
        </div>
      </div>

      <nav className="hidden lg:flex h-full items-center">
        <NavLink href="/" label="Home" icon={Home} isActive={true} />
        <NavLink href="/friends" label="Friends" icon={Users} />
        {/* Additional navigation links can be added here */}
      </nav>

      <div className="flex items-center space-x-1 sm:space-x-2">
        <Button variant="ghost" size="icon" className="rounded-full text-foreground hover:bg-secondary w-10 h-10">
          <Users className="h-5 w-5" />
          <span className="sr-only">Friend Requests</span>
        </Button>
        <Button variant="ghost" size="icon" className="relative rounded-full text-foreground hover:bg-secondary w-10 h-10">
          <MessageCircle className="h-5 w-5" />
          <Badge variant="destructive" className="absolute top-0.5 right-0.5 h-4 min-w-[1rem] justify-center rounded-full p-0.5 text-[10px] leading-none">
            8
          </Badge>
          <span className="sr-only">Messages</span>
        </Button>
        <Button variant="ghost" size="icon" className="relative rounded-full text-foreground hover:bg-secondary w-10 h-10">
          <Bell className="h-5 w-5" />
          <Badge variant="destructive" className="absolute top-0.5 right-0.5 h-4 min-w-[1rem] justify-center rounded-full p-0.5 text-[10px] leading-none">
            12
          </Badge>
          <span className="sr-only">Notifications</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full text-foreground hover:bg-secondary w-10 h-10">
          <HelpCircle className="h-5 w-5" />
          <span className="sr-only">Help</span>
        </Button>
        
        <Button variant="ghost" className="rounded-full p-1 h-auto text-foreground hover:bg-secondary">
           <Avatar className="h-8 w-8 border border-border">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback>{user.name.substring(0,1).toUpperCase()}</AvatarFallback>
          </Avatar>
          <ChevronDown className="ml-1 h-4 w-4 text-muted-foreground" />
          <span className="sr-only">User Menu</span>
        </Button>
      </div>
    </header>
  );
};

export default TopHeader;
