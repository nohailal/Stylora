import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import LearningPathCard from './components/LearningPathCard';
import StyleGuideCard from './components/StyleGuideCard';
import TrendForecastCard from './components/TrendForecastCard';
import MasterclassCard from './components/MasterclassCard';
import InteractiveToolCard from './components/InteractiveToolCard';
import ResourceCard from './components/ResourceCard';
import GlossaryCard from './components/GlossaryCard';

const StyleEducationHub = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('learning-paths');

  // Mock data for learning paths
  const learningPaths = [
    {
      id: 1,
      title: "Style Foundations",
      description: "Master the fundamentals of personal style, color theory, and wardrobe basics. Perfect for beginners looking to build a strong foundation in fashion knowledge.",
      icon: "BookOpen",
      level: "Beginner",
      lessons: 12,
      duration: "4 weeks",
      rating: 4.8,
      progress: 0,
      link: "/learning-path/style-foundations"
    },
    {
      id: 2,
      title: "Advanced Styling Techniques",
      description: "Explore sophisticated styling methods, proportion mastery, and advanced color combinations. Elevate your fashion expertise to professional levels.",
      icon: "Sparkles",
      level: "Advanced",
      lessons: 18,
      duration: "6 weeks",
      rating: 4.9,
      progress: 35,
      link: "/learning-path/advanced-styling"
    },
    {
      id: 3,
      title: "Sustainable Fashion",
      description: "Learn about ethical fashion choices, sustainable brands, and conscious consumption practices that align with modern environmental values.",
      icon: "Leaf",
      level: "Intermediate",
      lessons: 10,
      duration: "3 weeks",
      rating: 4.7,
      progress: 0,
      link: "/learning-path/sustainable-fashion"
    },
    {
      id: 4,
      title: "Fashion History & Culture",
      description: "Discover the rich heritage of fashion through different eras, cultural influences, and iconic designers that shaped modern style.",
      icon: "Clock",
      level: "Intermediate",
      lessons: 15,
      duration: "5 weeks",
      rating: 4.6,
      progress: 60,
      link: "/learning-path/fashion-history"
    }
  ];

  // Mock data for style guides
  const styleGuides = [
    {
      id: 1,
      title: "Color Theory Mastery",
      description: "Understanding how colors work together to create harmonious and impactful outfits that enhance your natural beauty.",
      category: "Fundamentals",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      readTime: "8 min read",
      views: "12.5K",
      likes: 892,
      tags: ["Color Theory", "Basics", "Styling"]
    },
    {
      id: 2,
      title: "Proportion & Silhouette Guide",
      description: "Learn how to create flattering silhouettes and understand proportion principles for every body type and personal style preference.",
      category: "Body & Fit",
      image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?w=400&h=300&fit=crop",
      readTime: "12 min read",
      views: "9.8K",
      likes: 654,
      tags: ["Proportion", "Silhouette", "Body Types"]
    },
    {
      id: 3,
      title: "Seasonal Dressing Essentials",
      description: "Master the art of transitional dressing and seasonal wardrobe planning for year-round style confidence.",
      category: "Seasonal",
      image: "https://images.pixabay.com/photo/2017/08/06/12/06/people-2592247_1280.jpg?w=400&h=300&fit=crop",
      readTime: "10 min read",
      views: "15.2K",
      likes: 1203,
      tags: ["Seasonal", "Wardrobe", "Planning"]
    },
    {
      id: 4,
      title: "Capsule Wardrobe Creation",
      description: "Build a versatile, cohesive wardrobe with fewer pieces that work together seamlessly for maximum style impact.",
      category: "Wardrobe",
      image: "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=400&h=300&fit=crop",
      readTime: "15 min read",
      views: "18.7K",
      likes: 1456,
      tags: ["Capsule", "Minimalism", "Wardrobe"]
    }
  ];

  // Mock data for trend forecasts
  const trendForecasts = [
    {
      id: 1,
      name: "Dopamine Dressing",
      description: "Bright, mood-boosting colors and playful patterns that prioritize joy and self-expression in daily dressing.",
      season: "Spring 2025",
      direction: "rising",
      popularity: 4,
      influence: "High",
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?w=400&h=300&fit=crop",
      keyPieces: ["Bright Blazers", "Colorful Dresses", "Statement Accessories", "Bold Prints"]
    },
    {
      id: 2,
      name: "Neo-Minimalism",
      description: "Clean lines and neutral palettes with subtle architectural details and premium fabric focus.",
      season: "Fall 2024",
      direction: "stable",
      popularity: 5,
      influence: "Medium",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=300&fit=crop",
      keyPieces: ["Structured Coats", "Tailored Trousers", "Minimal Jewelry", "Clean Silhouettes"]
    },
    {
      id: 3,
      name: "Vintage Revival",
      description: "Authentic vintage pieces and vintage-inspired designs celebrating fashion history and sustainable practices.",
      season: "Year-round",
      direction: "rising",
      popularity: 3,
      influence: "High",
      image: "https://images.pixabay.com/photo/2016/03/27/19/32/woman-1283009_1280.jpg?w=400&h=300&fit=crop",
      keyPieces: ["Vintage Denim", "Retro Prints", "Classic Silhouettes", "Heritage Accessories"]
    }
  ];

  // Mock data for masterclasses
  const masterclasses = [
    {
      id: 1,
      title: "Personal Style Discovery Workshop",
      description: "Uncover your authentic style personality and learn to express it confidently through your wardrobe choices.",
      instructor: {
        name: "Sarah Chen",
        title: "Celebrity Stylist",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg"
      },
      thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      type: "Workshop",
      duration: "2h 30m",
      students: "2.1K",
      rating: 4.9,
      price: 0,
      enrolled: false,
      skills: ["Style Discovery", "Personal Branding", "Confidence Building"]
    },
    {
      id: 2,
      title: "Advanced Color Mixing Techniques",
      description: "Master sophisticated color combinations and learn professional styling secrets for creating impactful looks.",
      instructor: {
        name: "Marcus Rodriguez",
        title: "Fashion Consultant",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
      },
      thumbnail: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=400&h=300&fit=crop",
      type: "Masterclass",
      duration: "1h 45m",
      students: "1.8K",
      rating: 4.8,
      price: 29,
      enrolled: true,
      skills: ["Color Theory", "Advanced Styling", "Professional Techniques"]
    },
    {
      id: 3,
      title: "Sustainable Fashion Deep Dive",
      description: "Explore ethical fashion practices, sustainable brands, and conscious consumption strategies for modern wardrobes.",
      instructor: {
        name: "Emma Thompson",
        title: "Sustainability Expert",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg"
      },
      thumbnail: "https://images.pixabay.com/photo/2016/03/27/19/31/fashion-1283008_1280.jpg?w=400&h=300&fit=crop",
      type: "Deep Dive",
      duration: "3h 15m",
      students: "1.5K",
      rating: 4.7,
      price: 49,
      enrolled: false,
      skills: ["Sustainability", "Ethical Fashion", "Conscious Shopping"]
    }
  ];

  // Mock data for interactive tools
  const interactiveTools = [
    {
      id: 1,
      title: "Personal Color Analysis",
      description: "Discover your perfect color palette through our AI-powered analysis tool that considers your skin tone, hair, and eye color.",
      icon: "Palette",
      type: "Analysis",
      completionTime: "10-15 min",
      usersCompleted: "45.2K",
      accuracyRate: 94,
      features: [
        "Seasonal color classification",
        "Personalized color palette",
        "Shopping recommendations",
        "Makeup color suggestions"
      ]
    },
    {
      id: 2,
      title: "Body Shape Guide",
      description: "Get personalized styling advice based on your unique body shape and learn to highlight your best features.",
      icon: "User",
      type: "Guide",
      completionTime: "8-12 min",
      usersCompleted: "38.7K",
      accuracyRate: 91,
      features: [
        "Body shape identification",
        "Flattering silhouettes",
        "Style do's and don'ts",
        "Shopping guidelines"
      ]
    },
    {
      id: 3,
      title: "Wardrobe Audit Tool",
      description: "Analyze your current wardrobe and get recommendations for gaps, duplicates, and optimization strategies.",
      icon: "Archive",
      type: "Audit",
      completionTime: "20-30 min",
      usersCompleted: "29.1K",
      accuracyRate: 89,
      features: [
        "Wardrobe gap analysis",
        "Cost-per-wear calculations",
        "Decluttering recommendations",
        "Shopping priority list"
      ]
    }
  ];

  // Mock data for downloadable resources
  const downloadableResources = [
    {
      id: 1,
      title: "Complete Style Checklist",
      description: "Essential checklist covering all aspects of personal style development and wardrobe building.",
      type: "Checklist",
      size: "2.1 MB",
      downloads: "12.5K"
    },
    {
      id: 2,
      title: "Seasonal Wardrobe Planner",
      description: "Comprehensive template for planning your seasonal wardrobe transitions and capsule collections.",
      type: "Template",
      size: "3.8 MB",
      downloads: "8.9K"
    },
    {
      id: 3,
      title: "Color Combination Guide",
      description: "Visual guide to successful color combinations with examples and styling applications.",
      type: "PDF",
      size: "5.2 MB",
      downloads: "15.7K"
    },
    {
      id: 4,
      title: "Shopping Strategy Workbook",
      description: "Step-by-step workbook for developing smart shopping habits and building a cohesive wardrobe.",
      type: "Guide",
      size: "4.3 MB",
      downloads: "6.8K"
    }
  ];

  // Mock data for style glossary
  const styleGlossary = [
    {
      id: 1,
      word: "Silhouette",
      pronunciation: "sil-oo-ET",
      definition: "The overall shape or outline of a garment or outfit when worn, creating a specific visual impression.",
      category: "Fundamentals",
      example: "The A-line silhouette is flattering for pear-shaped body types as it balances the hips.",
      relatedTerms: ["Shape", "Proportion", "Fit", "Cut"],
      visualExample: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      word: "Capsule Wardrobe",
      definition: "A curated collection of essential clothing items that work together harmoniously and can be mixed and matched to create multiple outfits.",
      category: "Wardrobe Planning",
      example: "A capsule wardrobe might include 30-40 pieces that create over 100 different outfit combinations.",
      relatedTerms: ["Minimalism", "Versatility", "Essentials", "Coordination"],
      visualExample: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      word: "Color Blocking",
      definition: "A styling technique that involves pairing solid colors together in bold, contrasting combinations to create visual impact.",
      category: "Styling Techniques",
      example: "Wearing a bright yellow top with royal blue pants is a classic example of color blocking.",
      relatedTerms: ["Color Theory", "Contrast", "Bold Styling", "Modern Fashion"],
      visualExample: "https://images.pixabay.com/photo/2016/03/27/19/32/woman-1283009_1280.jpg?w=300&h=200&fit=crop"
    },
    {
      id: 4,
      word: "Proportion",
      definition: "The relationship between different parts of an outfit or the balance between the upper and lower body in styling.",
      category: "Fundamentals",
      example: "Tucking in a loose top helps create better proportion by defining the waistline.",
      relatedTerms: ["Balance", "Silhouette", "Fit", "Body Shape"],
      visualExample: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop"
    }
  ];

  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'fundamentals', label: 'Fundamentals' },
    { value: 'advanced', label: 'Advanced Techniques' },
    { value: 'sustainable', label: 'Sustainable Fashion' },
    { value: 'seasonal', label: 'Seasonal Styling' },
    { value: 'wardrobe', label: 'Wardrobe Planning' },
    { value: 'trends', label: 'Trends & Forecasting' }
  ];

  const tabs = [
    { id: 'learning-paths', label: 'Learning Paths', icon: 'BookOpen' },
    { id: 'style-guides', label: 'Style Guides', icon: 'FileText' },
    { id: 'trends', label: 'Trend Forecasting', icon: 'TrendingUp' },
    { id: 'masterclasses', label: 'Masterclasses', icon: 'Play' },
    { id: 'tools', label: 'Interactive Tools', icon: 'Settings' },
    { id: 'resources', label: 'Resources', icon: 'Download' },
    { id: 'glossary', label: 'Style Glossary', icon: 'Book' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'learning-paths':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {learningPaths?.map((path) => (
              <LearningPathCard key={path?.id} path={path} />
            ))}
          </div>
        );
      case 'style-guides':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {styleGuides?.map((guide) => (
              <StyleGuideCard key={guide?.id} guide={guide} />
            ))}
          </div>
        );
      case 'trends':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendForecasts?.map((trend) => (
              <TrendForecastCard key={trend?.id} trend={trend} />
            ))}
          </div>
        );
      case 'masterclasses':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {masterclasses?.map((masterclass) => (
              <MasterclassCard key={masterclass?.id} masterclass={masterclass} />
            ))}
          </div>
        );
      case 'tools':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interactiveTools?.map((tool) => (
              <InteractiveToolCard key={tool?.id} tool={tool} />
            ))}
          </div>
        );
      case 'resources':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {downloadableResources?.map((resource) => (
              <ResourceCard key={resource?.id} resource={resource} />
            ))}
          </div>
        );
      case 'glossary':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {styleGlossary?.map((term) => (
              <GlossaryCard key={term?.id} term={term} />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-muted/50 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Style Education Hub
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Master the art of personal style with our comprehensive fashion knowledge center. 
              From styling fundamentals to advanced techniques, discover everything you need to 
              express your authentic style with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium smooth-transition hover:bg-primary/90">
                Start Learning
              </button>
              <button className="border border-border text-primary px-8 py-3 rounded-lg font-medium smooth-transition hover:bg-muted">
                Browse All Content
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Search and Filter Section */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <Input
                type="search"
                placeholder="Search fashion knowledge..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e?.target?.value)}
                className="w-full"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Select
                options={categoryOptions}
                value={selectedCategory}
                onChange={setSelectedCategory}
                placeholder="Filter by category"
                className="w-48"
              />
              <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary smooth-transition">
                <Icon name="Filter" size={16} />
                <span className="text-sm">More Filters</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Navigation Tabs */}
      <section className="py-6 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center space-x-1 overflow-x-auto scrollbar-hide">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap smooth-transition ${
                  activeTab === tab?.id
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-primary hover:bg-muted'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {renderTabContent()}
        </div>
      </section>
      {/* Newsletter Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl font-bold text-primary mb-4">
            Stay Updated with Fashion Knowledge
          </h2>
          <p className="text-muted-foreground mb-8">
            Get weekly style tips, trend insights, and exclusive educational content delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <button className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-medium smooth-transition hover:bg-accent/90">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-playfair text-xl font-bold mb-4">Stylora Education</h3>
              <p className="text-primary-foreground/80 text-sm">
                Empowering fashion enthusiasts with comprehensive style education and expert knowledge.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Learning Paths</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground smooth-transition">Style Foundations</a></li>
                <li><a href="#" className="hover:text-primary-foreground smooth-transition">Advanced Styling</a></li>
                <li><a href="#" className="hover:text-primary-foreground smooth-transition">Sustainable Fashion</a></li>
                <li><a href="#" className="hover:text-primary-foreground smooth-transition">Fashion History</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground smooth-transition">Style Guides</a></li>
                <li><a href="#" className="hover:text-primary-foreground smooth-transition">Interactive Tools</a></li>
                <li><a href="#" className="hover:text-primary-foreground smooth-transition">Masterclasses</a></li>
                <li><a href="#" className="hover:text-primary-foreground smooth-transition">Downloads</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground smooth-transition">Help Center</a></li>
                <li><a href="#" className="hover:text-primary-foreground smooth-transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary-foreground smooth-transition">Community</a></li>
                <li><a href="#" className="hover:text-primary-foreground smooth-transition">Feedback</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date()?.getFullYear()} Stylora. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StyleEducationHub;