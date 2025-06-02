import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import PostFeed from '../components/UserFeed/PostFeed';

/**
 * FeedPage renders the main user feed overview, corresponding to the "User Feed Overview" target page.
 * It utilizes MainAppLayout for the overall page structure, which includes
 * the LeftSidebarNav, TopHeader, and RightSidebar (with StoryPanel and potentially GroupSuggestions).
 * The primary content displayed in the MainContentArea of this page is the PostFeed.
 *
 * Note: The rendering of StoryPanel and GroupSuggestions within the RightSidebar
 * is handled by MainAppLayout itself, as per the component hierarchy and layout definitions.
 */
const FeedPage: React.FC = () => {
  return (
    <MainAppLayout>
      <PostFeed />
    </MainAppLayout>
  );
};

export default FeedPage;
