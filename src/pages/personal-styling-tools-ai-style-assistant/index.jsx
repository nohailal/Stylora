import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

// Import all components
import StyleDNAQuiz from './components/StyleDNAQuiz';
import OutfitBuilder from './components/OutfitBuilder';
import ColorPaletteAnalyzer from './components/ColorPaletteAnalyzer';
import WardrobeOptimizer from './components/WardrobeOptimizer';
import VirtualStylistBooking from './components/VirtualStylistBooking';
import StyleChallenges from './components/StyleChallenges';
import ProgressTracker from './components/ProgressTracker';

const PersonalStylingToolsAIStyleAssistant = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tools = [
    {
      id: 'style-dna',
      name: 'Style DNA Quiz',
      description: 'Discover your unique style personality through visual preferences and lifestyle questions',
      icon: 'Sparkles',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      component: StyleDNAQuiz
    },
    {
      id: 'outfit-builder',
      name: 'AI Outfit Builder',
      description: 'Mix and match pieces with AI-powered suggestions for perfect coordination',
      icon: 'Shirt',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      component: OutfitBuilder
    },
    {
      id: 'color-analyzer',
      name: 'Color Palette Analyzer',
      description: 'Find your most flattering colors through photo analysis or comprehensive quiz',
      icon: 'Palette',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      component: ColorPaletteAnalyzer
    },
    {
      id: 'wardrobe-optimizer',
      name: 'Wardrobe Optimizer',
      description: 'Analyze your wardrobe to identify gaps and maximize outfit combinations',
      icon: 'BarChart3',
      color: 'text-success',
      bgColor: 'bg-success/10',
      component: WardrobeOptimizer
    },
    {
      id: 'virtual-stylist',
      name: 'Virtual Stylist Booking',
      description: 'Book one-on-one sessions with expert stylists for personalized guidance',
      icon: 'Video',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      component: VirtualStylistBooking
    },
    {
      id: 'style-challenges',
      name: 'Style Challenges',
      description: 'Join community challenges to improve skills and win prizes',
      icon: 'Trophy',
      color: 'text-destructive',
      bgColor: 'bg-destructive/10',
      component: StyleChallenges
    },
    {
      id: 'progress-tracker',
      name: 'Progress Tracker',
      description: 'Track your style evolution and celebrate milestones',
      icon: 'TrendingUp',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      component: ProgressTracker
    }
  ];

  const renderActiveComponent = () => {
    if (activeTab === 'overview') return null;
    
    const tool = tools?.find(t => t?.id === activeTab);
    if (!tool) return null;
    
    const Component = tool?.component;
    return <Component />;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 px-6 lg:px-8 bg-gradient-to-br from-accent/5 to-primary/5">
          <div className="max-w-7xl mx-auto text-center">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Icon name="Sparkles" size={40} className="text-accent" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-primary mb-6">
              AI Style Assistant
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Unlock your style potential with our intelligent fashion tools. From discovering your style DNA to optimizing your wardrobe, let AI guide your fashion journey with personalized insights and expert recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                size="lg"
                onClick={() => setActiveTab('style-dna')}
                iconName="Sparkles"
                iconPosition="right"
              >
                Start Style Quiz
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setActiveTab('outfit-builder')}
                iconName="Shirt"
                iconPosition="right"
              >
                Build Outfits
              </Button>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex overflow-x-auto scrollbar-hide">
              <button
                onClick={() => setActiveTab('overview')}
                className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === 'overview' ?'border-accent text-accent' :'border-transparent text-muted-foreground hover:text-primary hover:border-muted'
                }`}
              >
                <Icon name="Grid3X3" size={16} />
                <span>All Tools</span>
              </button>
              {tools?.map(tool => (
                <button
                  key={tool?.id}
                  onClick={() => setActiveTab(tool?.id)}
                  className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tool?.id
                      ? 'border-accent text-accent' :'border-transparent text-muted-foreground hover:text-primary hover:border-muted'
                  }`}
                >
                  <Icon name={tool?.icon} size={16} />
                  <span>{tool?.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Area */}
        <section className="py-12 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {activeTab === 'overview' ? (
              <div className="space-y-16">
                {/* Tools Grid */}
                <div>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-playfair font-bold text-primary mb-4">
                      Your Personal Style Toolkit
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Explore our comprehensive suite of AI-powered styling tools designed to enhance your fashion journey and build lasting style confidence.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tools?.map(tool => (
                      <div
                        key={tool?.id}
                        className="bg-card rounded-lg p-8 border border-border hover:border-accent/50 transition-all duration-300 group cursor-pointer"
                        onClick={() => setActiveTab(tool?.id)}
                      >
                        <div className={`w-16 h-16 ${tool?.bgColor} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon name={tool?.icon} size={32} className={tool?.color} />
                        </div>
                        <h3 className="text-xl font-playfair font-bold text-primary mb-3">
                          {tool?.name}
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          {tool?.description}
                        </p>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          iconName="ArrowRight"
                          iconPosition="right"
                        >
                          Try Now
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features Highlight */}
                <div className="bg-card rounded-lg p-12">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-playfair font-bold text-primary mb-4">
                      Why Choose Our AI Style Assistant?
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Experience the future of personal styling with intelligent tools that learn and adapt to your unique preferences.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Icon name="Brain" size={32} className="text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold text-primary mb-3">AI-Powered Intelligence</h3>
                      <p className="text-muted-foreground">
                        Advanced algorithms analyze your preferences, body type, and lifestyle to provide personalized recommendations.
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Icon name="Users" size={32} className="text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-primary mb-3">Expert Guidance</h3>
                      <p className="text-muted-foreground">
                        Connect with professional stylists and learn from fashion experts through our virtual consultation platform.
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Icon name="TrendingUp" size={32} className="text-secondary" />
                      </div>
                      <h3 className="text-lg font-semibold text-primary mb-3">Continuous Learning</h3>
                      <p className="text-muted-foreground">
                        Track your progress, celebrate milestones, and watch your style confidence grow with detailed analytics.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Getting Started */}
                <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-12 text-center">
                  <h2 className="text-3xl font-playfair font-bold text-primary mb-4">
                    Ready to Transform Your Style?
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Start your personalized style journey today. Take our Style DNA Quiz to discover your unique fashion personality and unlock tailored recommendations.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      variant="default" 
                      size="lg"
                      onClick={() => setActiveTab('style-dna')}
                      iconName="Sparkles"
                      iconPosition="right"
                    >
                      Discover Your Style DNA
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      onClick={() => setActiveTab('virtual-stylist')}
                      iconName="Video"
                      iconPosition="right"
                    >
                      Book Expert Session
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                {renderActiveComponent()}
              </div>
            )}
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-12 h-12 bg-accent rounded-sm flex items-center justify-center mx-auto mb-6">
            <span className="text-accent-foreground font-playfair font-bold text-xl">S</span>
          </div>
          <p className="text-primary-foreground/80 mb-4">
            Empowering your style journey with intelligent fashion tools and expert guidance.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            © {new Date()?.getFullYear()} Stylora. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PersonalStylingToolsAIStyleAssistant;