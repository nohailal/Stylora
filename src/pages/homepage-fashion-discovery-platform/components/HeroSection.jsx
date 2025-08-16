import React, { useState, useEffect } from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Discover Your Unique Style DNA",
      subtitle: "Unlock personalized fashion insights with AI-powered styling",
      category: "AI Styling"
    },
    {
      id: 2,
      image: "https://images.pixabay.com/photo/2016/03/27/22/16/fashion-1284496_1280.jpg",
      title: "Curated Collections for Every Season",
      subtitle: "Handpicked pieces from emerging and established designers",
      category: "Collections"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Join the Style Community",
      subtitle: "Share your looks and get inspired by fashion enthusiasts worldwide",
      category: "Community"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides?.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides?.length) % heroSlides?.length);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-background">
      {/* Hero Slides */}
      <div className="relative h-full">
        {heroSlides?.map((slide, index) => (
          <div
            key={slide?.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative h-full">
              <Image
                src={slide?.image}
                alt={slide?.title}
                className="w-full h-full object-cover hero-image-hover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            </div>
          </div>
        ))}
      </div>
      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent border border-accent/30">
                <Icon name="Sparkles" size={14} className="mr-1" />
                {heroSlides?.[currentSlide]?.category}
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
              {heroSlides?.[currentSlide]?.title}
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {heroSlides?.[currentSlide]?.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg"
                iconName="Sparkles"
                iconPosition="left"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Discover Your Style DNA
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                iconName="Eye"
                iconPosition="left"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Explore Collections
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 smooth-transition"
        aria-label="Previous slide"
      >
        <Icon name="ChevronLeft" size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 smooth-transition"
        aria-label="Next slide"
      >
        <Icon name="ChevronRight" size={24} />
      </button>
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {heroSlides?.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full smooth-transition ${
              index === currentSlide ? 'bg-accent' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center text-white/70">
        <span className="text-sm mb-2 rotate-90 origin-center">Scroll</span>
        <Icon name="ChevronDown" size={20} className="animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;