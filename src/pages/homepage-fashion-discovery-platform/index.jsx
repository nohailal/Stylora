import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ValuePropositions from './components/ValuePropositions';
import StyleFeed from './components/StyleFeed';
import FeaturedCollections from './components/FeaturedCollections';
import SocialProof from './components/SocialProof';
import CallToAction from './components/CallToAction';

const HomepageFashionDiscoveryPlatform = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Stylora - Discover Your Style DNA | Fashion Discovery Platform</title>
        <meta 
          name="description" 
          content="Transform your fashion journey with Stylora's AI-powered styling platform. Discover curated collections, connect with style enthusiasts, and unlock your unique style DNA." 
        />
        <meta name="keywords" content="fashion, style, AI styling, personal stylist, fashion discovery, curated collections, style community" />
        <meta property="og:title" content="Stylora - Discover Your Style DNA" />
        <meta property="og:description" content="Transform your fashion journey with AI-powered styling and curated collections" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/homepage-fashion-discovery-platform" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <HeroSection />
          
          {/* Value Propositions */}
          <ValuePropositions />
          
          {/* Style Feed */}
          <StyleFeed />
          
          {/* Featured Collections */}
          <FeaturedCollections />
          
          {/* Social Proof */}
          <SocialProof />
          
          {/* Call to Action */}
          <CallToAction />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Brand */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
                    <span className="text-accent-foreground font-playfair font-bold text-lg">S</span>
                  </div>
                  <span className="font-playfair font-bold text-2xl text-primary-foreground">
                    Stylora
                  </span>
                </div>
                <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
                  Discover your unique style DNA with AI-powered fashion insights, curated collections, and a vibrant community of style enthusiasts.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground smooth-transition">
                    <span className="sr-only">Instagram</span>
                    📷
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground smooth-transition">
                    <span className="sr-only">Twitter</span>
                    🐦
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground smooth-transition">
                    <span className="sr-only">Pinterest</span>
                    📌
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-playfair font-bold text-lg text-primary-foreground mb-4">
                  Discover
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href="/personal-styling-tools-ai-style-assistant" className="text-primary-foreground/80 hover:text-accent smooth-transition">
                      AI Style Assistant
                    </a>
                  </li>
                  <li>
                    <a href="/style-community-user-generated-content" className="text-primary-foreground/80 hover:text-accent smooth-transition">
                      Style Community
                    </a>
                  </li>
                  <li>
                    <a href="/style-education-hub-fashion-knowledge" className="text-primary-foreground/80 hover:text-accent smooth-transition">
                      Fashion Education
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary-foreground/80 hover:text-accent smooth-transition">
                      Designer Collections
                    </a>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="font-playfair font-bold text-lg text-primary-foreground mb-4">
                  Support
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-primary-foreground/80 hover:text-accent smooth-transition">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary-foreground/80 hover:text-accent smooth-transition">
                      Style Guide
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary-foreground/80 hover:text-accent smooth-transition">
                      Size Guide
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary-foreground/80 hover:text-accent smooth-transition">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
                © {new Date()?.getFullYear()} Stylora. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-primary-foreground/60 hover:text-accent smooth-transition">
                  Privacy Policy
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-accent smooth-transition">
                  Terms of Service
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-accent smooth-transition">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomepageFashionDiscoveryPlatform;