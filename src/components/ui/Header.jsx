import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    {
      name: 'Discover',
      path: '/homepage-fashion-discovery-platform',
      icon: 'Compass'
    },
    {
      name: 'AI Stylist',
      path: '/personal-styling-tools-ai-style-assistant',
      icon: 'Sparkles'
    },
    {
      name: 'Community',
      path: '/style-community-user-generated-content',
      icon: 'Users'
    },
    {
      name: 'Learn',
      path: '/style-education-hub-fashion-knowledge',
      icon: 'BookOpen'
    }
  ];

  const isActivePath = (path) => location?.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between h-16 px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center smooth-transition group-hover:bg-accent">
            <span className="text-primary-foreground font-playfair font-bold text-lg group-hover:text-accent-foreground">S</span>
          </div>
          <span className="font-playfair font-bold text-xl text-primary smooth-transition group-hover:text-accent">
            Stylora
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigationItems?.map((item) => (
            <Link
              key={item?.path}
              to={item?.path}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium smooth-transition ${
                isActivePath(item?.path)
                  ? 'text-accent bg-accent/10' :'text-muted-foreground hover:text-primary hover:bg-muted'
              }`}
            >
              <Icon name={item?.icon} size={16} />
              <span>{item?.name}</span>
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button variant="ghost" iconName="Search" size="sm">
            Search
          </Button>
          <Button variant="ghost" iconName="Heart" size="sm">
            Wishlist
          </Button>
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button variant="default" size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-muted smooth-transition"
          aria-label="Toggle mobile menu"
        >
          <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
        </button>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="px-6 py-4 space-y-4">
            {/* Mobile Navigation */}
            <nav className="space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium smooth-transition ${
                    isActivePath(item?.path)
                      ? 'text-accent bg-accent/10' :'text-muted-foreground hover:text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.name}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile Actions */}
            <div className="pt-4 border-t border-border space-y-3">
              <Button variant="ghost" fullWidth iconName="Search" iconPosition="left">
                Search Styles
              </Button>
              <Button variant="ghost" fullWidth iconName="Heart" iconPosition="left">
                My Wishlist
              </Button>
              <div className="flex space-x-3">
                <Button variant="outline" fullWidth>
                  Sign In
                </Button>
                <Button variant="default" fullWidth>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;