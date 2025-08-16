import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CallToAction = () => {
  const features = [
    {
      icon: "Brain",
      title: "AI Style Analysis",
      description: "Discover your unique style DNA"
    },
    {
      icon: "Crown",
      title: "Curated Collections",
      description: "Access exclusive designer pieces"
    },
    {
      icon: "Users",
      title: "Style Community",
      description: "Connect with fashion enthusiasts"
    },
    {
      icon: "Sparkles",
      title: "Personal Styling",
      description: "Get expert styling advice"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-white/20 rounded-full" />
        <div className="absolute bottom-10 right-10 w-20 h-20 border border-white/20 rounded-full" />
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white border border-white/30">
                <Icon name="Sparkles" size={16} className="mr-2" />
                Start Your Style Journey
              </span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
              Discover Your
              <span className="block text-accent">Style DNA</span>
            </h2>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join thousands of fashion enthusiasts who have transformed their style with Stylora's AI-powered platform. Your perfect wardrobe is just a click away.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features?.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name={feature?.icon} size={16} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">{feature?.title}</h4>
                    <p className="text-sm text-white/70">{feature?.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/personal-styling-tools-ai-style-assistant">
                <Button 
                  variant="default" 
                  size="lg"
                  iconName="Sparkles"
                  iconPosition="left"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto"
                >
                  Take Style DNA Quiz
                </Button>
              </Link>
              <Link to="/style-community-user-generated-content">
                <Button 
                  variant="outline" 
                  size="lg"
                  iconName="Users"
                  iconPosition="left"
                  className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  Join Community
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 mt-8 text-white/70">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} />
                <span className="text-sm">Secure & Private</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Star" size={16} />
                <span className="text-sm">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} />
                <span className="text-sm">50K+ Users</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Image */}
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden editorial-shadow">
                <Image
                  src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Style transformation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Floating Elements */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <Icon name="Sparkles" size={16} className="text-accent" />
                    <span className="text-sm font-medium text-primary">Style Match: 98%</span>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <Icon name="Heart" size={16} className="text-accent" />
                    <span className="text-sm font-medium text-primary">Confidence Boost</span>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 editorial-shadow">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name="Brain" size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primary">AI Analysis</p>
                    <p className="text-xs text-muted-foreground">Complete</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 editorial-shadow">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle" size={20} className="text-success" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primary">Style Found</p>
                    <p className="text-xs text-muted-foreground">Perfect Match</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-8 left-8 w-full h-full bg-accent/20 rounded-2xl" />
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-white mb-2">2 min</div>
            <div className="text-white/70">Style DNA Quiz</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-white mb-2">24/7</div>
            <div className="text-white/70">AI Styling Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-white mb-2">Free</div>
            <div className="text-white/70">Community Access</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-white mb-2">∞</div>
            <div className="text-white/70">Style Possibilities</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;