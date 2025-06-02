import React from 'react';
import { cn } from '@/lib/utils';
import PostCard, { PostCardProps } from './PostCard';

interface PostFeedProps {
  className?: string;
}

const postsData: PostCardProps[] = [
  {
    id: '1',
    userName: 'Julia Fillory',
    userAvatarUrl: 'https://placehold.co/100x100/E91E63/white?text=JF',
    postTime: '2 hrs ago',
    location: 'Raleigh, North Carolina',
    textContent: 'Checking out some new stores downtown! The atmosphere is amazing and found some unique items. 🛍️',
    mediaUrl: 'https://placehold.co/600x400/4CAF50/white?text=Downtown+Storefront',
    mediaType: 'image' as const,
    likesCount: 156,
    commentsCount: 23,
    sharesCount: 12,
    isVerified: true,
  },
  {
    id: '2',
    userName: 'Alex Chen',
    userAvatarUrl: 'https://placehold.co/100x100/3F51B5/white?text=AC',
    postTime: '5 hrs ago',
    textContent: 'Just finished a great book! Highly recommend \"The Midnight Library\". Has anyone else read it? Thoughts? 📚',
    likesCount: 78,
    commentsCount: 15,
    sharesCount: 5,
  },
  {
    id: '3',
    userName: 'Maria Garcia',
    userAvatarUrl: 'https://placehold.co/100x100/FF9800/white?text=MG',
    postTime: '1 day ago',
    textContent: 'Beautiful sunset hike today! Nature is truly the best therapy. 🌄',
    mediaUrl: 'https://placehold.co/600x400/FFC107/white?text=Sunset+Hike',
    mediaType: 'image' as const,
    likesCount: 230,
    commentsCount: 45,
    sharesCount: 20,
    isVerified: false,
  },
  {
    id: '4',
    userName: 'David Miller',
    userAvatarUrl: 'https://placehold.co/100x100/00BCD4/white?text=DM',
    postTime: '2 days ago',
    textContent: 'My new coding setup. What do you all think? Any suggestions for improvement? Rate my setup! #coding #developer #workspace',
    mediaUrl: 'https://placehold.co/600x400/009688/white?text=Coding+Setup',
    mediaType: 'image' as const,
    likesCount: 99,
    commentsCount: 33,
    sharesCount: 8,
  },
];

const PostFeed: React.FC<PostFeedProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col gap-4 md:gap-6", className)}> {/* Responsive gap */}
      {postsData.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostFeed;
