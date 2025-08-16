import React from 'react';
import Icon from '../../../components/AppIcon';

const InteractiveToolCard = ({ tool }) => {
  return (
    <div className="bg-card rounded-lg p-6 editorial-shadow smooth-transition hover:shadow-lg group">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg flex items-center justify-center">
          <Icon name={tool?.icon} size={24} className="text-accent" />
        </div>
        <span className="text-xs font-medium text-success bg-success/10 px-2 py-1 rounded-full">
          {tool?.type}
        </span>
      </div>
      <h3 className="font-playfair text-xl font-medium text-primary mb-2">
        {tool?.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4">
        {tool?.description}
      </p>
      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Completion Time:</span>
          <span className="text-primary font-medium">{tool?.completionTime}</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Users Completed:</span>
          <span className="text-primary font-medium">{tool?.usersCompleted}</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Accuracy Rate:</span>
          <span className="text-success font-medium">{tool?.accuracyRate}%</span>
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <p className="text-xs font-medium text-muted-foreground">What you'll discover:</p>
        <ul className="space-y-1">
          {tool?.features?.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Icon name="Check" size={12} className="text-success" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <button className="w-full bg-accent text-accent-foreground py-2 px-4 rounded-md text-sm font-medium smooth-transition hover:bg-accent/90 group-hover:shadow-md">
        Start Analysis
      </button>
    </div>
  );
};

export default InteractiveToolCard;