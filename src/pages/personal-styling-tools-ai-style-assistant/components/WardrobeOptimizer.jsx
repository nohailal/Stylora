import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const WardrobeOptimizer = () => {
  const [step, setStep] = useState('upload'); // 'upload', 'analyzing', 'results'
  const [uploadedImages, setUploadedImages] = useState([]);
  const [analysisResults, setAnalysisResults] = useState(null);

  const mockAnalysisResults = {
    totalItems: 47,
    categories: {
      tops: 18,
      bottoms: 12,
      dresses: 8,
      outerwear: 5,
      shoes: 4
    },
    gaps: [
      {
        category: "Professional Blazers",
        priority: "High",
        reason: "Only 1 blazer found. Need 2-3 for work versatility.",
        suggestions: [
          {
            name: "Navy Structured Blazer",
            price: "$189",
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=250&fit=crop",
            versatility: 8
          },
          {
            name: "Black Classic Blazer",
            price: "$156",
            image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=200&h=250&fit=crop",
            versatility: 9
          }
        ]
      },
      {
        category: "Versatile Footwear",
        priority: "Medium",
        reason: "Limited shoe variety. Need comfortable everyday options.",
        suggestions: [
          {
            name: "White Leather Sneakers",
            price: "$125",
            image: "https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_960_720.jpg?w=200&h=200&fit=crop",
            versatility: 7
          },
          {
            name: "Block Heel Pumps",
            price: "$98",
            image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop",
            versatility: 6
          }
        ]
      },
      {
        category: "Statement Accessories",
        priority: "Low",
        reason: "Wardrobe could benefit from more personality pieces.",
        suggestions: [
          {
            name: "Silk Scarf Collection",
            price: "$67",
            image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?w=200&h=200&fit=crop",
            versatility: 5
          }
        ]
      }
    ],
    outfitCombinations: 156,
    potentialCombinations: 234,
    efficiency: 67,
    recommendations: [
      "Focus on neutral basics that mix and match easily",
      "Invest in quality over quantity for key pieces",
      "Add 2-3 statement pieces to refresh your look",
      "Consider seasonal rotation to maximize space"
    ]
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event?.target?.files);
    const imagePromises = files?.map(file => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve({
          id: Math.random().toString(36).substr(2, 9),
          file,
          preview: e.target.result
        });
        reader.readAsDataURL(file);
      });
    });

    Promise.all(imagePromises)?.then(images => {
      setUploadedImages(prev => [...prev, ...images]);
    });
  };

  const removeImage = (imageId) => {
    setUploadedImages(prev => prev?.filter(img => img?.id !== imageId));
  };

  const startAnalysis = () => {
    if (uploadedImages?.length === 0) return;
    
    setStep('analyzing');
    
    // Simulate analysis
    setTimeout(() => {
      setAnalysisResults(mockAnalysisResults);
      setStep('results');
    }, 3000);
  };

  const resetAnalysis = () => {
    setStep('upload');
    setUploadedImages([]);
    setAnalysisResults(null);
  };

  if (step === 'analyzing') {
    return (
      <div className="bg-card rounded-lg p-8">
        <div className="text-center max-w-md mx-auto">
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="animate-spin">
              <Icon name="Loader2" size={40} className="text-accent" />
            </div>
          </div>
          <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
            Analyzing Your Wardrobe
          </h3>
          <p className="text-muted-foreground mb-8">
            Our AI is examining your pieces, identifying gaps, and calculating outfit combinations. This may take a few moments.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <span className="text-sm text-muted-foreground">Categorizing items</span>
              <Icon name="CheckCircle" size={16} className="text-accent" />
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <span className="text-sm text-muted-foreground">Analyzing color harmony</span>
              <Icon name="CheckCircle" size={16} className="text-accent" />
            </div>
            <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg">
              <span className="text-sm text-primary font-medium">Calculating combinations</span>
              <div className="animate-spin">
                <Icon name="Loader2" size={16} className="text-accent" />
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg opacity-50">
              <span className="text-sm text-muted-foreground">Generating recommendations</span>
              <Icon name="Clock" size={16} className="text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'results' && analysisResults) {
    return (
      <div className="space-y-8">
        {/* Results Header */}
        <div className="bg-card rounded-lg p-8 text-center">
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="BarChart3" size={40} className="text-accent" />
          </div>
          <h3 className="text-3xl font-playfair font-bold text-primary mb-2">
            Wardrobe Analysis Complete
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've analyzed your {analysisResults?.totalItems} items and identified opportunities to maximize your style potential.
          </p>
        </div>
        {/* Overview Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">{analysisResults?.totalItems}</div>
            <div className="text-sm text-muted-foreground">Total Items</div>
          </div>
          <div className="bg-card rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">{analysisResults?.outfitCombinations}</div>
            <div className="text-sm text-muted-foreground">Current Combinations</div>
          </div>
          <div className="bg-card rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">{analysisResults?.potentialCombinations}</div>
            <div className="text-sm text-muted-foreground">Potential Combinations</div>
          </div>
          <div className="bg-card rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">{analysisResults?.efficiency}%</div>
            <div className="text-sm text-muted-foreground">Wardrobe Efficiency</div>
          </div>
        </div>
        {/* Category Breakdown */}
        <div className="bg-card rounded-lg p-8">
          <h4 className="text-xl font-playfair font-bold text-primary mb-6">Category Breakdown</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {Object.entries(analysisResults?.categories)?.map(([category, count]) => (
              <div key={category} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon 
                    name={category === 'tops' ? 'Shirt' : category === 'bottoms' ? 'Square' : category === 'dresses' ? 'Crown' : category === 'outerwear' ? 'Coat' : 'Footprints'} 
                    size={24} 
                    className="text-accent" 
                  />
                </div>
                <div className="font-semibold text-primary">{count}</div>
                <div className="text-sm text-muted-foreground capitalize">{category}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Wardrobe Gaps */}
        <div className="bg-card rounded-lg p-8">
          <h4 className="text-xl font-playfair font-bold text-primary mb-6">Identified Gaps & Recommendations</h4>
          <div className="space-y-8">
            {analysisResults?.gaps?.map((gap, index) => (
              <div key={index} className="border-l-4 border-accent pl-6">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="font-semibold text-primary">{gap?.category}</h5>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    gap?.priority === 'High' ? 'bg-destructive/10 text-destructive' :
                    gap?.priority === 'Medium'? 'bg-warning/10 text-warning' : 'bg-muted text-muted-foreground'
                  }`}>
                    {gap?.priority} Priority
                  </span>
                </div>
                <p className="text-muted-foreground mb-6">{gap?.reason}</p>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {gap?.suggestions?.map((suggestion, suggestionIndex) => (
                    <div key={suggestionIndex} className="border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-colors">
                      <div className="aspect-[3/4] overflow-hidden bg-muted">
                        <Image
                          src={suggestion?.image}
                          alt={suggestion?.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h6 className="font-medium text-primary mb-1">{suggestion?.name}</h6>
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-accent">{suggestion?.price}</span>
                          <div className="flex items-center space-x-1">
                            <Icon name="Star" size={12} className="text-accent" />
                            <span className="text-xs text-muted-foreground">{suggestion?.versatility}/10</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* General Recommendations */}
        <div className="bg-card rounded-lg p-8">
          <h4 className="text-xl font-playfair font-bold text-primary mb-6">Optimization Tips</h4>
          <div className="grid sm:grid-cols-2 gap-4">
            {analysisResults?.recommendations?.map((rec, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                <Icon name="Lightbulb" size={16} className="text-accent mt-1" />
                <span className="text-sm text-muted-foreground">{rec}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" onClick={resetAnalysis} iconName="RotateCcw" iconPosition="left">
            New Analysis
          </Button>
          <Button variant="default" iconName="Download" iconPosition="left">
            Download Report
          </Button>
          <Button variant="ghost" iconName="Share2" iconPosition="left">
            Share Results
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="BarChart3" size={32} className="text-accent" />
        </div>
        <h3 className="text-2xl font-playfair font-bold text-primary mb-2">
          Wardrobe Optimizer
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Upload photos of your wardrobe items and get AI-powered analysis to identify gaps, maximize outfit combinations, and optimize your style potential.
        </p>
      </div>
      {/* Upload Section */}
      <div className="bg-card rounded-lg p-8">
        <div className="max-w-2xl mx-auto">
          <h4 className="text-lg font-semibold text-primary mb-6 text-center">
            Upload Your Wardrobe Photos
          </h4>

          {/* Upload Area */}
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center mb-6">
            <Icon name="Upload" size={48} className="text-muted-foreground mx-auto mb-4" />
            <h5 className="font-semibold text-primary mb-2">Drag & drop or click to upload</h5>
            <p className="text-sm text-muted-foreground mb-4">
              Upload multiple photos of your clothing items, shoes, and accessories
            </p>
            <Input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="mb-4"
            />
            <div className="text-xs text-muted-foreground">
              Supported formats: JPG, PNG, WEBP (Max 5MB each)
            </div>
          </div>

          {/* Uploaded Images Grid */}
          {uploadedImages?.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h5 className="font-medium text-primary">
                  Uploaded Items ({uploadedImages?.length})
                </h5>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setUploadedImages([])}
                  iconName="Trash2"
                >
                  Clear All
                </Button>
              </div>
              
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {uploadedImages?.map(image => (
                  <div key={image?.id} className="relative group">
                    <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                      <Image
                        src={image?.preview}
                        alt="Wardrobe item"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button
                      onClick={() => removeImage(image?.id)}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Icon name="X" size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tips */}
          <div className="bg-muted/30 rounded-lg p-6 mb-8">
            <h5 className="font-medium text-primary mb-4">Tips for Best Results:</h5>
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
              <div className="flex items-start space-x-2">
                <Icon name="CheckCircle" size={16} className="text-accent mt-0.5" />
                <span>Lay items flat on a clean background</span>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="CheckCircle" size={16} className="text-accent mt-0.5" />
                <span>Use good lighting (natural light preferred)</span>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="CheckCircle" size={16} className="text-accent mt-0.5" />
                <span>Include all categories: tops, bottoms, shoes</span>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="CheckCircle" size={16} className="text-accent mt-0.5" />
                <span>Upload 15+ items for comprehensive analysis</span>
              </div>
            </div>
          </div>

          {/* Analyze Button */}
          <div className="text-center">
            <Button
              variant="default"
              size="lg"
              onClick={startAnalysis}
              disabled={uploadedImages?.length === 0}
              iconName="BarChart3"
              iconPosition="right"
            >
              Analyze My Wardrobe ({uploadedImages?.length} items)
            </Button>
            {uploadedImages?.length === 0 && (
              <p className="text-sm text-muted-foreground mt-2">
                Upload at least one item to start analysis
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WardrobeOptimizer;