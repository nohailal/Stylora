import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const StyleFeed = () => {
  const [likedPosts, setLikedPosts] = useState(new Set());

  const feedPosts = [
    {
      id: 1,
      user: {
        name: "Emma Rodriguez",
        username: "@emma_styles",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
      },
      type: "transformation",
      title: "From Casual to Chic: My Office Style Evolution",
      description: `Finally found my perfect work wardrobe formula! \n\nUsed Stylora's color palette tool to discover that jewel tones are my secret weapon. The confidence boost is incredible! 💫\n\n#StyleTransformation #OfficeStyle #StyloraFinds`,
      images: [
        "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop"
      ],
      tags: ["Office Style", "Color Analysis", "Confidence"],
      likes: 234,
      comments: 45,
      shares: 12,
      timestamp: "2 hours ago",
      isTransformation: true
    },
    {
      id: 2,
      user: {
        name: "Marcus Chen",
        username: "@marcus_minimal",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      type: "outfit",
      title: "Sustainable Sunday Vibes",
      description: `Thrifted blazer + vintage denim + ethical sneakers = perfect weekend look ♻️\n\nProud to be part of the sustainable fashion movement. Every piece tells a story!\n\n#SustainableFashion #ThriftFinds #EthicalStyle`,
      images: [
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?w=400&h=600&fit=crop"
      ],
      tags: ["Sustainable Fashion", "Thrift Finds", "Weekend Style"],
      likes: 189,
      comments: 28,
      shares: 34,
      timestamp: "4 hours ago"
    },
    {
      id: 3,
      user: {
        name: "Sophia Williams",
        username: "@sophia_chic",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      type: "challenge",
      title: "30-Day Capsule Wardrobe Challenge - Day 15",
      description: `Halfway through the capsule challenge and loving the creativity it's sparked! \n\nToday's look: mixing textures with my favorite neutral palette. Who else is participating?\n\n#CapsuleWardrobe #MinimalistStyle #30DayChallenge`,
      images: [
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop"
      ],
      tags: ["Capsule Wardrobe", "Challenge", "Minimalist"],
      likes: 156,
      comments: 67,
      shares: 23,
      timestamp: "6 hours ago",
      challengeTag: "30-Day Capsule"
    },
    {
      id: 4,
      user: {
        name: "Aisha Patel",
        username: "@aisha_fusion",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      type: "cultural",
      title: "Fusion Fashion: Blending Traditions",
      description: `Celebrating my heritage through modern styling! \n\nTraditional embroidered jacket with contemporary silhouettes. Fashion is the perfect way to honor our roots while expressing our present selves.\n\n#CulturalFusion #HeritageStyle #ModernTradition`,
      images: [
        "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?w=400&h=600&fit=crop"
      ],
      tags: ["Cultural Fashion", "Heritage Style", "Fusion"],
      likes: 298,
      comments: 52,
      shares: 41,
      timestamp: "8 hours ago"
    }
  ];

  const toggleLike = (postId) => {
    setLikedPosts(prev => {
      const newLiked = new Set(prev);
      if (newLiked?.has(postId)) {
        newLiked?.delete(postId);
      } else {
        newLiked?.add(postId);
      }
      return newLiked;
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {feedPosts?.map((post) => (
        <div key={post?.id} className="bg-card rounded-lg border border-border overflow-hidden editorial-shadow">
          {/* Post Header */}
          <div className="p-6 pb-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Image
                  src={post?.user?.avatar}
                  alt={post?.user?.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-primary">{post?.user?.name}</h3>
                  <p className="text-sm text-muted-foreground">{post?.user?.username} • {post?.timestamp}</p>
                </div>
              </div>
              <Button variant="ghost" iconName="MoreHorizontal" size="sm" />
            </div>

            {/* Post Title and Description */}
            <h2 className="text-xl font-playfair font-semibold text-primary mb-3">
              {post?.title}
            </h2>
            <p className="text-foreground whitespace-pre-line mb-4">
              {post?.description}
            </p>

            {/* Challenge Badge */}
            {post?.challengeTag && (
              <div className="inline-flex items-center space-x-1 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Icon name="Trophy" size={14} />
                <span>{post?.challengeTag}</span>
              </div>
            )}

            {/* Transformation Badge */}
            {post?.isTransformation && (
              <div className="inline-flex items-center space-x-1 bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Icon name="Sparkles" size={14} />
                <span>Style Transformation</span>
              </div>
            )}
          </div>

          {/* Post Images */}
          <div className={`${post?.images?.length > 1 ? 'grid grid-cols-2 gap-1' : ''}`}>
            {post?.images?.map((image, index) => (
              <div key={index} className="relative overflow-hidden">
                <Image
                  src={image}
                  alt={`${post?.title} - Image ${index + 1}`}
                  className="w-full h-80 object-cover hover:scale-105 smooth-transition cursor-pointer"
                />
                {post?.isTransformation && index === 0 && (
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
                    Before
                  </div>
                )}
                {post?.isTransformation && index === 1 && (
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-2 py-1 rounded text-sm font-medium">
                    After
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Post Actions */}
          <div className="p-6 pt-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-6">
                <button
                  onClick={() => toggleLike(post?.id)}
                  className={`flex items-center space-x-2 smooth-transition ${
                    likedPosts?.has(post?.id) ? 'text-red-500' : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  <Icon name={likedPosts?.has(post?.id) ? 'Heart' : 'Heart'} size={20} />
                  <span className="text-sm font-medium">
                    {likedPosts?.has(post?.id) ? post?.likes + 1 : post?.likes}
                  </span>
                </button>
                <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary smooth-transition">
                  <Icon name="MessageCircle" size={20} />
                  <span className="text-sm font-medium">{post?.comments}</span>
                </button>
                <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary smooth-transition">
                  <Icon name="Share" size={20} />
                  <span className="text-sm font-medium">{post?.shares}</span>
                </button>
              </div>
              <Button variant="ghost" iconName="Bookmark" size="sm" />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post?.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm hover:bg-accent/10 hover:text-accent cursor-pointer smooth-transition"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
      {/* Load More */}
      <div className="text-center py-8">
        <Button variant="outline" iconName="RefreshCw" iconPosition="left">
          Load More Posts
        </Button>
      </div>
    </div>
  );
};

export default StyleFeed;