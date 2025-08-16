import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CommunityForums = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const forumCategories = [
    { id: 'all', name: 'All Topics', icon: 'MessageCircle', count: 1247 },
    { id: 'styling-advice', name: 'Styling Advice', icon: 'HelpCircle', count: 423 },
    { id: 'sustainable-fashion', name: 'Sustainable Fashion', icon: 'Leaf', count: 298 },
    { id: 'designer-discoveries', name: 'Designer Discoveries', icon: 'Star', count: 187 },
    { id: 'budget-fashion', name: 'Budget Fashion', icon: 'DollarSign', count: 156 },
    { id: 'body-positivity', name: 'Body Positivity', icon: 'Heart', count: 234 },
    { id: 'career-dressing', name: 'Career Dressing', icon: 'Briefcase', count: 145 }
  ];

  const forumPosts = [
    {
      id: 1,
      category: 'styling-advice',
      title: "Help! How to style wide-leg pants for petite frame?",
      content: `I recently bought these amazing wide-leg trousers but I'm struggling to style them without looking overwhelmed. I'm 5'2" and usually stick to skinny jeans. Any tips for proportions and styling?\n\nI've tried tucking in tops but it doesn't seem quite right. Would love some advice from fellow petite fashionistas!`,
      author: {
        name: "Lisa Chen",
        username: "@lisa_petite",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        badge: "Style Seeker"
      },
      replies: 23,
      likes: 45,
      views: 234,
      timestamp: "2 hours ago",
      isPinned: false,
      tags: ["Petite Fashion", "Styling Tips", "Wide-leg Pants"],
      lastReply: {
        author: "Emma Rodriguez",
        timestamp: "30 minutes ago"
      }
    },
    {
      id: 2,
      category: 'sustainable-fashion',
      title: "Best thrift stores in major cities - let's share our finds!",
      content: `Starting a thread to share amazing thrift store discoveries across different cities. I'll start with NYC:\n\n• Housing Works (multiple locations) - great for designer pieces\n• Buffalo Exchange - trendy vintage finds\n• Crossroads Trading - curated selection\n\nWhat are your favorite spots? Let's help each other find sustainable fashion gems!`,
      author: {
        name: "Marcus Thompson",username: "@marcus_thrifts",avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",badge: "Eco Warrior"
      },
      replies: 67,
      likes: 128,
      views: 892,
      timestamp: "5 hours ago",
      isPinned: true,
      tags: ["Thrifting", "Sustainable Fashion", "City Guide"],
      lastReply: {
        author: "Sophia Green",timestamp: "15 minutes ago"
      }
    },
    {
      id: 3,
      category: 'designer-discoveries',
      title: "Emerging designers to watch in 2025",
      content: `Just discovered this incredible emerging designer who's doing amazing work with sustainable materials and inclusive sizing. Their aesthetic is minimalist but with unexpected details.\n\nWho are some up-and-coming designers you think we should all know about? Looking for fresh perspectives and innovative approaches to fashion.`,
      author: {
        name: "Priya Sharma",username: "@priya_discovers",avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",badge: "Trendsetter"
      },
      replies: 34,
      likes: 89,
      views: 456,
      timestamp: "8 hours ago",
      isPinned: false,
      tags: ["Emerging Designers", "Fashion Discovery", "Innovation"],
      lastReply: {
        author: "David Kim",timestamp: "1 hour ago"
      }
    },
    {
      id: 4,
      category: 'body-positivity',
      title: "Celebrating curves: Finding confidence in fashion",
      content: `After years of hiding in oversized clothes, I'm finally embracing styles that celebrate my body shape. It's been such a journey of self-discovery and confidence building.\n\nWould love to hear from others who've had similar experiences. What helped you find your style confidence? Any specific brands or styling tips that made a difference?`,
      author: {
        name: "Jessica Williams",username: "@jess_confident",avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",badge: "Body Positive"
      },
      replies: 56,
      likes: 234,
      views: 678,
      timestamp: "12 hours ago",
      isPinned: false,
      tags: ["Body Positivity", "Confidence", "Self-Love"],
      lastReply: {
        author: "Maria Rodriguez",timestamp: "45 minutes ago"
      }
    },
    {
      id: 5,
      category: 'career-dressing',
      title: "Transitioning from corporate to creative industry - wardrobe help!",
      content: `I'm making a career switch from finance to graphic design and need to completely rethink my wardrobe. Going from suits and blazers to... what exactly?\n\nHow do you dress professionally in creative fields? Looking for that sweet spot between polished and creative expression. Budget-friendly suggestions welcome!`,
      author: {
        name: "Alex Johnson",username: "@alex_creative",avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",badge: "Career Changer"
      },
      replies: 41,
      likes: 67,
      views: 345,
      timestamp: "1 day ago",
      isPinned: false,
      tags: ["Career Fashion", "Creative Industry", "Professional Style"],
      lastReply: {
        author: "Sarah Chen",timestamp: "3 hours ago"
      }
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? forumPosts 
    : forumPosts?.filter(post => post?.category === selectedCategory);

  const getBadgeColor = (badge) => {
    const colors = {
      'Style Seeker': 'bg-blue-100 text-blue-800',
      'Eco Warrior': 'bg-green-100 text-green-800',
      'Trendsetter': 'bg-purple-100 text-purple-800',
      'Body Positive': 'bg-pink-100 text-pink-800',
      'Career Changer': 'bg-orange-100 text-orange-800'
    };
    return colors?.[badge] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar - Categories */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-lg border border-border p-6 sticky top-32">
            <h3 className="font-playfair font-semibold text-primary mb-4">Forum Categories</h3>
            <div className="space-y-2">
              {forumCategories?.map((category) => (
                <button
                  key={category?.id}
                  onClick={() => setSelectedCategory(category?.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg text-left smooth-transition ${
                    selectedCategory === category?.id
                      ? 'bg-accent/10 text-accent' :'text-muted-foreground hover:bg-muted hover:text-primary'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon name={category?.icon} size={16} />
                    <span className="text-sm font-medium">{category?.name}</span>
                  </div>
                  <span className="text-xs bg-muted px-2 py-1 rounded-full">
                    {category?.count}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <Button variant="default" fullWidth iconName="Plus" iconPosition="left">
                New Discussion
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content - Forum Posts */}
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-playfair font-bold text-primary">
              {selectedCategory === 'all' ? 'All Discussions' : forumCategories?.find(c => c?.id === selectedCategory)?.name}
            </h2>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" iconName="Search" size="sm">
                Search
              </Button>
              <Button variant="outline" iconName="Filter" size="sm">
                Filter
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {filteredPosts?.map((post) => (
              <div key={post?.id} className="bg-card rounded-lg border border-border p-6 editorial-shadow hover:shadow-lg smooth-transition">
                <div className="flex items-start space-x-4">
                  <Image
                    src={post?.author?.avatar}
                    alt={post?.author?.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  
                  <div className="flex-1 min-w-0">
                    {/* Post Header */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        {post?.isPinned && (
                          <Icon name="Pin" size={16} className="text-accent" />
                        )}
                        <h3 className="text-lg font-semibold text-primary hover:text-accent cursor-pointer smooth-transition">
                          {post?.title}
                        </h3>
                      </div>
                      <Button variant="ghost" iconName="MoreHorizontal" size="sm" />
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="font-medium text-primary">{post?.author?.name}</span>
                      <span className="text-sm text-muted-foreground">{post?.author?.username}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor(post?.author?.badge)}`}>
                        {post?.author?.badge}
                      </span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{post?.timestamp}</span>
                    </div>

                    {/* Post Content */}
                    <p className="text-foreground mb-4 line-clamp-3 whitespace-pre-line">
                      {post?.content}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post?.tags?.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block bg-muted text-muted-foreground px-2 py-1 rounded text-xs hover:bg-accent/10 hover:text-accent cursor-pointer smooth-transition"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Post Stats */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-1 text-muted-foreground">
                          <Icon name="MessageCircle" size={16} />
                          <span className="text-sm">{post?.replies} replies</span>
                        </div>
                        <div className="flex items-center space-x-1 text-muted-foreground">
                          <Icon name="Heart" size={16} />
                          <span className="text-sm">{post?.likes} likes</span>
                        </div>
                        <div className="flex items-center space-x-1 text-muted-foreground">
                          <Icon name="Eye" size={16} />
                          <span className="text-sm">{post?.views} views</span>
                        </div>
                      </div>

                      {post?.lastReply && (
                        <div className="text-sm text-muted-foreground">
                          Last reply by <span className="font-medium">{post?.lastReply?.author}</span> {post?.lastReply?.timestamp}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center py-8">
            <Button variant="outline" iconName="RefreshCw" iconPosition="left">
              Load More Discussions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityForums;