import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const MasterclassCard = ({ masterclass }) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden editorial-shadow smooth-transition hover:shadow-lg group">
      <div className="relative overflow-hidden h-48">
        <Image
          src={masterclass?.thumbnail}
          alt={masterclass?.title}
          className="w-full h-full object-cover hero-image-hover"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 smooth-transition flex items-center justify-center">
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
            <Icon name="Play" size={24} className="text-primary ml-1" />
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-accent text-accent-foreground text-xs font-medium px-2 py-1 rounded-full">
            {masterclass?.type}
          </span>
        </div>
        <div className="absolute bottom-4 right-4">
          <span className="bg-black/60 text-white text-xs px-2 py-1 rounded-full">
            {masterclass?.duration}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-playfair text-lg font-medium text-primary mb-2">
          {masterclass?.title}
        </h3>
        
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src={masterclass?.instructor?.avatar}
              alt={masterclass?.instructor?.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-primary">{masterclass?.instructor?.name}</p>
            <p className="text-xs text-muted-foreground">{masterclass?.instructor?.title}</p>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {masterclass?.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
            <span className="flex items-center space-x-1">
              <Icon name="Users" size={14} />
              <span>{masterclass?.students}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Icon name="Star" size={14} className="text-warning fill-current" />
              <span>{masterclass?.rating}</span>
            </span>
          </div>
          <span className="text-sm font-medium text-accent">
            {masterclass?.price === 0 ? 'Free' : `$${masterclass?.price}`}
          </span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {masterclass?.skills?.map((skill, index) => (
            <span
              key={index}
              className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
        
        <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md text-sm font-medium smooth-transition hover:bg-primary/90">
          {masterclass?.enrolled ? 'Continue Watching' : 'Start Masterclass'}
        </button>
      </div>
    </div>
  );
};

export default MasterclassCard;