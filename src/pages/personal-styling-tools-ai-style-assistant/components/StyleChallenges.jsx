import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const StyleChallenges = () => {
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [userSubmission, setUserSubmission] = useState(null);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  const challenges = [
    {
      id: 1,
      title: "One Piece, Three Ways",
      description: "Style the same key piece in three completely different looks - casual, professional, and evening.",
      difficulty: "Beginner",
      duration: "7 days",
      participants: 1247,
      prize: "Featured on Stylora\'s Instagram",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop",
      status: "active",
      deadline: "2025-01-23",
      rules: [
        "Use the same base piece in all three looks",
        "Show clear styling differences for each occasion",
        "Include accessories and layering pieces",
        "Submit high-quality photos with good lighting"
      ],
      tips: [
        "Choose a versatile piece like a white shirt or black dress",
        "Play with accessories to change the mood",
        "Consider different silhouettes through layering",
        "Don\'t forget about shoes - they can transform any look"
      ]
    },
    {
      id: 2,
      title: "Color Story Creation",
      description: "Create a cohesive outfit using only three colors. Show how color harmony can elevate your style.",
      difficulty: "Intermediate",
      duration: "5 days",
      participants: 892,
      prize: "$100 Stylora Credit",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=400&h=300&fit=crop",
      status: "active",
      deadline: "2025-01-20",
      rules: [
        "Use exactly three colors in your outfit",
        "Colors can be in different shades/tones",
        "Include explanation of your color choices",
        "Show how the colors complement each other"
      ],
      tips: [
        "Use the 60-30-10 color rule for balance",
        "Consider your skin tone when choosing colors",
        "Neutrals can be one of your three colors",
        "Think about color psychology and mood"
      ]
    },
    {
      id: 3,
      title: "Sustainable Style Swap",
      description: "Create new looks using only items you already own or borrowed pieces. No new purchases allowed!",
      difficulty: "Advanced",
      duration: "10 days",
      participants: 634,
      prize: "1-hour Virtual Styling Session",
      image: "https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_960_720.jpg?w=400&h=300&fit=crop",
      status: "upcoming",
      deadline: "2025-01-30",
      rules: [
        "No new purchases during the challenge",
        "Can borrow from friends/family",
        "Show before and after of reimagined pieces",
        "Include sustainability message"
      ],
      tips: [
        "Look at pieces in new ways",
        "Try unexpected combinations",
        "Use accessories to refresh old looks",
        "Consider alterations or DIY modifications"
      ]
    },
    {
      id: 4,
      title: "Texture Play",
      description: "Master the art of mixing textures. Create an outfit that combines at least four different textures harmoniously.",
      difficulty: "Intermediate",
      duration: "7 days",
      participants: 756,
      prize: "Featured in Style Education Hub",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=300&fit=crop",
      status: "completed",
      deadline: "2025-01-15",
      rules: [
        "Include minimum four different textures",
        "Textures should complement, not compete",
        "Explain your texture choices",
        "Show close-up details of textures"
      ],
      tips: [
        "Mix smooth and rough textures",
        "Balance heavy and light materials",
        "Consider seasonal appropriateness",
        "Use accessories to add texture variety"
      ]
    }
  ];

  const leaderboard = [
    {
      rank: 1,
      user: "StyleMaven_Emma",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop",
      points: 2840,
      badges: ["Color Expert", "Texture Master", "Sustainable Stylist"],
      completedChallenges: 12
    },
    {
      rank: 2,
      user: "FashionForward_Alex",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=50&h=50&fit=crop",
      points: 2650,
      badges: ["Trend Setter", "Mix Master"],
      completedChallenges: 10
    },
    {
      rank: 3,
      user: "ChicAndSustainable",
      avatar: "https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_960_720.jpg?w=50&h=50&fit=crop",
      points: 2420,
      badges: ["Eco Warrior", "Creative Genius"],
      completedChallenges: 9
    },
    {
      rank: 4,
      user: "MinimalistStyle_Jo",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop",
      points: 2180,
      badges: ["Minimalist Pro"],
      completedChallenges: 8
    },
    {
      rank: 5,
      user: "ColorfulCreator",
      avatar: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=50&h=50&fit=crop",
      points: 1950,
      badges: ["Color Expert", "Pattern Play"],
      completedChallenges: 7
    }
  ];

  const handleJoinChallenge = (challenge) => {
    setActiveChallenge(challenge);
  };

  const handleSubmission = () => {
    // Mock submission logic
    setUserSubmission({
      challengeId: activeChallenge?.id,
      submittedAt: new Date(),
      status: 'submitted'
    });
    alert('Your submission has been uploaded! Good luck in the challenge.');
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-success bg-success/10';
      case 'Intermediate': return 'text-warning bg-warning/10';
      case 'Advanced': return 'text-destructive bg-destructive/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-accent bg-accent/10';
      case 'upcoming': return 'text-primary bg-primary/10';
      case 'completed': return 'text-muted-foreground bg-muted';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  if (showLeaderboard) {
    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-playfair font-bold text-primary mb-2">
              Style Challenge Leaderboard
            </h3>
            <p className="text-muted-foreground">
              Top performers in our style challenges community
            </p>
          </div>
          <Button 
            variant="outline" 
            onClick={() => setShowLeaderboard(false)}
            iconName="ArrowLeft"
            iconPosition="left"
          >
            Back to Challenges
          </Button>
        </div>
        {/* Leaderboard */}
        <div className="bg-card rounded-lg p-8">
          <div className="space-y-4">
            {leaderboard?.map((user, index) => (
              <div key={user?.rank} className={`flex items-center space-x-4 p-4 rounded-lg ${
                index < 3 ? 'bg-accent/5 border border-accent/20' : 'bg-muted/30'
              }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                  user?.rank === 1 ? 'bg-yellow-500 text-white' :
                  user?.rank === 2 ? 'bg-gray-400 text-white' :
                  user?.rank === 3 ? 'bg-amber-600 text-white': 'bg-muted text-muted-foreground'
                }`}>
                  {user?.rank}
                </div>
                
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={user?.avatar}
                    alt={user?.user}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h5 className="font-semibold text-primary">{user?.user}</h5>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>{user?.completedChallenges} challenges completed</span>
                    <span>{user?.points} points</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {user?.badges?.map((badge, badgeIndex) => (
                    <span key={badgeIndex} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                      {badge}
                    </span>
                  ))}
                </div>

                {index < 3 && (
                  <Icon 
                    name={user?.rank === 1 ? "Crown" : user?.rank === 2 ? "Award" : "Medal"} 
                    size={20} 
                    className="text-accent" 
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Your Stats */}
        <div className="bg-card rounded-lg p-8">
          <h4 className="text-lg font-semibold text-primary mb-6">Your Challenge Stats</h4>
          <div className="grid sm:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-2">5</div>
              <div className="text-sm text-muted-foreground">Challenges Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-2">1,240</div>
              <div className="text-sm text-muted-foreground">Total Points</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-2">18</div>
              <div className="text-sm text-muted-foreground">Current Rank</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-2">3</div>
              <div className="text-sm text-muted-foreground">Badges Earned</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeChallenge) {
    return (
      <div className="space-y-8">
        {/* Challenge Header */}
        <div className="flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => setActiveChallenge(null)}
            iconName="ArrowLeft"
            iconPosition="left"
          >
            Back to Challenges
          </Button>
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={16} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Ends {activeChallenge?.deadline}
            </span>
          </div>
        </div>
        {/* Challenge Details */}
        <div className="bg-card rounded-lg overflow-hidden">
          <div className="aspect-[2/1] overflow-hidden">
            <Image
              src={activeChallenge?.image}
              alt={activeChallenge?.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(activeChallenge?.difficulty)}`}>
                {activeChallenge?.difficulty}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(activeChallenge?.status)}`}>
                {activeChallenge?.status}
              </span>
              <div className="flex items-center space-x-1">
                <Icon name="Users" size={14} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{activeChallenge?.participants} joined</span>
              </div>
            </div>

            <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
              {activeChallenge?.title}
            </h3>
            <p className="text-muted-foreground mb-6">
              {activeChallenge?.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Rules */}
              <div>
                <h4 className="font-semibold text-primary mb-4">Challenge Rules</h4>
                <div className="space-y-3">
                  {activeChallenge?.rules?.map((rule, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-xs font-medium text-accent">{index + 1}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{rule}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips */}
              <div>
                <h4 className="font-semibold text-primary mb-4">Pro Tips</h4>
                <div className="space-y-3">
                  {activeChallenge?.tips?.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon name="Lightbulb" size={16} className="text-accent mt-1" />
                      <span className="text-sm text-muted-foreground">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Prize */}
            <div className="mt-8 p-6 bg-accent/5 rounded-lg">
              <div className="flex items-center space-x-3">
                <Icon name="Trophy" size={24} className="text-accent" />
                <div>
                  <h5 className="font-semibold text-primary">Challenge Prize</h5>
                  <p className="text-sm text-muted-foreground">{activeChallenge?.prize}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Submission Section */}
        <div className="bg-card rounded-lg p-8">
          <h4 className="text-lg font-semibold text-primary mb-6">Submit Your Entry</h4>
          
          {!userSubmission ? (
            <div>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center mb-6">
                <Icon name="Upload" size={48} className="text-muted-foreground mx-auto mb-4" />
                <h5 className="font-semibold text-primary mb-2">Upload Your Photos</h5>
                <p className="text-sm text-muted-foreground mb-4">
                  Upload high-quality photos of your challenge entry
                </p>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  id="challenge-upload"
                />
                <label
                  htmlFor="challenge-upload"
                  className="inline-flex items-center px-4 py-2 bg-accent text-accent-foreground rounded-lg cursor-pointer hover:bg-accent/90 transition-colors"
                >
                  <Icon name="Camera" size={16} className="mr-2" />
                  Choose Photos
                </label>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-primary mb-2">
                  Describe Your Entry
                </label>
                <textarea
                  className="w-full p-3 border border-border rounded-lg resize-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  rows={4}
                  placeholder="Tell us about your styling choices, inspiration, and how you approached the challenge..."
                ></textarea>
              </div>

              <div className="flex justify-end">
                <Button 
                  variant="default" 
                  onClick={handleSubmission}
                  iconName="Send"
                  iconPosition="right"
                >
                  Submit Entry
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center p-8 bg-success/5 rounded-lg">
              <Icon name="CheckCircle" size={48} className="text-success mx-auto mb-4" />
              <h5 className="font-semibold text-primary mb-2">Entry Submitted!</h5>
              <p className="text-sm text-muted-foreground">
                Your challenge entry has been submitted successfully. Results will be announced after the challenge ends.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Trophy" size={32} className="text-accent" />
        </div>
        <h3 className="text-2xl font-playfair font-bold text-primary mb-2">
          Style Challenges
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join our community challenges to improve your styling skills, learn new techniques, and connect with fellow fashion enthusiasts. Win prizes and earn recognition!
        </p>
      </div>
      {/* Quick Stats */}
      <div className="grid sm:grid-cols-3 gap-6">
        <div className="bg-card rounded-lg p-6 text-center">
          <div className="text-2xl font-bold text-accent mb-2">12</div>
          <div className="text-sm text-muted-foreground">Active Challenges</div>
        </div>
        <div className="bg-card rounded-lg p-6 text-center">
          <div className="text-2xl font-bold text-accent mb-2">3,247</div>
          <div className="text-sm text-muted-foreground">Community Members</div>
        </div>
        <div className="bg-card rounded-lg p-6 text-center">
          <div className="text-2xl font-bold text-accent mb-2">156</div>
          <div className="text-sm text-muted-foreground">Prizes Awarded</div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex justify-center space-x-4">
        <Button 
          variant="outline" 
          onClick={() => setShowLeaderboard(true)}
          iconName="BarChart3"
          iconPosition="left"
        >
          View Leaderboard
        </Button>
        <Button variant="ghost" iconName="Award" iconPosition="left">
          My Achievements
        </Button>
      </div>
      {/* Challenges Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {challenges?.map(challenge => (
          <div key={challenge?.id} className="bg-card rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-all duration-300">
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={challenge?.image}
                alt={challenge?.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(challenge?.difficulty)}`}>
                  {challenge?.difficulty}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(challenge?.status)}`}>
                  {challenge?.status}
                </span>
                <div className="flex items-center space-x-1">
                  <Icon name="Clock" size={12} className="text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{challenge?.duration}</span>
                </div>
              </div>

              <h4 className="text-lg font-playfair font-bold text-primary mb-2">
                {challenge?.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                {challenge?.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  <Icon name="Users" size={14} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{challenge?.participants} joined</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Trophy" size={14} className="text-accent" />
                  <span className="text-xs text-accent font-medium">Prize Available</span>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  iconName="Eye"
                  iconPosition="left"
                  onClick={() => setActiveChallenge(challenge)}
                >
                  View Details
                </Button>
                {challenge?.status === 'active' && (
                  <Button 
                    variant="default" 
                    size="sm" 
                    iconName="Plus"
                    iconPosition="left"
                    onClick={() => handleJoinChallenge(challenge)}
                  >
                    Join Challenge
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StyleChallenges;