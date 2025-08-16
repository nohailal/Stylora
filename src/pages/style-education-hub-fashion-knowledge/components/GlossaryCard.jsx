import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const GlossaryCard = ({ term }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-card rounded-lg p-4 editorial-shadow smooth-transition hover:shadow-lg border border-border">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h4 className="font-playfair text-lg font-medium text-primary">
              {term?.word}
            </h4>
            {term?.pronunciation && (
              <button className="w-6 h-6 bg-accent/10 hover:bg-accent/20 rounded-full flex items-center justify-center smooth-transition">
                <Icon name="Volume2" size={12} className="text-accent" />
              </button>
            )}
          </div>
          
          <p className="text-muted-foreground text-sm mb-3">
            {term?.definition}
          </p>
          
          {term?.category && (
            <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full mb-3">
              {term?.category}
            </span>
          )}
          
          {isExpanded && (
            <div className="space-y-3">
              {term?.example && (
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-1">Example:</p>
                  <p className="text-sm text-primary italic">"{term?.example}"</p>
                </div>
              )}
              
              {term?.relatedTerms && term?.relatedTerms?.length > 0 && (
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">Related Terms:</p>
                  <div className="flex flex-wrap gap-1">
                    {term?.relatedTerms?.map((related, index) => (
                      <span
                        key={index}
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full hover:bg-accent/10 hover:text-accent cursor-pointer smooth-transition"
                      >
                        {related}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {term?.visualExample && (
                <div className="mt-3">
                  <div className="w-full h-32 rounded-lg overflow-hidden">
                    <Image
                      src={term?.visualExample}
                      alt={`Visual example of ${term?.word}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-2 w-8 h-8 bg-muted hover:bg-accent/10 rounded-lg flex items-center justify-center smooth-transition"
        >
          <Icon 
            name={isExpanded ? "ChevronUp" : "ChevronDown"} 
            size={16} 
            className="text-muted-foreground" 
          />
        </button>
      </div>
    </div>
  );
};

export default GlossaryCard;