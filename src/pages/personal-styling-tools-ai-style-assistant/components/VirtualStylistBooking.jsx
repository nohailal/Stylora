import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';

const VirtualStylistBooking = () => {
  const [selectedStylist, setSelectedStylist] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [sessionType, setSessionType] = useState('');
  const [showBookingForm, setShowBookingForm] = useState(false);

  const stylists = [
    {
      id: 1,
      name: "Emma Rodriguez",
      title: "Senior Fashion Stylist",
      specialties: ["Professional Wardrobe", "Color Analysis", "Personal Shopping"],
      experience: "8 years",
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop",
      price: "$89/hour",
      bio: "Emma specializes in helping professionals build confident, versatile wardrobes. With a background in corporate styling and color theory, she creates looks that enhance your natural beauty while fitting your lifestyle.",
      availability: ["Mon", "Tue", "Wed", "Thu", "Fri"]
    },
    {
      id: 2,
      name: "Marcus Chen",
      title: "Creative Style Director",
      specialties: ["Editorial Styling", "Trend Forecasting", "Brand Development"],
      experience: "12 years",
      rating: 4.8,
      reviews: 89,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=200&h=200&fit=crop",
      price: "$125/hour",
      bio: "Marcus brings high-fashion expertise to personal styling. Having worked with magazines and fashion weeks, he helps clients develop bold, authentic style that makes a statement.",
      availability: ["Tue", "Wed", "Thu", "Sat", "Sun"]
    },
    {
      id: 3,
      name: "Sofia Martinez",
      title: "Sustainable Style Expert",
      specialties: ["Sustainable Fashion", "Capsule Wardrobes", "Vintage Styling"],
      experience: "6 years",
      rating: 4.9,
      reviews: 156,
      image: "https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_960_720.jpg?w=200&h=200&fit=crop",
      price: "$75/hour",
      bio: "Sofia is passionate about sustainable fashion and helping clients build ethical, long-lasting wardrobes. She specializes in vintage finds and eco-friendly brands that don't compromise on style.",
      availability: ["Mon", "Wed", "Fri", "Sat", "Sun"]
    },
    {
      id: 4,
      name: "David Kim",
      title: "Lifestyle Stylist",
      specialties: ["Casual Styling", "Travel Wardrobe", "Minimalist Fashion"],
      experience: "5 years",
      rating: 4.7,
      reviews: 94,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      price: "$65/hour",
      bio: "David focuses on creating effortless, comfortable style for busy lifestyles. He helps clients build versatile wardrobes that work from day to night and home to travel.",
      availability: ["Mon", "Tue", "Thu", "Fri", "Sat"]
    }
  ];

  const sessionTypes = [
    { value: 'wardrobe-audit', label: 'Wardrobe Audit (90 min)' },
    { value: 'personal-shopping', label: 'Personal Shopping Session (2 hours)' },
    { value: 'color-analysis', label: 'Color Analysis (60 min)' },
    { value: 'style-consultation', label: 'Style Consultation (60 min)' },
    { value: 'outfit-planning', label: 'Outfit Planning (45 min)' }
  ];

  const timeSlots = [
    { value: '09:00', label: '9:00 AM' },
    { value: '10:30', label: '10:30 AM' },
    { value: '12:00', label: '12:00 PM' },
    { value: '13:30', label: '1:30 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '16:30', label: '4:30 PM' },
    { value: '18:00', label: '6:00 PM' }
  ];

  const handleStylistSelect = (stylist) => {
    setSelectedStylist(stylist);
    setShowBookingForm(true);
  };

  const handleBooking = () => {
    // Mock booking logic
    alert(`Booking confirmed with ${selectedStylist?.name} on ${selectedDate} at ${selectedTime}`);
    resetBooking();
  };

  const resetBooking = () => {
    setSelectedStylist(null);
    setSelectedDate('');
    setSelectedTime('');
    setSessionType('');
    setShowBookingForm(false);
  };

  if (showBookingForm && selectedStylist) {
    return (
      <div className="space-y-8">
        {/* Booking Header */}
        <div className="bg-card rounded-lg p-6">
          <div className="flex items-center space-x-4 mb-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setShowBookingForm(false)}
              iconName="ArrowLeft"
              iconPosition="left"
            >
              Back to Stylists
            </Button>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <Image
                src={selectedStylist?.image}
                alt={selectedStylist?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-playfair font-bold text-primary">{selectedStylist?.name}</h3>
              <p className="text-muted-foreground mb-2">{selectedStylist?.title}</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Icon name="Star" size={16} className="text-accent" />
                  <span className="text-sm font-medium">{selectedStylist?.rating}</span>
                  <span className="text-sm text-muted-foreground">({selectedStylist?.reviews} reviews)</span>
                </div>
                <span className="text-sm font-semibold text-accent">{selectedStylist?.price}</span>
              </div>
            </div>
          </div>
        </div>
        {/* Booking Form */}
        <div className="bg-card rounded-lg p-8">
          <h4 className="text-lg font-semibold text-primary mb-6">Book Your Session</h4>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Session Type */}
            <div>
              <Select
                label="Session Type"
                options={sessionTypes}
                value={sessionType}
                onChange={setSessionType}
                placeholder="Choose session type"
                required
              />
            </div>

            {/* Date Selection */}
            <div>
              <Input
                label="Preferred Date"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e?.target?.value)}
                min={new Date()?.toISOString()?.split('T')?.[0]}
                required
              />
            </div>

            {/* Time Selection */}
            <div>
              <Select
                label="Preferred Time"
                options={timeSlots}
                value={selectedTime}
                onChange={setSelectedTime}
                placeholder="Choose time slot"
                required
              />
            </div>

            {/* Contact Info */}
            <div>
              <Input
                label="Your Name"
                type="text"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <Input
                label="Email Address"
                type="email"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <Input
                label="Phone Number"
                type="tel"
                placeholder="+1 (555) 123-4567"
                required
              />
            </div>
          </div>

          {/* Special Requests */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-primary mb-2">
              Special Requests or Goals
            </label>
            <textarea
              className="w-full p-3 border border-border rounded-lg resize-none focus:ring-2 focus:ring-accent focus:border-transparent"
              rows={4}
              placeholder="Tell us about your style goals, specific events you're preparing for, or any other details that would help your stylist..."
            ></textarea>
          </div>

          {/* Session Details */}
          <div className="mt-8 p-6 bg-muted/30 rounded-lg">
            <h5 className="font-semibold text-primary mb-4">Session Details</h5>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="Video" size={16} className="text-accent" />
                <span className="text-muted-foreground">Virtual session via video call</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-accent" />
                <span className="text-muted-foreground">Duration varies by session type</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="FileText" size={16} className="text-accent" />
                <span className="text-muted-foreground">Personalized style guide included</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MessageCircle" size={16} className="text-accent" />
                <span className="text-muted-foreground">Follow-up support for 1 week</span>
              </div>
            </div>
          </div>

          {/* Booking Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end mt-8">
            <Button variant="outline" onClick={resetBooking}>
              Cancel
            </Button>
            <Button 
              variant="default" 
              onClick={handleBooking}
              disabled={!sessionType || !selectedDate || !selectedTime}
              iconName="Calendar"
              iconPosition="left"
            >
              Confirm Booking
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Video" size={32} className="text-accent" />
        </div>
        <h3 className="text-2xl font-playfair font-bold text-primary mb-2">
          Book a Virtual Stylist
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Connect with our expert stylists for personalized fashion guidance. From wardrobe audits to color analysis, get professional styling advice from the comfort of your home.
        </p>
      </div>
      {/* Session Types Overview */}
      <div className="bg-card rounded-lg p-8">
        <h4 className="text-lg font-semibold text-primary mb-6">Available Sessions</h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Wardrobe Audit",
              duration: "90 minutes",
              price: "From $65",
              description: "Complete closet review with organization tips and outfit suggestions",
              icon: "Shirt"
            },
            {
              name: "Color Analysis",
              duration: "60 minutes", 
              price: "From $75",
              description: "Discover your perfect color palette and seasonal color type",
              icon: "Palette"
            },
            {
              name: "Personal Shopping",
              duration: "2 hours",
              price: "From $89",
              description: "Guided shopping session with curated recommendations",
              icon: "ShoppingBag"
            },
            {
              name: "Style Consultation",
              duration: "60 minutes",
              price: "From $65",
              description: "Comprehensive style assessment and personalized recommendations",
              icon: "Users"
            },
            {
              name: "Outfit Planning",
              duration: "45 minutes",
              price: "From $55",
              description: "Plan outfits for specific events or occasions",
              icon: "Calendar"
            },
            {
              name: "Trend Consultation",
              duration: "45 minutes",
              price: "From $75",
              description: "Learn how to incorporate current trends into your personal style",
              icon: "TrendingUp"
            }
          ]?.map((session, index) => (
            <div key={index} className="border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Icon name={session?.icon} size={24} className="text-accent" />
              </div>
              <h5 className="font-semibold text-primary mb-2">{session?.name}</h5>
              <div className="flex items-center space-x-2 mb-3">
                <Icon name="Clock" size={14} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{session?.duration}</span>
                <span className="text-sm font-semibold text-accent">{session?.price}</span>
              </div>
              <p className="text-sm text-muted-foreground">{session?.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Stylists Grid */}
      <div className="bg-card rounded-lg p-8">
        <h4 className="text-lg font-semibold text-primary mb-6">Meet Our Expert Stylists</h4>
        <div className="grid md:grid-cols-2 gap-8">
          {stylists?.map(stylist => (
            <div key={stylist?.id} className="border border-border rounded-lg p-6 hover:border-accent/50 transition-all duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={stylist?.image}
                    alt={stylist?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-primary mb-1">{stylist?.name}</h5>
                  <p className="text-sm text-muted-foreground mb-2">{stylist?.title}</p>
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={14} className="text-accent" />
                      <span className="text-sm font-medium">{stylist?.rating}</span>
                      <span className="text-sm text-muted-foreground">({stylist?.reviews})</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{stylist?.experience} exp</span>
                  </div>
                  <span className="text-sm font-semibold text-accent">{stylist?.price}</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{stylist?.bio}</p>

              <div className="mb-4">
                <h6 className="text-sm font-medium text-primary mb-2">Specialties:</h6>
                <div className="flex flex-wrap gap-2">
                  {stylist?.specialties?.map((specialty, index) => (
                    <span key={index} className="px-2 py-1 bg-muted text-xs rounded-full">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h6 className="text-sm font-medium text-primary mb-2">Available:</h6>
                <div className="flex space-x-1">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']?.map(day => (
                    <span
                      key={day}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${
                        stylist?.availability?.includes(day)
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {day?.charAt(0)}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Message
                </Button>
                <Button 
                  variant="default" 
                  size="sm" 
                  onClick={() => handleStylistSelect(stylist)}
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Book Session
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* FAQ Section */}
      <div className="bg-card rounded-lg p-8">
        <h4 className="text-lg font-semibold text-primary mb-6">Frequently Asked Questions</h4>
        <div className="space-y-6">
          {[
            {
              question: "How do virtual styling sessions work?",
              answer: "Sessions are conducted via video call where you'll work one-on-one with your stylist. You can show your current wardrobe, try on outfits, and receive real-time feedback and recommendations."
            },
            {
              question: "What should I prepare for my session?",
              answer: "Have your wardrobe accessible, good lighting in your space, and any specific questions or goals written down. Your stylist will send a preparation guide after booking."
            },
            {
              question: "Can I reschedule my appointment?",
              answer: "Yes, you can reschedule up to 24 hours before your appointment without any fees. Less than 24 hours notice may incur a rescheduling fee."
            },
            {
              question: "Do I get materials after the session?",
              answer: "Absolutely! You'll receive a personalized style guide, outfit combinations, shopping recommendations, and follow-up support for one week after your session."
            }
          ]?.map((faq, index) => (
            <div key={index} className="border-b border-border pb-4 last:border-b-0">
              <h6 className="font-medium text-primary mb-2">{faq?.question}</h6>
              <p className="text-sm text-muted-foreground">{faq?.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualStylistBooking;