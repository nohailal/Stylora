import React, { useState } from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const StyleFeed = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const feedItems = [
    {
      id: 1,
      type: 'community',
      user: {
        name: "Sarah Chen",
        avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
        verified: true
      },
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Minimalist Autumn Vibes",
      description: "Loving this cozy yet chic combination for the season transition. The neutral palette creates such a calming aesthetic.",
      likes: 234,
      comments: 18,
      tags: ["minimalist", "autumn", "neutral"],
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      type: 'challenge',
      image: "https://images.pixabay.com/photo/2016/03/27/22/16/fashion-1284496_1280.jpg",
      title: "Style Challenge: Monochrome Magic",
      description: "This week\'s challenge focuses on creating stunning looks using a single color palette. Show us your monochrome mastery!",
      participants: 156,
      deadline: "5 days left",
      prize: "Featured on Stylora\'s main page",
      tags: ["challenge", "monochrome", "styling"]
    },
    {
      id: 3,
      type: 'designer',
      designer: {
        name: "Elena Rodriguez",
        brand: "Sustainable Threads",
        avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Eco-Luxury Collection Launch",
      description: "Introducing our latest sustainable fashion line that proves luxury and environmental consciousness can coexist beautifully.",
      collection: "Spring Renewal 2024",
      pieces: 24,
      tags: ["sustainable", "luxury", "eco-friendly"]
    },
    {
      id: 4,
      type: 'community',
      user: {
        name: "Marcus Johnson",
        avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
        verified: false
      },
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Street Style Inspiration",
      description: "Found this amazing vintage jacket at a local thrift store. Sometimes the best pieces have the most interesting stories.",
      likes: 89,
      comments: 12,
      tags: ["streetstyle", "vintage", "thrift"],
      timestamp: "4 hours ago"
    },
    {
      id: 5,
      type: 'trend',
      image: "https://images.pixabay.com/photo/2017/08/01/11/48/woman-2564660_1280.jpg",
      title: "Trending Now: Textured Layers",
      description: "Layering different textures is dominating fashion feeds this season. From knits to leather, mixing materials creates visual interest.",
      trendScore: 94,
      mentions: 1247,
      tags: ["trending", "textures", "layering"]
    },
    {
      id: 6,
      type: 'community',
      user: {
        name: "Priya Patel",
        avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400",
        verified: true
      },
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Cultural Fusion Fashion",
      description: "Blending traditional Indian textiles with contemporary silhouettes. Fashion is about celebrating heritage while embracing modernity.",
      likes: 312,
      comments: 28,
      tags: ["cultural", "fusion", "traditional"],
      timestamp: "6 hours ago"
    }
  ];

  const filters = [
    { id: 'all', label: 'All', icon: 'Grid3X3' },
    { id: 'community', label: 'Community', icon: 'Users' },
    { id: 'challenge', label: 'Challenges', icon: 'Trophy' },
    { id: 'designer', label: 'Designers', icon: 'Crown' },
    { id: 'trend', label: 'Trending', icon: 'TrendingUp' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? feedItems 
    : feedItems?.filter(item => item?.type === activeFilter);

  const renderFeedItem = (item) => {
    switch (item?.type) {
      case 'community':
        return (
          <div key={item?.id} className="bg-card rounded-2xl overflow-hidden editorial-shadow smooth-transition hover:shadow-lg">
            <div className="relative">
              <Image
                src={item?.image}
                alt={item?.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 right-4">
                <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 smooth-transition">
                  <Icon name="Heart" size={20} />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src={item?.user?.avatar}
                  alt={item?.user?.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium text-primary">{item?.user?.name}</h4>
                    {item?.user?.verified && (
                      <Icon name="BadgeCheck" size={16} className="text-accent" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{item?.timestamp}</p>
                </div>
              </div>
              
              <h3 className="text-lg font-playfair font-bold text-primary mb-2">
                {item?.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {item?.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {item?.tags?.map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-muted rounded-full text-xs text-muted-foreground">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 text-muted-foreground hover:text-accent smooth-transition">
                    <Icon name="Heart" size={18} />
                    <span className="text-sm">{item?.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-muted-foreground hover:text-accent smooth-transition">
                    <Icon name="MessageCircle" size={18} />
                    <span className="text-sm">{item?.comments}</span>
                  </button>
                </div>
                <button className="text-muted-foreground hover:text-accent smooth-transition">
                  <Icon name="Share2" size={18} />
                </button>
              </div>
            </div>
          </div>
        );

      case 'challenge':
        return (
          <div key={item?.id} className="bg-card rounded-2xl overflow-hidden editorial-shadow smooth-transition hover:shadow-lg">
            <div className="relative">
              <Image
                src={item?.image}
                alt={item?.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground">
                  <Icon name="Trophy" size={14} className="mr-1" />
                  Challenge
                </span>
              </div>
              <div className="absolute bottom-4 right-4 text-white">
                <span className="text-sm font-medium">{item?.deadline}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-playfair font-bold text-primary mb-2">
                {item?.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {item?.description}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={16} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{item?.participants} participants</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Gift" size={16} className="text-accent" />
                  <span className="text-sm text-accent">Prize Available</span>
                </div>
              </div>
              
              <Button variant="outline" fullWidth iconName="Plus" iconPosition="left">
                Join Challenge
              </Button>
            </div>
          </div>
        );

      case 'designer':
        return (
          <div key={item?.id} className="bg-card rounded-2xl overflow-hidden editorial-shadow smooth-transition hover:shadow-lg">
            <div className="relative">
              <Image
                src={item?.image}
                alt={item?.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/20 text-secondary border border-secondary/30">
                  <Icon name="Crown" size={14} className="mr-1" />
                  Designer
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src={item?.designer?.avatar}
                  alt={item?.designer?.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-primary">{item?.designer?.name}</h4>
                  <p className="text-sm text-muted-foreground">{item?.designer?.brand}</p>
                </div>
              </div>
              
              <h3 className="text-lg font-playfair font-bold text-primary mb-2">
                {item?.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {item?.description}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm font-medium text-primary">{item?.collection}</p>
                  <p className="text-sm text-muted-foreground">{item?.pieces} pieces</p>
                </div>
                <Button variant="outline" size="sm">
                  View Collection
                </Button>
              </div>
            </div>
          </div>
        );

      case 'trend':
        return (
          <div key={item?.id} className="bg-card rounded-2xl overflow-hidden editorial-shadow smooth-transition hover:shadow-lg">
            <div className="relative">
              <Image
                src={item?.image}
                alt={item?.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-success/20 text-success border border-success/30">
                  <Icon name="TrendingUp" size={14} className="mr-1" />
                  Trending
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-white text-sm font-medium">{item?.trendScore}%</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-playfair font-bold text-primary mb-2">
                {item?.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {item?.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="MessageSquare" size={16} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{item?.mentions} mentions</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" iconName="ExternalLink">
                  Explore Trend
                </Button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
            Style Feed
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the latest trends, styling challenges, and community inspiration from fashion enthusiasts worldwide.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters?.map((filter) => (
            <button
              key={filter?.id}
              onClick={() => setActiveFilter(filter?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium smooth-transition ${
                activeFilter === filter?.id
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <Icon name={filter?.icon} size={16} />
              <span>{filter?.label}</span>
            </button>
          ))}
        </div>

        {/* Feed Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems?.map(renderFeedItem)}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg" iconName="RefreshCw" iconPosition="left">
            Load More Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StyleFeed;