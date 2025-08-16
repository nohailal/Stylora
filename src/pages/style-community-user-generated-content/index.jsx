import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import CommunityHeader from './components/CommunityHeader';
import StyleFeed from './components/StyleFeed';
import StyleChallenges from './components/StyleChallenges';
import CommunityForums from './components/CommunityForums';
import StyleMentors from './components/StyleMentors';
import CreatePostModal from './components/CreatePostModal';

const StyleCommunityPage = () => {
  const [activeTab, setActiveTab] = useState('feed');
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'feed':
        return <StyleFeed />;
      case 'challenges':
        return <StyleChallenges />;
      case 'forums':
        return <CommunityForums />;
      case 'mentors':
        return <StyleMentors />;
      default:
        return <StyleFeed />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CommunityHeader 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onCreatePost={() => setIsCreatePostModalOpen(true)}
      />
      <main className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {renderActiveTab()}
        </div>
      </main>
      <CreatePostModal 
        isOpen={isCreatePostModalOpen}
        onClose={() => setIsCreatePostModalOpen(false)}
      />
      {/* Community Stats Footer */}
      <div className="bg-muted/50 border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-playfair font-bold text-primary mb-2">12.5K</div>
              <div className="text-muted-foreground">Active Members</div>
            </div>
            <div>
              <div className="text-3xl font-playfair font-bold text-primary mb-2">45.2K</div>
              <div className="text-muted-foreground">Style Posts</div>
            </div>
            <div>
              <div className="text-3xl font-playfair font-bold text-primary mb-2">156</div>
              <div className="text-muted-foreground">Style Mentors</div>
            </div>
            <div>
              <div className="text-3xl font-playfair font-bold text-primary mb-2">892</div>
              <div className="text-muted-foreground">Active Challenges</div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm opacity-80">
            © {new Date()?.getFullYear()} Stylora. Building the world's most supportive fashion community.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default StyleCommunityPage;