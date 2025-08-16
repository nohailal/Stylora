import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const StyleDNAQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Which aesthetic speaks to your soul?",
      type: "visual",
      options: [
        {
          id: "minimalist",
          label: "Clean Minimalism",
          image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop",
          description: "Less is more philosophy"
        },
        {
          id: "bohemian",
          label: "Bohemian Spirit",
          image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=300&h=200&fit=crop",
          description: "Free-spirited and artistic"
        },
        {
          id: "classic",
          label: "Timeless Classic",
          image: "https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_960_720.jpg?w=300&h=200&fit=crop",
          description: "Elegant and sophisticated"
        },
        {
          id: "edgy",
          label: "Modern Edge",
          image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=200&fit=crop",
          description: "Bold and contemporary"
        }
      ]
    },
    {
      id: 2,
      question: "Your ideal weekend outfit includes:",
      type: "multiple",
      options: [
        { id: "comfort", label: "Cozy knits and soft fabrics", icon: "Heart" },
        { id: "structured", label: "Tailored pieces with clean lines", icon: "Square" },
        { id: "flowing", label: "Flowing silhouettes and natural textures", icon: "Wind" },
        { id: "statement", label: "Bold patterns and eye-catching details", icon: "Star" }
      ]
    },
    {
      id: 3,
      question: "Which color palette energizes you most?",
      type: "color",
      options: [
        {
          id: "earth",
          label: "Earth Tones",
          colors: ["#8B7355", "#A67C5A", "#7A8471", "#C49B61"],
          description: "Warm and grounding"
        },
        {
          id: "monochrome",
          label: "Monochrome",
          colors: ["#1A1A1A", "#2C2C2C", "#6B6B6B", "#FFFFFF"],
          description: "Sophisticated and timeless"
        },
        {
          id: "jewel",
          label: "Jewel Tones",
          colors: ["#2E4057", "#048A81", "#54C6EB", "#F18F01"],
          description: "Rich and luxurious"
        },
        {
          id: "soft",
          label: "Soft Pastels",
          colors: ["#F8E8E8", "#E8F4F8", "#F0F8E8", "#F8F0E8"],
          description: "Gentle and romantic"
        }
      ]
    },
    {
      id: 4,
      question: "Your lifestyle is best described as:",
      type: "lifestyle",
      options: [
        {
          id: "professional",
          label: "Corporate Professional",
          icon: "Briefcase",
          description: "Meetings, presentations, networking events"
        },
        {
          id: "creative",
          label: "Creative Professional",
          icon: "Palette",
          description: "Flexible schedule, artistic expression"
        },
        {
          id: "social",
          label: "Social Butterfly",
          icon: "Users",
          description: "Events, gatherings, active social life"
        },
        {
          id: "balanced",
          label: "Work-Life Balance",
          icon: "Scale",
          description: "Mix of professional and personal time"
        }
      ]
    }
  ];

  const styleProfiles = {
    minimalist: {
      name: "The Minimalist Maven",
      description: "You believe in the power of simplicity and quality over quantity. Your style is characterized by clean lines, neutral colors, and timeless pieces that work effortlessly together.",
      traits: ["Quality over quantity", "Clean aesthetics", "Versatile basics", "Sustainable choices"],
      colors: ["#1A1A1A", "#FFFFFF", "#F8F6F3", "#6B6B6B"],
      recommendations: ["Invest in quality basics", "Focus on fit and fabric", "Build a capsule wardrobe", "Choose timeless over trendy"]
    },
    bohemian: {
      name: "The Bohemian Spirit",
      description: "You're drawn to artistic expression and free-spirited style. Your wardrobe tells stories through textures, patterns, and unique pieces that reflect your creative soul.",
      traits: ["Artistic expression", "Mixed textures", "Vintage finds", "Cultural influences"],
      colors: ["#8B7355", "#A67C5A", "#7A8471", "#C49B61"],
      recommendations: ["Mix patterns confidently", "Layer different textures", "Incorporate vintage pieces", "Express your creativity"]
    },
    classic: {
      name: "The Timeless Classic",
      description: "You appreciate elegance and sophistication that never goes out of style. Your wardrobe is built on foundation pieces that exude confidence and refinement.",
      traits: ["Timeless elegance", "Sophisticated choices", "Investment pieces", "Polished appearance"],
      colors: ["#2C2C2C", "#FFFFFF", "#D4A574", "#6B6B6B"],
      recommendations: ["Invest in quality staples", "Perfect your fit", "Choose classic silhouettes", "Add subtle luxury details"]
    },
    edgy: {
      name: "The Modern Edge",
      description: "You\'re not afraid to make a statement and push boundaries. Your style combines contemporary trends with bold choices that reflect your confident personality.",
      traits: ["Bold statements", "Trend awareness", "Confident choices", "Modern silhouettes"],
      colors: ["#1A1A1A", "#D4A574", "#2C2C2C", "#A67C5A"],
      recommendations: ["Experiment with trends", "Make bold statements", "Mix high and low", "Trust your instincts"]
    }
  };

  const handleAnswer = (questionId, answerId) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerId
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions?.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateResults();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateResults = () => {
    // Simple algorithm to determine style profile based on answers
    const styleScores = {
      minimalist: 0,
      bohemian: 0,
      classic: 0,
      edgy: 0
    };

    // Score based on answers (simplified logic)
    Object.values(answers)?.forEach(answer => {
      if (answer === 'minimalist' || answer === 'structured' || answer === 'monochrome' || answer === 'professional') {
        styleScores.minimalist++;
        styleScores.classic++;
      }
      if (answer === 'bohemian' || answer === 'flowing' || answer === 'earth' || answer === 'creative') {
        styleScores.bohemian++;
      }
      if (answer === 'classic' || answer === 'structured' || answer === 'monochrome' || answer === 'professional') {
        styleScores.classic++;
      }
      if (answer === 'edgy' || answer === 'statement' || answer === 'jewel' || answer === 'social') {
        styleScores.edgy++;
      }
    });

    const dominantStyle = Object.keys(styleScores)?.reduce((a, b) => 
      styleScores?.[a] > styleScores?.[b] ? a : b
    );

    setShowResults(dominantStyle);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setQuizStarted(false);
  };

  if (!quizStarted) {
    return (
      <div className="bg-card rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="Sparkles" size={32} className="text-accent" />
        </div>
        <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
          Discover Your Style DNA
        </h3>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Take our interactive quiz to uncover your unique style personality and get personalized recommendations that truly reflect who you are.
        </p>
        <div className="flex items-center justify-center space-x-6 mb-8">
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={16} className="text-accent" />
            <span className="text-sm text-muted-foreground">3 minutes</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Target" size={16} className="text-accent" />
            <span className="text-sm text-muted-foreground">4 questions</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Award" size={16} className="text-accent" />
            <span className="text-sm text-muted-foreground">Personal profile</span>
          </div>
        </div>
        <Button 
          variant="default" 
          size="lg" 
          onClick={() => setQuizStarted(true)}
          iconName="ArrowRight"
          iconPosition="right"
        >
          Start Style Quiz
        </Button>
      </div>
    );
  }

  if (showResults) {
    const profile = styleProfiles?.[showResults];
    return (
      <div className="bg-card rounded-lg p-8">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="Crown" size={40} className="text-accent" />
          </div>
          <h3 className="text-3xl font-playfair font-bold text-primary mb-2">
            {profile?.name}
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {profile?.description}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-primary mb-4">Your Style Traits</h4>
            <div className="space-y-3">
              {profile?.traits?.map((trait, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">{trait}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-4">Your Color Palette</h4>
            <div className="flex space-x-2 mb-4">
              {profile?.colors?.map((color, index) => (
                <div
                  key={index}
                  className="w-12 h-12 rounded-lg border border-border"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h4 className="font-semibold text-primary mb-4">Personalized Recommendations</h4>
          <div className="grid sm:grid-cols-2 gap-4">
            {profile?.recommendations?.map((rec, index) => (
              <div key={index} className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-accent mt-1" />
                  <span className="text-sm text-muted-foreground">{rec}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" onClick={resetQuiz} iconName="RotateCcw" iconPosition="left">
            Retake Quiz
          </Button>
          <Button variant="default" iconName="Download" iconPosition="left">
            Save Style Profile
          </Button>
          <Button variant="ghost" iconName="Share2" iconPosition="left">
            Share Results
          </Button>
        </div>
      </div>
    );
  }

  const question = questions?.[currentQuestion];
  const progress = ((currentQuestion + 1) / questions?.length) * 100;

  return (
    <div className="bg-card rounded-lg p-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {questions?.length}
          </span>
          <span className="text-sm text-accent font-medium">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-accent h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      {/* Question */}
      <div className="mb-8">
        <h3 className="text-2xl font-playfair font-bold text-primary mb-6">
          {question?.question}
        </h3>

        {/* Visual Options */}
        {question?.type === 'visual' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {question?.options?.map((option) => (
              <button
                key={option?.id}
                onClick={() => handleAnswer(question?.id, option?.id)}
                className={`group relative overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                  answers?.[question?.id] === option?.id
                    ? 'border-accent shadow-lg'
                    : 'border-border hover:border-accent/50'
                }`}
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <Image
                    src={option?.image}
                    alt={option?.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-left">
                  <h4 className="font-semibold text-primary mb-1">{option?.label}</h4>
                  <p className="text-sm text-muted-foreground">{option?.description}</p>
                </div>
                {answers?.[question?.id] === option?.id && (
                  <div className="absolute top-3 right-3 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Check" size={14} className="text-accent-foreground" />
                  </div>
                )}
              </button>
            ))}
          </div>
        )}

        {/* Multiple Choice Options */}
        {question?.type === 'multiple' && (
          <div className="grid sm:grid-cols-2 gap-4">
            {question?.options?.map((option) => (
              <button
                key={option?.id}
                onClick={() => handleAnswer(question?.id, option?.id)}
                className={`flex items-center space-x-4 p-4 rounded-lg border-2 text-left transition-all duration-300 ${
                  answers?.[question?.id] === option?.id
                    ? 'border-accent bg-accent/5' :'border-border hover:border-accent/50 hover:bg-muted/50'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  answers?.[question?.id] === option?.id ? 'bg-accent text-accent-foreground' : 'bg-muted'
                }`}>
                  <Icon name={option?.icon} size={20} />
                </div>
                <span className="font-medium text-primary">{option?.label}</span>
              </button>
            ))}
          </div>
        )}

        {/* Color Options */}
        {question?.type === 'color' && (
          <div className="grid sm:grid-cols-2 gap-6">
            {question?.options?.map((option) => (
              <button
                key={option?.id}
                onClick={() => handleAnswer(question?.id, option?.id)}
                className={`p-6 rounded-lg border-2 text-left transition-all duration-300 ${
                  answers?.[question?.id] === option?.id
                    ? 'border-accent bg-accent/5' :'border-border hover:border-accent/50'
                }`}
              >
                <div className="flex space-x-2 mb-4">
                  {option?.colors?.map((color, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 rounded-full border border-border"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
                <h4 className="font-semibold text-primary mb-1">{option?.label}</h4>
                <p className="text-sm text-muted-foreground">{option?.description}</p>
              </button>
            ))}
          </div>
        )}

        {/* Lifestyle Options */}
        {question?.type === 'lifestyle' && (
          <div className="grid sm:grid-cols-2 gap-4">
            {question?.options?.map((option) => (
              <button
                key={option?.id}
                onClick={() => handleAnswer(question?.id, option?.id)}
                className={`p-6 rounded-lg border-2 text-left transition-all duration-300 ${
                  answers?.[question?.id] === option?.id
                    ? 'border-accent bg-accent/5' :'border-border hover:border-accent/50'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                  answers?.[question?.id] === option?.id ? 'bg-accent text-accent-foreground' : 'bg-muted'
                }`}>
                  <Icon name={option?.icon} size={24} />
                </div>
                <h4 className="font-semibold text-primary mb-2">{option?.label}</h4>
                <p className="text-sm text-muted-foreground">{option?.description}</p>
              </button>
            ))}
          </div>
        )}
      </div>
      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button
          variant="ghost"
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
          iconName="ArrowLeft"
          iconPosition="left"
        >
          Previous
        </Button>

        <Button
          variant="default"
          onClick={nextQuestion}
          disabled={!answers?.[question?.id]}
          iconName={currentQuestion === questions?.length - 1 ? "Sparkles" : "ArrowRight"}
          iconPosition="right"
        >
          {currentQuestion === questions?.length - 1 ? "Get Results" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default StyleDNAQuiz;