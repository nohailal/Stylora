import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CommunityHeader = ({ activeTab, setActiveTab, onCreatePost }) => {
  const tabs = [
    { id: 'feed', label: 'Style Feed', icon: 'Image' },
    { id: 'challenges', label: 'Challenges', icon: 'Trophy' },
    { id: 'forums', label: 'Forums', icon: 'MessageCircle' },
    { id: 'mentors', label: 'Style Mentors', icon: 'Users' }
  ];

  return (
    <div className="bg-card border-b border-border sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          <div>
            <h1 className="text-3xl font-playfair font-bold text-primary mb-2">
              Style Community
            </h1>
            <p className="text-muted-foreground">
              Share your style journey and connect with fashion enthusiasts worldwide
            </p>
          </div>
          <Button 
            variant="default" 
            iconName="Plus" 
            iconPosition="left"
            onClick={onCreatePost}
          >
            Share Your Style
          </Button>
        </div>
        
        <div className="flex space-x-1 overflow-x-auto">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-t-lg text-sm font-medium whitespace-nowrap smooth-transition ${
                activeTab === tab?.id
                  ? 'bg-accent/10 text-accent border-b-2 border-accent' :'text-muted-foreground hover:text-primary hover:bg-muted'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityHeader;