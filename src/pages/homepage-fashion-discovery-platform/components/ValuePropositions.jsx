import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ValuePropositions = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const propositions = [
    {
      id: 1,
      icon: "Brain",
      title: "AI-Powered Styling",
      description: "Get personalized outfit recommendations based on your style DNA, body type, and lifestyle preferences.",
      features: ["Style DNA Analysis", "Smart Recommendations", "Trend Forecasting", "Color Palette Matching"],
      image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/personal-styling-tools-ai-style-assistant",
      color: "accent"
    },
    {
      id: 2,
      icon: "Crown",
      title: "Curated Collections",
      description: "Discover handpicked pieces from emerging designers and established fashion houses, curated by our style experts.",
      features: ["Designer Spotlights", "Seasonal Collections", "Exclusive Pieces", "Quality Assurance"],
      image: "https://images.pixabay.com/photo/2017/08/01/11/48/woman-2564660_1280.jpg",
      link: "/homepage-fashion-discovery-platform",
      color: "secondary"
    },
    {
      id: 3,
      icon: "Users",
      title: "Style Community",
      description: "Connect with fashion enthusiasts, share your looks, and get inspired by real people with authentic style.",
      features: ["Style Challenges", "Outfit Sharing", "Expert Advice", "Trend Discussions"],
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/style-community-user-generated-content",
      color: "success"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
            Your Fashion Journey Starts Here
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stylora combines cutting-edge technology with human expertise to create a personalized fashion experience that evolves with your style.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {propositions?.map((prop) => (
            <div
              key={prop?.id}
              className="group relative"
              onMouseEnter={() => setHoveredCard(prop?.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Link to={prop?.link} className="block">
                <div className="bg-card rounded-2xl overflow-hidden editorial-shadow smooth-transition group-hover:shadow-2xl product-card-hover">
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={prop?.image}
                      alt={prop?.title}
                      className="w-full h-full object-cover smooth-transition group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Icon Overlay */}
                    <div className={`absolute top-6 left-6 w-12 h-12 rounded-full flex items-center justify-center smooth-transition ${
                      prop?.color === 'accent' ? 'bg-accent/20 text-accent' :
                      prop?.color === 'secondary'? 'bg-secondary/20 text-secondary' : 'bg-success/20 text-success'
                    }`}>
                      <Icon name={prop?.icon} size={24} />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
                      {prop?.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {prop?.description}
                    </p>

                    {/* Features List */}
                    <div className={`space-y-3 mb-6 smooth-transition ${
                      hoveredCard === prop?.id ? 'opacity-100 max-h-40' : 'opacity-70 max-h-32'
                    } overflow-hidden`}>
                      {prop?.features?.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${
                            prop?.color === 'accent' ? 'bg-accent' :
                            prop?.color === 'secondary'? 'bg-secondary' : 'bg-success'
                          }`} />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${
                        prop?.color === 'accent' ? 'text-accent' :
                        prop?.color === 'secondary'? 'text-secondary' : 'text-success'
                      }`}>
                        Explore Now
                      </span>
                      <Icon 
                        name="ArrowRight" 
                        size={20} 
                        className={`smooth-transition group-hover:translate-x-1 ${
                          prop?.color === 'accent' ? 'text-accent' :
                          prop?.color === 'secondary'? 'text-secondary' : 'text-success'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;