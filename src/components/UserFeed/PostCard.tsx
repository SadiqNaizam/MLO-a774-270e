import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ThumbsUp, MessageCircle, Share2, MoreHorizontal, CheckCircle, MapPin } from 'lucide-react';

export interface PostCardProps {
  id: string;
  userName: string;
  userAvatarUrl: string;
  postTime: string;
  textContent?: string;
  location?: string;
  mediaUrl?: string;
  mediaType?: 'image' | 'video';
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  isVerified?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({
  id,
  userName,
  userAvatarUrl,
  postTime,
  textContent,
  location,
  mediaUrl,
  mediaType,
  likesCount,
  commentsCount,
  sharesCount,
  isVerified,
}) => {
  return (
    <Card className={cn('w-full bg-card shadow-sm rounded-lg')}> 
      <CardHeader className="flex flex-row items-start space-x-3 p-4">
        <Avatar className="w-10 h-10 border">
          <AvatarImage src={userAvatarUrl} alt={userName} />
          <AvatarFallback>{userName.substring(0, 1).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center">
            <p className="text-sm">
              <span className="font-semibold text-prd-primary-text">{userName}</span>
              {location && <span className="font-normal text-prd-secondary-text"> is in {location}</span>}
            </p>
            {isVerified && <CheckCircle className="ml-1 w-4 h-4 text-prd-accent-blue fill-prd-accent-blue flex-shrink-0" />}
          </div>
          <p className="text-xs text-prd-secondary-text">{postTime}</p>
        </div>
        <Button variant="ghost" size="icon" className="text-prd-secondary-text w-8 h-8 rounded-full">
          <MoreHorizontal className="w-5 h-5" />
        </Button>
      </CardHeader>

      {(textContent || mediaUrl) && (
        <CardContent className="px-4 pb-2 pt-0">
          {textContent && <p className="text-sm text-prd-primary-text mb-3 whitespace-pre-wrap">{textContent}</p>}
          {mediaUrl && mediaType === 'image' && (
            <div className="rounded-lg overflow-hidden border border-border">
              <img src={mediaUrl} alt="Post media" className="aspect-video object-cover w-full" />
            </div>
          )}
          {/* TODO: Implement video player if mediaType is 'video' */}
        </CardContent>
      )}

      <CardFooter className="flex flex-col items-start p-4 pt-2">
        {(likesCount > 0 || commentsCount > 0 || sharesCount > 0) && (
          <div className="flex items-center space-x-4 text-xs text-prd-secondary-text mb-2 w-full">
            {likesCount > 0 && (
              <span className="hover:underline cursor-pointer">{likesCount} {likesCount === 1 ? 'Like' : 'Likes'}</span>
            )}
            {commentsCount > 0 && (
              <span className="hover:underline cursor-pointer">{commentsCount} {commentsCount === 1 ? 'Comment' : 'Comments'}</span>
            )}
            {sharesCount > 0 && (
              <span className="hover:underline cursor-pointer">{sharesCount} {sharesCount === 1 ? 'Share' : 'Shares'}</span>
            )}
          </div>
        )}
        
        <Separator className="my-2 bg-border" />

        <div className="flex justify-around w-full space-x-1">
          <Button variant="ghost" className="flex-1 text-sm text-prd-secondary-text hover:bg-secondary/50 py-2 px-1 rounded-md">
            <ThumbsUp className="w-5 h-5 mr-1.5" /> Like
          </Button>
          <Button variant="ghost" className="flex-1 text-sm text-prd-secondary-text hover:bg-secondary/50 py-2 px-1 rounded-md">
            <MessageCircle className="w-5 h-5 mr-1.5" /> Comment
          </Button>
          <Button variant="ghost" className="flex-1 text-sm text-prd-secondary-text hover:bg-secondary/50 py-2 px-1 rounded-md">
            <Share2 className="w-5 h-5 mr-1.5" /> Share
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
