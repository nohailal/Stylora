import React, { useState } from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedCollections = () => {
  const [activeCollection, setActiveCollection] = useState(0);

  const collections = [
    {
      id: 1,
      title: "Winter Elegance",
      subtitle: "Sophisticated pieces for the season",
      description: "Discover luxurious textures and timeless silhouettes that define winter sophistication. From cashmere coats to silk scarves, each piece tells a story of refined elegance.",
      designer: "Isabella Martinez",
      pieces: 24,
      priceRange: "$89 - $450",
      mainImage: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pixabay.com/photo/2016/03/27/22/16/fashion-1284496_1280.jpg",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      ],
      tags: ["luxury", "winter", "elegant", "timeless"],
      color: "accent"
    },
    {
      id: 2,
      title: "Urban Minimalist",
      subtitle: "Clean lines for city living",
      description: "Embrace the beauty of simplicity with our urban minimalist collection. Neutral palettes and architectural silhouettes create effortless sophistication for modern life.",
      designer: "David Kim",
      pieces: 18,
      priceRange: "$65 - $320",
      mainImage: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pixabay.com/photo/2017/08/01/11/48/woman-2564660_1280.jpg",
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      ],
      tags: ["minimalist", "urban", "neutral", "modern"],
      color: "secondary"
    },
    {
      id: 3,
      title: "Sustainable Luxury",
      subtitle: "Conscious fashion choices",
      description: "Luxury meets sustainability in this thoughtfully curated collection. Each piece is crafted from eco-friendly materials without compromising on style or quality.",
      designer: "Elena Rodriguez",
      pieces: 32,
      priceRange: "$95 - $580",
      mainImage: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400"
      ],
      tags: ["sustainable", "luxury", "eco-friendly", "conscious"],
      color: "success"
    }
  ];

  const currentCollection = collections?.[activeCollection];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
            Featured Collections
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover carefully curated collections from emerging and established designers who share our vision of thoughtful, beautiful fashion.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Collection Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-3 h-3 rounded-full ${
                  currentCollection?.color === 'accent' ? 'bg-accent' :
                  currentCollection?.color === 'secondary'? 'bg-secondary' : 'bg-success'
                }`} />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {currentCollection?.designer}
                </span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-playfair font-bold text-primary mb-3">
                {currentCollection?.title}
              </h3>
              <p className="text-xl text-muted-foreground mb-6">
                {currentCollection?.subtitle}
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              {currentCollection?.description}
            </p>

            {/* Collection Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Package" size={20} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Pieces</span>
                </div>
                <p className="text-2xl font-bold text-primary">{currentCollection?.pieces}</p>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="DollarSign" size={20} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Price Range</span>
                </div>
                <p className="text-2xl font-bold text-primary">{currentCollection?.priceRange}</p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {currentCollection?.tags?.map((tag, index) => (
                <span 
                  key={index} 
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    currentCollection?.color === 'accent' ? 'bg-accent/10 text-accent' :
                    currentCollection?.color === 'secondary'? 'bg-secondary/10 text-secondary' : 'bg-success/10 text-success'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg"
                iconName="Eye"
                iconPosition="left"
                className={
                  currentCollection?.color === 'accent' ? 'bg-accent hover:bg-accent/90' :
                  currentCollection?.color === 'secondary'? 'bg-secondary hover:bg-secondary/90' : 'bg-success hover:bg-success/90'
                }
              >
                Explore Collection
              </Button>
              <Button variant="outline" size="lg" iconName="Heart" iconPosition="left">
                Add to Wishlist
              </Button>
            </div>
          </div>

          {/* Collection Images */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Image */}
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden editorial-shadow">
                <Image
                  src={currentCollection?.mainImage}
                  alt={currentCollection?.title}
                  className="w-full h-full object-cover hero-image-hover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Gallery Thumbnails */}
              <div className="flex space-x-3 mt-4">
                {currentCollection?.gallery?.map((image, index) => (
                  <div key={index} className="w-20 h-20 rounded-lg overflow-hidden editorial-shadow">
                    <Image
                      src={image}
                      alt={`${currentCollection?.title} ${index + 1}`}
                      className="w-full h-full object-cover smooth-transition hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Collection Navigation */}
        <div className="flex justify-center items-center space-x-8 mt-16">
          <button
            onClick={() => setActiveCollection((prev) => (prev - 1 + collections?.length) % collections?.length)}
            className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground smooth-transition"
            aria-label="Previous collection"
          >
            <Icon name="ChevronLeft" size={24} />
          </button>

          <div className="flex space-x-2">
            {collections?.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCollection(index)}
                className={`w-3 h-3 rounded-full smooth-transition ${
                  index === activeCollection ? 'bg-accent' : 'bg-muted'
                }`}
                aria-label={`Go to collection ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setActiveCollection((prev) => (prev + 1) % collections?.length)}
            className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground smooth-transition"
            aria-label="Next collection"
          >
            <Icon name="ChevronRight" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;