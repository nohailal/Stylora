import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const OutfitBuilder = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItems, setSelectedItems] = useState({
    top: null,
    bottom: null,
    shoes: null,
    accessories: null
  });
  const [showSuggestions, setShowSuggestions] = useState(false);

  const categories = [
    { value: 'all', label: 'All Items' },
    { value: 'tops', label: 'Tops' },
    { value: 'bottoms', label: 'Bottoms' },
    { value: 'dresses', label: 'Dresses' },
    { value: 'outerwear', label: 'Outerwear' },
    { value: 'shoes', label: 'Shoes' },
    { value: 'accessories', label: 'Accessories' }
  ];

  const wardrobeItems = [
    // Tops
    {
      id: 1,
      name: "Classic White Shirt",
      category: "tops",
      type: "top",
      color: "white",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=250&fit=crop",
      price: "$89",
      brand: "Stylora Essentials"
    },
    {
      id: 2,
      name: "Silk Blouse",
      category: "tops",
      type: "top",
      color: "cream",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=200&h=250&fit=crop",
      price: "$156",
      brand: "Luxury Line"
    },
    {
      id: 3,
      name: "Cashmere Sweater",
      category: "tops",
      type: "top",
      color: "beige",
      image: "https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_960_720.jpg?w=200&h=250&fit=crop",
      price: "$245",
      brand: "Premium Knits"
    },
    // Bottoms
    {
      id: 4,
      name: "Tailored Trousers",
      category: "bottoms",
      type: "bottom",
      color: "black",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=250&fit=crop",
      price: "$134",
      brand: "Professional"
    },
    {
      id: 5,
      name: "High-Waist Jeans",
      category: "bottoms",
      type: "bottom",
      color: "denim",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=200&h=250&fit=crop",
      price: "$98",
      brand: "Denim Co"
    },
    {
      id: 6,
      name: "Midi Skirt",
      category: "bottoms",
      type: "bottom",
      color: "navy",
      image: "https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_960_720.jpg?w=200&h=250&fit=crop",
      price: "$76",
      brand: "Feminine"
    },
    // Shoes
    {
      id: 7,
      name: "Classic Pumps",
      category: "shoes",
      type: "shoes",
      color: "black",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop",
      price: "$189",
      brand: "Elegant Steps"
    },
    {
      id: 8,
      name: "White Sneakers",
      category: "shoes",
      type: "shoes",
      color: "white",
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?w=200&h=200&fit=crop",
      price: "$125",
      brand: "Comfort Walk"
    },
    // Accessories
    {
      id: 9,
      name: "Leather Handbag",
      category: "accessories",
      type: "accessories",
      color: "brown",
      image: "https://images.pixabay.com/photo/2017/08/01/11/48/woman-2564660_960_720.jpg?w=200&h=200&fit=crop",
      price: "$298",
      brand: "Luxury Leather"
    },
    {
      id: 10,
      name: "Gold Watch",
      category: "accessories",
      type: "accessories",
      color: "gold",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop",
      price: "$456",
      brand: "Timepiece"
    }
  ];

  const aiSuggestions = [
    {
      id: 1,
      name: "Professional Chic",
      items: [1, 4, 7, 9],
      description: "Perfect for important meetings and professional events",
      occasion: "Business",
      confidence: 95
    },
    {
      id: 2,
      name: "Casual Elegance",
      items: [2, 5, 8, 10],
      description: "Effortlessly stylish for weekend brunches and casual outings",
      occasion: "Casual",
      confidence: 88
    },
    {
      id: 3,
      name: "Sophisticated Evening",
      items: [3, 6, 7, 9],
      description: "Refined look for dinner dates and cultural events",
      occasion: "Evening",
      confidence: 92
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? wardrobeItems 
    : wardrobeItems?.filter(item => item?.category === selectedCategory);

  const handleItemSelect = (item) => {
    setSelectedItems(prev => ({
      ...prev,
      [item?.type]: item
    }));
  };

  const clearOutfit = () => {
    setSelectedItems({
      top: null,
      bottom: null,
      shoes: null,
      accessories: null
    });
    setShowSuggestions(false);
  };

  const getAISuggestions = () => {
    setShowSuggestions(true);
  };

  const applyAISuggestion = (suggestion) => {
    const newSelectedItems = {
      top: null,
      bottom: null,
      shoes: null,
      accessories: null
    };

    suggestion?.items?.forEach(itemId => {
      const item = wardrobeItems?.find(w => w?.id === itemId);
      if (item) {
        newSelectedItems[item.type] = item;
      }
    });

    setSelectedItems(newSelectedItems);
    setShowSuggestions(false);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Shirt" size={32} className="text-accent" />
        </div>
        <h3 className="text-2xl font-playfair font-bold text-primary mb-2">
          AI Outfit Builder
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Mix and match pieces from your wardrobe or our collections. Get AI-powered suggestions for perfect color coordination and style harmony.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Outfit Preview */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-lg p-6 sticky top-6">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-semibold text-primary">Your Outfit</h4>
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm" onClick={clearOutfit} iconName="RotateCcw">
                  Clear
                </Button>
                <Button variant="outline" size="sm" onClick={getAISuggestions} iconName="Sparkles">
                  AI Suggest
                </Button>
              </div>
            </div>

            {/* Outfit Slots */}
            <div className="space-y-4">
              {[
                { key: 'top', label: 'Top', icon: 'Shirt' },
                { key: 'bottom', label: 'Bottom', icon: 'Square' },
                { key: 'shoes', label: 'Shoes', icon: 'Footprints' },
                { key: 'accessories', label: 'Accessories', icon: 'Watch' }
              ]?.map(slot => (
                <div key={slot?.key} className="border border-border rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon name={slot?.icon} size={16} className="text-muted-foreground" />
                    <span className="text-sm font-medium text-primary">{slot?.label}</span>
                  </div>
                  
                  {selectedItems?.[slot?.key] ? (
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted">
                        <Image
                          src={selectedItems?.[slot?.key]?.image}
                          alt={selectedItems?.[slot?.key]?.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-primary truncate">
                          {selectedItems?.[slot?.key]?.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {selectedItems?.[slot?.key]?.brand}
                        </p>
                      </div>
                      <button
                        onClick={() => setSelectedItems(prev => ({ ...prev, [slot?.key]: null }))}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Icon name="X" size={16} />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-12 border-2 border-dashed border-border rounded-lg">
                      <span className="text-xs text-muted-foreground">Select {slot?.label?.toLowerCase()}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Outfit Actions */}
            {Object.values(selectedItems)?.some(item => item) && (
              <div className="mt-6 space-y-3">
                <Button variant="default" fullWidth iconName="Heart" iconPosition="left">
                  Save Outfit
                </Button>
                <Button variant="outline" fullWidth iconName="Share2" iconPosition="left">
                  Share Look
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Items Grid */}
        <div className="lg:col-span-2">
          {/* Category Filter */}
          <div className="mb-6">
            <Select
              label="Filter by Category"
              options={categories}
              value={selectedCategory}
              onChange={setSelectedCategory}
              className="max-w-xs"
            />
          </div>

          {/* AI Suggestions */}
          {showSuggestions && (
            <div className="mb-8 bg-accent/5 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Sparkles" size={20} className="text-accent" />
                <h4 className="font-semibold text-primary">AI Style Suggestions</h4>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {aiSuggestions?.map(suggestion => (
                  <div key={suggestion?.id} className="bg-card rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium text-primary">{suggestion?.name}</h5>
                      <div className="flex items-center space-x-1">
                        <Icon name="TrendingUp" size={14} className="text-accent" />
                        <span className="text-xs text-accent font-medium">{suggestion?.confidence}%</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">{suggestion?.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-muted px-2 py-1 rounded-full">{suggestion?.occasion}</span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => applyAISuggestion(suggestion)}
                      >
                        Apply
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowSuggestions(false)}
                className="mt-4"
                iconName="X"
                iconPosition="left"
              >
                Close Suggestions
              </Button>
            </div>
          )}

          {/* Items Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredItems?.map(item => (
              <div
                key={item?.id}
                className="bg-card rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 cursor-pointer group"
                onClick={() => handleItemSelect(item)}
              >
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <Image
                    src={item?.image}
                    alt={item?.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h5 className="font-medium text-primary mb-1 truncate">{item?.name}</h5>
                  <p className="text-xs text-muted-foreground mb-2">{item?.brand}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-accent">{item?.price}</span>
                    <div className="flex items-center space-x-1">
                      <div 
                        className="w-3 h-3 rounded-full border border-border"
                        style={{ backgroundColor: item?.color === 'denim' ? '#4F46E5' : item?.color }}
                      ></div>
                      <span className="text-xs text-muted-foreground capitalize">{item?.color}</span>
                    </div>
                  </div>
                </div>
                
                {/* Selection Indicator */}
                {Object.values(selectedItems)?.some(selected => selected?.id === item?.id) && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Check" size={14} className="text-accent-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutfitBuilder;