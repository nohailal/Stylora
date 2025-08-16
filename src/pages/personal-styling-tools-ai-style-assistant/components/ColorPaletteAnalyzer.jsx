import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ColorPaletteAnalyzer = () => {
  const [analysisMethod, setAnalysisMethod] = useState('upload'); // 'upload' or 'quiz'
  const [uploadedImage, setUploadedImage] = useState(null);
  const [currentQuizStep, setCurrentQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);

  const colorQuizQuestions = [
    {
      id: 1,
      question: "What\'s your natural hair color?",
      options: [
        { id: 'blonde', label: 'Blonde', color: '#F4E4BC' },
        { id: 'brown', label: 'Brown', color: '#8B4513' },
        { id: 'black', label: 'Black', color: '#2C2C2C' },
        { id: 'red', label: 'Red', color: '#CD853F' },
        { id: 'gray', label: 'Gray/Silver', color: '#A9A9A9' }
      ]
    },
    {
      id: 2,
      question: "What\'s your natural eye color?",
      options: [
        { id: 'blue', label: 'Blue', color: '#4169E1' },
        { id: 'green', label: 'Green', color: '#228B22' },
        { id: 'brown', label: 'Brown', color: '#8B4513' },
        { id: 'hazel', label: 'Hazel', color: '#8E7618' },
        { id: 'gray', label: 'Gray', color: '#708090' }
      ]
    },
    {
      id: 3,
      question: "How would you describe your skin undertone?",
      options: [
        { id: 'warm', label: 'Warm (Golden/Yellow)', color: '#F4E4BC' },
        { id: 'cool', label: 'Cool (Pink/Blue)', color: '#F8E8E8' },
        { id: 'neutral', label: 'Neutral (Balanced)', color: '#F5F5DC' },
        { id: 'olive', label: 'Olive (Green)', color: '#DAA520' }
      ]
    },
    {
      id: 4,
      question: "Which metals look best on you?",
      options: [
        { id: 'gold', label: 'Gold', color: '#FFD700' },
        { id: 'silver', label: 'Silver', color: '#C0C0C0' },
        { id: 'rose-gold', label: 'Rose Gold', color: '#E8B4B8' },
        { id: 'both', label: 'Both look good', color: '#D4A574' }
      ]
    }
  ];

  const colorSeasons = {
    spring: {
      name: "Bright Spring",
      description: "You have warm undertones with bright, clear coloring. Your best colors are vibrant and warm.",
      characteristics: ["Warm undertones", "Bright, clear features", "High contrast"],
      bestColors: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7", "#DDA0DD"],
      avoidColors: ["#2C3E50", "#8B4513", "#556B2F", "#800080"],
      recommendations: [
        "Wear bright, clear colors close to your face",
        "Choose warm-toned makeup",
        "Opt for gold jewelry",
        "Avoid muted or dusty colors"
      ]
    },
    summer: {
      name: "Cool Summer",
      description: "You have cool undertones with soft, muted coloring. Your best colors are cool and gentle.",
      characteristics: ["Cool undertones", "Soft, muted features", "Low to medium contrast"],
      bestColors: ["#B19CD9", "#87CEEB", "#F0E68C", "#DDA0DD", "#98FB98", "#FFB6C1"],
      avoidColors: ["#FF4500", "#FFD700", "#8B4513", "#DC143C"],
      recommendations: [
        "Choose soft, muted colors",
        "Wear cool-toned makeup",
        "Opt for silver jewelry",
        "Avoid bright, warm colors"
      ]
    },
    autumn: {
      name: "Deep Autumn",
      description: "You have warm undertones with rich, deep coloring. Your best colors are warm and earthy.",
      characteristics: ["Warm undertones", "Rich, deep features", "High contrast"],
      bestColors: ["#8B4513", "#CD853F", "#DAA520", "#B22222", "#228B22", "#4B0082"],
      avoidColors: ["#87CEEB", "#FFB6C1", "#E6E6FA", "#F0F8FF"],
      recommendations: [
        "Wear rich, warm colors",
        "Choose warm-toned makeup",
        "Opt for gold or copper jewelry",
        "Avoid pastel or icy colors"
      ]
    },
    winter: {
      name: "Clear Winter",
      description: "You have cool undertones with high contrast coloring. Your best colors are clear and bold.",
      characteristics: ["Cool undertones", "High contrast features", "Clear, bright coloring"],
      bestColors: ["#000000", "#FFFFFF", "#DC143C", "#4169E1", "#8A2BE2", "#FF1493"],
      avoidColors: ["#F4E4BC", "#DDA0DD", "#F0E68C", "#CD853F"],
      recommendations: [
        "Wear clear, bold colors",
        "Choose cool-toned makeup",
        "Opt for silver or platinum jewelry",
        "Avoid warm, muted colors"
      ]
    }
  };

  const handleImageUpload = (event) => {
    const file = event?.target?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e?.target?.result);
        // Simulate AI analysis
        setTimeout(() => {
          analyzeColors('summer'); // Mock result
        }, 2000);
      };
      reader?.readAsDataURL(file);
    }
  };

  const handleQuizAnswer = (questionId, answerId) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionId]: answerId
    }));
  };

  const nextQuizStep = () => {
    if (currentQuizStep < colorQuizQuestions?.length - 1) {
      setCurrentQuizStep(prev => prev + 1);
    } else {
      analyzeQuizResults();
    }
  };

  const prevQuizStep = () => {
    if (currentQuizStep > 0) {
      setCurrentQuizStep(prev => prev - 1);
    }
  };

  const analyzeQuizResults = () => {
    // Simple algorithm to determine color season
    const answers = Object.values(quizAnswers);
    let season = 'spring'; // default

    // Mock analysis logic
    if (answers?.includes('cool') || answers?.includes('silver') || answers?.includes('blue')) {
      season = Math.random() > 0.5 ? 'summer' : 'winter';
    } else if (answers?.includes('warm') || answers?.includes('gold') || answers?.includes('brown')) {
      season = Math.random() > 0.5 ? 'spring' : 'autumn';
    }

    analyzeColors(season);
  };

  const analyzeColors = (seasonKey) => {
    setAnalysisResults(colorSeasons?.[seasonKey]);
    setShowResults(true);
  };

  const resetAnalysis = () => {
    setAnalysisMethod('upload');
    setUploadedImage(null);
    setCurrentQuizStep(0);
    setQuizAnswers({});
    setShowResults(false);
    setAnalysisResults(null);
  };

  if (showResults && analysisResults) {
    return (
      <div className="bg-card rounded-lg p-8">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="Palette" size={40} className="text-accent" />
          </div>
          <h3 className="text-3xl font-playfair font-bold text-primary mb-2">
            Your Color Season: {analysisResults?.name}
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {analysisResults?.description}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Characteristics */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Your Color Characteristics</h4>
            <div className="space-y-3">
              {analysisResults?.characteristics?.map((characteristic, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">{characteristic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Style Recommendations</h4>
            <div className="space-y-3">
              {analysisResults?.recommendations?.map((rec, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-accent mt-1" />
                  <span className="text-sm text-muted-foreground">{rec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Color Palettes */}
        <div className="mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Best Colors */}
            <div>
              <h4 className="font-semibold text-primary mb-4">Your Best Colors</h4>
              <div className="grid grid-cols-6 gap-2 mb-4">
                {analysisResults?.bestColors?.map((color, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-lg border border-border"
                    style={{ backgroundColor: color }}
                    title={color}
                  ></div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                These colors enhance your natural beauty and make you glow.
              </p>
            </div>

            {/* Colors to Avoid */}
            <div>
              <h4 className="font-semibold text-primary mb-4">Colors to Avoid</h4>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {analysisResults?.avoidColors?.map((color, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-lg border border-border relative"
                    style={{ backgroundColor: color }}
                    title={color}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon name="X" size={16} className="text-white drop-shadow-lg" />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                These colors may wash you out or clash with your natural coloring.
              </p>
            </div>
          </div>
        </div>
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" onClick={resetAnalysis} iconName="RotateCcw" iconPosition="left">
            New Analysis
          </Button>
          <Button variant="default" iconName="Download" iconPosition="left">
            Download Color Guide
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
          <Icon name="Palette" size={32} className="text-accent" />
        </div>
        <h3 className="text-2xl font-playfair font-bold text-primary mb-2">
          Color Palette Analyzer
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover your most flattering colors through photo analysis or our comprehensive color quiz. Get a personalized color guide that enhances your natural beauty.
        </p>
      </div>
      {/* Method Selection */}
      <div className="flex justify-center">
        <div className="bg-muted rounded-lg p-1 flex">
          <button
            onClick={() => setAnalysisMethod('upload')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              analysisMethod === 'upload' ?'bg-background text-primary shadow-sm' :'text-muted-foreground hover:text-primary'
            }`}
          >
            Photo Upload
          </button>
          <button
            onClick={() => setAnalysisMethod('quiz')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              analysisMethod === 'quiz' ?'bg-background text-primary shadow-sm' :'text-muted-foreground hover:text-primary'
            }`}
          >
            Color Quiz
          </button>
        </div>
      </div>
      {/* Photo Upload Method */}
      {analysisMethod === 'upload' && (
        <div className="bg-card rounded-lg p-8">
          <div className="max-w-md mx-auto">
            {!uploadedImage ? (
              <div>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <Icon name="Upload" size={48} className="text-muted-foreground mx-auto mb-4" />
                  <h4 className="font-semibold text-primary mb-2">Upload Your Photo</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Upload a clear photo of yourself in natural lighting for the most accurate color analysis.
                  </p>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="mb-4"
                  />
                  <div className="text-xs text-muted-foreground">
                    Supported formats: JPG, PNG, WEBP (Max 5MB)
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <h5 className="font-medium text-primary">Tips for best results:</h5>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-start space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-accent mt-0.5" />
                      <span>Use natural lighting (near a window)</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-accent mt-0.5" />
                      <span>Face the camera directly</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-accent mt-0.5" />
                      <span>Remove makeup if possible</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-accent mt-0.5" />
                      <span>Wear a neutral colored top</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={uploadedImage}
                    alt="Uploaded photo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <div className="animate-spin">
                    <Icon name="Loader2" size={20} className="text-accent" />
                  </div>
                  <span className="text-primary font-medium">Analyzing your colors...</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Our AI is analyzing your skin tone, hair color, and eye color to determine your perfect color palette.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Color Quiz Method */}
      {analysisMethod === 'quiz' && (
        <div className="bg-card rounded-lg p-8">
          <div className="max-w-2xl mx-auto">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">
                  Question {currentQuizStep + 1} of {colorQuizQuestions?.length}
                </span>
                <span className="text-sm text-accent font-medium">
                  {Math.round(((currentQuizStep + 1) / colorQuizQuestions?.length) * 100)}%
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-accent h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuizStep + 1) / colorQuizQuestions?.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <h4 className="text-xl font-playfair font-bold text-primary mb-6">
                {colorQuizQuestions?.[currentQuizStep]?.question}
              </h4>

              <div className="grid sm:grid-cols-2 gap-4">
                {colorQuizQuestions?.[currentQuizStep]?.options?.map(option => (
                  <button
                    key={option?.id}
                    onClick={() => handleQuizAnswer(colorQuizQuestions?.[currentQuizStep]?.id, option?.id)}
                    className={`flex items-center space-x-4 p-4 rounded-lg border-2 text-left transition-all duration-300 ${
                      quizAnswers?.[colorQuizQuestions?.[currentQuizStep]?.id] === option?.id
                        ? 'border-accent bg-accent/5' :'border-border hover:border-accent/50'
                    }`}
                  >
                    <div 
                      className="w-8 h-8 rounded-full border border-border"
                      style={{ backgroundColor: option?.color }}
                    ></div>
                    <span className="font-medium text-primary">{option?.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <Button
                variant="ghost"
                onClick={prevQuizStep}
                disabled={currentQuizStep === 0}
                iconName="ArrowLeft"
                iconPosition="left"
              >
                Previous
              </Button>

              <Button
                variant="default"
                onClick={nextQuizStep}
                disabled={!quizAnswers?.[colorQuizQuestions?.[currentQuizStep]?.id]}
                iconName={currentQuizStep === colorQuizQuestions?.length - 1 ? "Palette" : "ArrowRight"}
                iconPosition="right"
              >
                {currentQuizStep === colorQuizQuestions?.length - 1 ? "Analyze Colors" : "Next"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPaletteAnalyzer;