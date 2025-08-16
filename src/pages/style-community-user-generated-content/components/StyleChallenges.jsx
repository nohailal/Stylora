import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const StyleChallenges = () => {
  const [participatingChallenges, setParticipatingChallenges] = useState(new Set([1]));

  const activeChallenges = [
    {
      id: 1,
      title: "Sustainable Style Challenge",
      description: "Create stunning outfits using only sustainable, thrifted, or upcycled pieces. Show the world that eco-friendly fashion can be incredibly chic!",
      theme: "Sustainability",
      duration: "30 days",
      participants: 1247,
      submissions: 892,
      prize: "Featured in Stylora Magazine + $500 Sustainable Fashion Voucher",
      endDate: "2025-09-15",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      judge: {
        name: "Dr. Sarah Green",
        title: "Sustainable Fashion Expert",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
      },
      tags: ["Sustainability", "Eco-Fashion", "Thrifting"],
      difficulty: "Intermediate",
      isActive: true
    },
    {
      id: 2,
      title: "Confidence Boosters Challenge",
      description: "Share your most confidence-boosting outfit and the story behind why it makes you feel amazing. Inspire others to find their power pieces!",
      theme: "Self-Expression",
      duration: "14 days",
      participants: 2156,
      submissions: 1834,
      prize: "Personal Styling Session + Stylora Premium Membership",
      endDate: "2025-08-30",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=600&h=400&fit=crop",
      judge: {
        name: "Marcus Thompson",
        title: "Celebrity Stylist",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
      },
      tags: ["Confidence", "Self-Love", "Empowerment"],
      difficulty: "Beginner",
      isActive: true
    },
    {
      id: 3,
      title: "Cultural Fusion Fashion",
      description: "Blend traditional elements from your heritage with modern fashion. Celebrate diversity and show how cultural fashion can be contemporary and stylish.",
      theme: "Cultural Heritage",
      duration: "21 days",
      participants: 856,
      submissions: 423,
      prize: "Cultural Fashion Documentary Feature + $300 Shopping Credit",
      endDate: "2025-09-05",
      image: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?w=600&h=400&fit=crop",
      judge: {
        name: "Priya Sharma",
        title: "Cultural Fashion Historian",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
      },
      tags: ["Cultural", "Heritage", "Fusion"],
      difficulty: "Advanced",
      isActive: true
    }
  ];

  const pastChallenges = [
    {
      id: 4,
      title: "Minimalist Capsule Wardrobe",
      description: "Create 30 different outfits using only 15 pieces of clothing.",
      participants: 3421,
      winner: "Jessica Liu",
      winnerAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=300&fit=crop",
      completedDate: "July 2025"
    },
    {
      id: 5,
      title: "Color Psychology in Fashion",
      description: "Explore how different colors affect mood and confidence through styling.",
      participants: 2876,
      winner: "David Rodriguez",
      winnerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?w=600&h=300&fit=crop",
      completedDate: "June 2025"
    }
  ];

  const toggleParticipation = (challengeId) => {
    setParticipatingChallenges(prev => {
      const newSet = new Set(prev);
      if (newSet?.has(challengeId)) {
        newSet?.delete(challengeId);
      } else {
        newSet?.add(challengeId);
      }
      return newSet;
    });
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-success/10 text-success';
      case 'Intermediate': return 'bg-warning/10 text-warning';
      case 'Advanced': return 'bg-error/10 text-error';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Active Challenges */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-playfair font-bold text-primary">Active Challenges</h2>
          <Button variant="outline" iconName="Filter">
            Filter Challenges
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {activeChallenges?.map((challenge) => (
            <div key={challenge?.id} className="bg-card rounded-lg border border-border overflow-hidden editorial-shadow">
              <div className="relative">
                <Image
                  src={challenge?.image}
                  alt={challenge?.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(challenge?.difficulty)}`}>
                    {challenge?.difficulty}
                  </span>
                  <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
                    {challenge?.duration}
                  </span>
                </div>
                {participatingChallenges?.has(challenge?.id) && (
                  <div className="absolute top-4 right-4 bg-success text-success-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <Icon name="Check" size={12} />
                    <span>Joined</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-primary mb-2">
                  {challenge?.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {challenge?.description}
                </p>

                {/* Challenge Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Icon name="Users" size={14} />
                    <span>{challenge?.participants?.toLocaleString()} participants</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Image" size={14} />
                    <span>{challenge?.submissions} submissions</span>
                  </div>
                </div>

                {/* Judge Info */}
                <div className="flex items-center space-x-3 mb-4 p-3 bg-muted rounded-lg">
                  <Image
                    src={challenge?.judge?.avatar}
                    alt={challenge?.judge?.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-primary text-sm">{challenge?.judge?.name}</p>
                    <p className="text-xs text-muted-foreground">{challenge?.judge?.title}</p>
                  </div>
                </div>

                {/* Prize */}
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-3 mb-4">
                  <div className="flex items-start space-x-2">
                    <Icon name="Award" size={16} className="text-accent mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-accent mb-1">Prize</p>
                      <p className="text-xs text-muted-foreground">{challenge?.prize}</p>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {challenge?.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <Button
                  variant={participatingChallenges?.has(challenge?.id) ? "outline" : "default"}
                  fullWidth
                  iconName={participatingChallenges?.has(challenge?.id) ? "Check" : "Plus"}
                  iconPosition="left"
                  onClick={() => toggleParticipation(challenge?.id)}
                >
                  {participatingChallenges?.has(challenge?.id) ? "Participating" : "Join Challenge"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Past Challenges */}
      <div>
        <h2 className="text-2xl font-playfair font-bold text-primary mb-6">Past Challenges</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pastChallenges?.map((challenge) => (
            <div key={challenge?.id} className="bg-card rounded-lg border border-border overflow-hidden editorial-shadow">
              <div className="flex">
                <Image
                  src={challenge?.image}
                  alt={challenge?.title}
                  className="w-32 h-32 object-cover"
                />
                <div className="flex-1 p-4">
                  <h3 className="font-playfair font-semibold text-primary mb-2">
                    {challenge?.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {challenge?.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Image
                        src={challenge?.winnerAvatar}
                        alt={challenge?.winner}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-xs text-muted-foreground">Winner</p>
                        <p className="text-sm font-medium text-primary">{challenge?.winner}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">{challenge?.completedDate}</p>
                      <p className="text-sm font-medium text-primary">{challenge?.participants?.toLocaleString()} joined</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Create Challenge CTA */}
      <div className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-lg p-8 text-center">
        <Icon name="Lightbulb" size={48} className="text-accent mx-auto mb-4" />
        <h3 className="text-2xl font-playfair font-bold text-primary mb-2">
          Have a Challenge Idea?
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Share your creative challenge ideas with the community. The best suggestions become official Stylora challenges with amazing prizes!
        </p>
        <Button variant="default" iconName="Send" iconPosition="left">
          Submit Challenge Idea
        </Button>
      </div>
    </div>
  );
};

export default StyleChallenges;