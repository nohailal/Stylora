import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TrendForecastCard = ({ trend }) => {
  const getTrendIcon = (direction) => {
    switch (direction) {
      case 'rising':
        return { icon: 'TrendingUp', color: 'text-success' };
      case 'stable':
        return { icon: 'Minus', color: 'text-warning' };
      case 'declining':
        return { icon: 'TrendingDown', color: 'text-destructive' };
      default:
        return { icon: 'TrendingUp', color: 'text-success' };
    }
  };

  const trendInfo = getTrendIcon(trend?.direction);

  return (
    <div className="bg-card rounded-lg overflow-hidden editorial-shadow smooth-transition hover:shadow-lg">
      <div className="relative overflow-hidden h-40">
        <Image
          src={trend?.image}
          alt={trend?.name}
          className="w-full h-full object-cover hero-image-hover"
        />
        <div className="absolute top-4 right-4">
          <div className="bg-background/90 backdrop-blur-sm rounded-full p-2">
            <Icon name={trendInfo?.icon} size={16} className={trendInfo?.color} />
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-playfair text-lg font-medium text-primary">
            {trend?.name}
          </h3>
          <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
            {trend?.season}
          </span>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {trend?.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-xs text-muted-foreground">Popularity:</span>
            <div className="flex space-x-1">
              {[...Array(5)]?.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i < trend?.popularity ? 'bg-accent' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
          <span className="text-xs text-muted-foreground">
            {trend?.influence} influence
          </span>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Key Pieces:</span>
            <span className="text-primary font-medium">{trend?.keyPieces?.length} items</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {trend?.keyPieces?.slice(0, 3)?.map((piece, index) => (
              <span
                key={index}
                className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
              >
                {piece}
              </span>
            ))}
            {trend?.keyPieces?.length > 3 && (
              <span className="text-xs text-accent">+{trend?.keyPieces?.length - 3} more</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendForecastCard;