import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const StyleGuideCard = ({ guide }) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden editorial-shadow smooth-transition hover:shadow-lg group">
      <div className="relative overflow-hidden h-48">
        <Image
          src={guide?.image}
          alt={guide?.title}
          className="w-full h-full object-cover hero-image-hover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block bg-accent text-accent-foreground text-xs font-medium px-2 py-1 rounded-full mb-2">
            {guide?.category}
          </span>
          <h3 className="font-playfair text-lg font-medium text-white mb-1">
            {guide?.title}
          </h3>
        </div>
      </div>
      <div className="p-4">
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {guide?.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
            <span className="flex items-center space-x-1">
              <Icon name="Clock" size={14} />
              <span>{guide?.readTime}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Icon name="Eye" size={14} />
              <span>{guide?.views}</span>
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Heart" size={14} className="text-muted-foreground" />
            <span className="text-xs text-muted-foreground">{guide?.likes}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {guide?.tags?.map((tag, index) => (
            <span
              key={index}
              className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md text-sm font-medium smooth-transition hover:bg-primary/90">
          Read Guide
        </button>
      </div>
    </div>
  );
};

export default StyleGuideCard;