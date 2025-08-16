import React from 'react';
import Icon from '../../../components/AppIcon';

const ResourceCard = ({ resource }) => {
  const getFileIcon = (type) => {
    switch (type) {
      case 'PDF':
        return 'FileText';
      case 'Checklist':
        return 'CheckSquare';
      case 'Template':
        return 'Layout';
      case 'Guide':
        return 'BookOpen';
      default:
        return 'Download';
    }
  };

  return (
    <div className="bg-card rounded-lg p-4 editorial-shadow smooth-transition hover:shadow-lg border border-border">
      <div className="flex items-start space-x-3">
        <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon name={getFileIcon(resource?.type)} size={20} className="text-muted-foreground" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-primary text-sm mb-1 truncate">
            {resource?.title}
          </h4>
          <p className="text-muted-foreground text-xs mb-2 line-clamp-2">
            {resource?.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 text-xs text-muted-foreground">
              <span className="flex items-center space-x-1">
                <Icon name="Download" size={12} />
                <span>{resource?.downloads}</span>
              </span>
              <span>{resource?.size}</span>
              <span className="bg-muted px-2 py-1 rounded-full">{resource?.type}</span>
            </div>
          </div>
        </div>
        
        <button className="flex-shrink-0 w-8 h-8 bg-accent/10 hover:bg-accent/20 rounded-lg flex items-center justify-center smooth-transition">
          <Icon name="Download" size={16} className="text-accent" />
        </button>
      </div>
    </div>
  );
};

export default ResourceCard;