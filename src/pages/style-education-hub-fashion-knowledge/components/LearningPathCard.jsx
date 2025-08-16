import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const LearningPathCard = ({ path }) => {
  return (
    <div className="bg-card rounded-lg p-6 editorial-shadow smooth-transition hover:shadow-lg">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon name={path?.icon} size={24} className="text-accent" />
        </div>
        <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
          {path?.level}
        </span>
      </div>
      <h3 className="font-playfair text-xl font-medium text-primary mb-2">
        {path?.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
        {path?.description}
      </p>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
          <span className="flex items-center space-x-1">
            <Icon name="BookOpen" size={14} />
            <span>{path?.lessons} lessons</span>
          </span>
          <span className="flex items-center space-x-1">
            <Icon name="Clock" size={14} />
            <span>{path?.duration}</span>
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <Icon name="Star" size={14} className="text-warning fill-current" />
          <span className="text-xs font-medium text-muted-foreground">{path?.rating}</span>
        </div>
      </div>
      <div className="w-full bg-muted rounded-full h-2 mb-4">
        <div 
          className="bg-accent h-2 rounded-full transition-all duration-300"
          style={{ width: `${path?.progress}%` }}
        />
      </div>
      <Link
        to={path?.link}
        className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 text-sm font-medium smooth-transition"
      >
        <span>{path?.progress > 0 ? 'Continue Learning' : 'Start Learning'}</span>
        <Icon name="ArrowRight" size={16} />
      </Link>
    </div>
  );
};

export default LearningPathCard;