import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProgressTracker = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('3months');
  const [showDetailedView, setShowDetailedView] = useState(false);

  const timeframes = [
    { value: '1month', label: '1 Month' },
    { value: '3months', label: '3 Months' },
    { value: '6months', label: '6 Months' },
    { value: '1year', label: '1 Year' }
  ];

  const progressData = {
    overallScore: 78,
    confidenceLevel: 85,
    styleConsistency: 72,
    colorHarmony: 81,
    totalOutfits: 47,
    favoriteStyles: ['Minimalist', 'Professional', 'Casual Chic'],
    improvements: [
      {
        area: 'Color Coordination',
        before: 65,
        after: 81,
        improvement: '+16 points'
      },
      {
        area: 'Outfit Versatility',
        before: 58,
        after: 74,
        improvement: '+16 points'
      },
      {
        area: 'Style Confidence',
        before: 70,
        after: 85,
        improvement: '+15 points'
      },
      {
        area: 'Accessory Usage',
        before: 45,
        after: 68,
        improvement: '+23 points'
      }
    ]
  };

  const milestones = [
    {
      id: 1,
      title: "First Style Quiz Completed",
      description: "Discovered your Style DNA as \'The Minimalist Maven'",
      date: "2024-11-15",
      type: "achievement",
      icon: "Award",
      completed: true
    },
    {
      id: 2,
      title: "Color Palette Mastery",
      description: "Successfully identified and applied your seasonal color palette",
      date: "2024-12-02",
      type: "skill",
      icon: "Palette",
      completed: true
    },
    {
      id: 3,
      title: "Wardrobe Optimization",
      description: "Increased outfit combinations by 40% through strategic additions",
      date: "2024-12-18",
      type: "improvement",
      icon: "TrendingUp",
      completed: true
    },
    {
      id: 4,
      title: "Style Challenge Winner",
      description: "Won 'One Piece, Three Ways' challenge with creative styling",
      date: "2025-01-05",
      type: "achievement",
      icon: "Trophy",
      completed: true
    },
    {
      id: 5,
      title: "Confidence Milestone",
      description: "Reached 85% style confidence score",
      date: "2025-01-12",
      type: "milestone",
      icon: "Star",
      completed: true
    },
    {
      id: 6,
      title: "Virtual Stylist Session",
      description: "Complete your first professional styling consultation",
      date: "2025-01-25",
      type: "goal",
      icon: "Video",
      completed: false
    },
    {
      id: 7,
      title: "Style Mentor",
      description: "Help 5 community members with styling advice",
      date: "2025-02-01",
      type: "goal",
      icon: "Users",
      completed: false
    }
  ];

  const beforeAfterComparisons = [
    {
      id: 1,
      title: "Professional Wardrobe Transformation",
      before: {
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
        description: "Limited professional options, mostly black and gray basics"
      },
      after: {
        image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=300&h=400&fit=crop",
        description: "Diverse professional wardrobe with color coordination and versatile pieces"
      },
      improvements: ["Added color variety", "Improved fit", "Better accessories", "Increased versatility"]
    },
    {
      id: 2,
      title: "Weekend Style Evolution",
      before: {
        image: "https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_960_720.jpg?w=300&h=400&fit=crop",
        description: "Casual looks lacked personality and coordination"
      },
      after: {
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=400&fit=crop",
        description: "Elevated casual style with thoughtful layering and personal touches"
      },
      improvements: ["Better proportions", "Strategic layering", "Personal style elements", "Confident styling"]
    }
  ];

  const getIconColor = (type) => {
    switch (type) {
      case 'achievement': return 'text-accent';
      case 'skill': return 'text-primary';
      case 'improvement': return 'text-success';
      case 'milestone': return 'text-warning';
      case 'goal': return 'text-muted-foreground';
      default: return 'text-muted-foreground';
    }
  };

  const getProgressColor = (score) => {
    if (score >= 80) return 'text-success';
    if (score >= 60) return 'text-warning';
    return 'text-destructive';
  };

  if (showDetailedView) {
    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-playfair font-bold text-primary mb-2">
              Detailed Progress Analysis
            </h3>
            <p className="text-muted-foreground">
              In-depth look at your style evolution over time
            </p>
          </div>
          <Button 
            variant="outline" 
            onClick={() => setShowDetailedView(false)}
            iconName="ArrowLeft"
            iconPosition="left"
          >
            Back to Overview
          </Button>
        </div>
        {/* Before/After Comparisons */}
        <div className="space-y-8">
          {beforeAfterComparisons?.map(comparison => (
            <div key={comparison?.id} className="bg-card rounded-lg p-8">
              <h4 className="text-lg font-semibold text-primary mb-6">{comparison?.title}</h4>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Before */}
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Icon name="ArrowLeft" size={16} className="text-muted-foreground" />
                    <h5 className="font-medium text-primary">Before</h5>
                  </div>
                  <div className="aspect-[3/4] rounded-lg overflow-hidden mb-4">
                    <Image
                      src={comparison?.before?.image}
                      alt="Before styling"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">{comparison?.before?.description}</p>
                </div>

                {/* After */}
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Icon name="ArrowRight" size={16} className="text-accent" />
                    <h5 className="font-medium text-primary">After</h5>
                  </div>
                  <div className="aspect-[3/4] rounded-lg overflow-hidden mb-4">
                    <Image
                      src={comparison?.after?.image}
                      alt="After styling"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{comparison?.after?.description}</p>
                  
                  <div className="space-y-2">
                    <h6 className="text-sm font-medium text-primary">Key Improvements:</h6>
                    {comparison?.improvements?.map((improvement, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="CheckCircle" size={14} className="text-success" />
                        <span className="text-sm text-muted-foreground">{improvement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Detailed Metrics */}
        <div className="bg-card rounded-lg p-8">
          <h4 className="text-lg font-semibold text-primary mb-6">Progress Metrics Over Time</h4>
          
          <div className="space-y-6">
            {progressData?.improvements?.map((improvement, index) => (
              <div key={index} className="border-l-4 border-accent pl-6">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-medium text-primary">{improvement?.area}</h5>
                  <span className="text-sm font-semibold text-success">{improvement?.improvement}</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Before: {improvement?.before}%</span>
                      <span className="text-primary">After: {improvement?.after}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-accent h-2 rounded-full transition-all duration-500"
                        style={{ width: `${improvement?.after}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="TrendingUp" size={32} className="text-accent" />
        </div>
        <h3 className="text-2xl font-playfair font-bold text-primary mb-2">
          Your Style Journey
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Track your style evolution, celebrate milestones, and see how your fashion confidence has grown over time.
        </p>
      </div>
      {/* Timeframe Selection */}
      <div className="flex justify-center">
        <div className="bg-muted rounded-lg p-1 flex">
          {timeframes?.map(timeframe => (
            <button
              key={timeframe?.value}
              onClick={() => setSelectedTimeframe(timeframe?.value)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                selectedTimeframe === timeframe?.value
                  ? 'bg-background text-primary shadow-sm'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {timeframe?.label}
            </button>
          ))}
        </div>
      </div>
      {/* Progress Overview */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-card rounded-lg p-6 text-center">
          <div className={`text-3xl font-bold mb-2 ${getProgressColor(progressData?.overallScore)}`}>
            {progressData?.overallScore}%
          </div>
          <div className="text-sm text-muted-foreground">Overall Style Score</div>
          <div className="w-full bg-muted rounded-full h-2 mt-3">
            <div 
              className="bg-accent h-2 rounded-full transition-all duration-500"
              style={{ width: `${progressData?.overallScore}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 text-center">
          <div className={`text-3xl font-bold mb-2 ${getProgressColor(progressData?.confidenceLevel)}`}>
            {progressData?.confidenceLevel}%
          </div>
          <div className="text-sm text-muted-foreground">Style Confidence</div>
          <div className="w-full bg-muted rounded-full h-2 mt-3">
            <div 
              className="bg-accent h-2 rounded-full transition-all duration-500"
              style={{ width: `${progressData?.confidenceLevel}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 text-center">
          <div className={`text-3xl font-bold mb-2 ${getProgressColor(progressData?.styleConsistency)}`}>
            {progressData?.styleConsistency}%
          </div>
          <div className="text-sm text-muted-foreground">Style Consistency</div>
          <div className="w-full bg-muted rounded-full h-2 mt-3">
            <div 
              className="bg-accent h-2 rounded-full transition-all duration-500"
              style={{ width: `${progressData?.styleConsistency}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-accent mb-2">{progressData?.totalOutfits}</div>
          <div className="text-sm text-muted-foreground">Outfits Created</div>
          <div className="flex items-center justify-center mt-3">
            <Icon name="Shirt" size={16} className="text-accent" />
          </div>
        </div>
      </div>
      {/* Achievements Timeline */}
      <div className="bg-card rounded-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-lg font-semibold text-primary">Style Milestones</h4>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setShowDetailedView(true)}
            iconName="Eye"
            iconPosition="left"
          >
            View Details
          </Button>
        </div>

        <div className="space-y-6">
          {milestones?.map((milestone, index) => (
            <div key={milestone?.id} className="flex items-start space-x-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                milestone?.completed ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground'
              }`}>
                <Icon name={milestone?.icon} size={20} />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h5 className={`font-medium ${milestone?.completed ? 'text-primary' : 'text-muted-foreground'}`}>
                    {milestone?.title}
                  </h5>
                  <span className="text-sm text-muted-foreground">{milestone?.date}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{milestone?.description}</p>
                
                {milestone?.completed ? (
                  <div className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={14} className="text-success" />
                    <span className="text-xs text-success font-medium">Completed</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={14} className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Upcoming Goal</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Style Insights */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Favorite Styles */}
        <div className="bg-card rounded-lg p-6">
          <h4 className="font-semibold text-primary mb-4">Your Style Evolution</h4>
          <div className="space-y-3">
            {progressData?.favoriteStyles?.map((style, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <span className="text-sm font-medium text-primary">{style}</span>
                <div className="flex items-center space-x-1">
                  <Icon name="TrendingUp" size={14} className="text-accent" />
                  <span className="text-xs text-accent">Growing</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="bg-card rounded-lg p-6">
          <h4 className="font-semibold text-primary mb-4">Recent Achievements</h4>
          <div className="space-y-3">
            {milestones?.filter(m => m?.completed)?.slice(-3)?.map(achievement => (
              <div key={achievement?.id} className="flex items-center space-x-3 p-3 bg-accent/5 rounded-lg">
                <Icon name={achievement?.icon} size={16} className="text-accent" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-primary truncate">{achievement?.title}</p>
                  <p className="text-xs text-muted-foreground">{achievement?.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="outline" iconName="Download" iconPosition="left">
          Download Progress Report
        </Button>
        <Button variant="default" iconName="Share2" iconPosition="left">
          Share Journey
        </Button>
        <Button variant="ghost" iconName="Target" iconPosition="left">
          Set New Goals
        </Button>
      </div>
    </div>
  );
};

export default ProgressTracker;