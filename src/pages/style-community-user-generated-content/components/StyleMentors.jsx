import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const StyleMentors = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [connectedMentors, setConnectedMentors] = useState(new Set());

  const specialties = [
    { id: 'all', name: 'All Mentors', count: 156 },
    { id: 'sustainable', name: 'Sustainable Fashion', count: 34 },
    { id: 'professional', name: 'Professional Style', count: 42 },
    { id: 'body-positive', name: 'Body Positivity', count: 28 },
    { id: 'budget', name: 'Budget Fashion', count: 31 },
    { id: 'vintage', name: 'Vintage & Thrift', count: 21 }
  ];

  const mentors = [
    {
      id: 1,
      name: "Sarah Mitchell",
      title: "Sustainable Fashion Expert",
      specialties: ["Sustainable Fashion", "Ethical Brands", "Eco-Styling"],
      bio: `Passionate about making sustainable fashion accessible and stylish. With 8 years in the fashion industry, I help people build eco-conscious wardrobes without compromising on style.\n\nI believe that sustainable fashion is the future, and I love helping others discover amazing ethical brands and styling techniques that make a positive impact.`,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
      rating: 4.9,
      reviews: 127,
      mentees: 89,
      experience: "8 years",
      responseTime: "< 2 hours",
      languages: ["English", "Spanish"],
      achievements: [
        "Featured in Vogue Sustainability",
        "Eco Fashion Week Speaker",
        "Sustainable Style Award 2024"
      ],
      tags: ["Eco-Friendly", "Ethical Brands", "Capsule Wardrobe"],
      price: "Free",
      availability: "Available",
      location: "San Francisco, CA"
    },
    {
      id: 2,
      name: "Marcus Chen",
      title: "Professional Style Consultant",
      specialties: ["Corporate Fashion", "Executive Presence", "Career Transitions"],
      bio: `Former corporate executive turned style consultant. I specialize in helping professionals build wardrobes that command respect and boost confidence in the workplace.\n\nWhether you're climbing the corporate ladder or transitioning careers, I'll help you dress for the role you want, not just the one you have.`,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      rating: 4.8,
      reviews: 94,
      mentees: 156,
      experience: "12 years",
      responseTime: "< 4 hours",
      languages: ["English", "Mandarin"],
      achievements: [
        "Fortune 500 Style Consultant",
        "LinkedIn Learning Instructor",
        "Professional Image Award"
      ],
      tags: ["Corporate Style", "Leadership Presence", "Career Fashion"],
      price: "$50/session",
      availability: "Available",
      location: "New York, NY"
    },
    {
      id: 3,
      name: "Priya Sharma",
      title: "Body Positive Style Coach",
      specialties: ["Body Positivity", "Inclusive Fashion", "Confidence Building"],
      bio: `Dedicated to helping people of all shapes and sizes find their style confidence. I believe that fashion should celebrate every body, and I'm here to help you discover what makes you feel amazing.\n\nMy approach focuses on self-love, body acceptance, and finding clothes that make you feel like the best version of yourself.`,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
      rating: 5.0,
      reviews: 203,
      mentees: 234,
      experience: "6 years",
      responseTime: "< 1 hour",
      languages: ["English", "Hindi"],
      achievements: [
        "Body Positive Fashion Week Founder",
        "TEDx Speaker",
        "Inclusive Style Award 2025"
      ],
      tags: ["Body Positivity", "Self-Love", "Inclusive Fashion"],
      price: "Free",
      availability: "Available",
      location: "London, UK"
    },
    {
      id: 4,
      name: "Jessica Rodriguez",
      title: "Budget Fashion Guru",
      specialties: ["Budget Shopping", "Thrift Styling", "DIY Fashion"],
      bio: `Proving that great style doesn't require a big budget! I'm passionate about helping people create amazing looks through smart shopping, thrifting, and creative styling.\n\nFrom finding designer dupes to upcycling old pieces, I'll teach you how to look expensive on any budget.`,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      rating: 4.7,
      reviews: 156,
      mentees: 178,
      experience: "5 years",
      responseTime: "< 3 hours",
      languages: ["English", "Portuguese"],
      achievements: [
        "Budget Style Blog (500K followers)",
        "Thrift Flip Champion",
        "Affordable Fashion Award"
      ],
      tags: ["Budget Fashion", "Thrift Finds", "DIY Style"],
      price: "$25/session",
      availability: "Busy",
      location: "Los Angeles, CA"
    },
    {
      id: 5,
      name: "David Kim",
      title: "Vintage Fashion Specialist",
      specialties: ["Vintage Styling", "Fashion History", "Timeless Pieces"],
      bio: `Vintage fashion enthusiast with deep knowledge of fashion history and timeless styling. I help people incorporate vintage pieces into modern wardrobes for unique, sustainable style.\n\nWhether you're new to vintage or a seasoned collector, I'll help you navigate eras, authenticate pieces, and style them for today.`,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      rating: 4.9,
      reviews: 87,
      mentees: 92,
      experience: "10 years",
      responseTime: "< 6 hours",
      languages: ["English", "Korean"],
      achievements: [
        "Vintage Fashion Museum Curator",
        "Fashion History Author",
        "Vintage Style Expert Award"
      ],
      tags: ["Vintage Fashion", "Fashion History", "Timeless Style"],
      price: "$40/session",
      availability: "Available",
      location: "Chicago, IL"
    },
    {
      id: 6,
      name: "Emma Thompson",
      title: "Color & Style Analyst",
      specialties: ["Color Analysis", "Personal Shopping", "Wardrobe Audits"],
      bio: `Certified color analyst and personal stylist helping people discover their perfect colors and personal style. I believe that understanding your color palette is the foundation of great style.\n\nI offer comprehensive color analysis, style consultations, and wardrobe building services to help you look and feel your absolute best.`,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      rating: 4.8,
      reviews: 142,
      mentees: 167,
      experience: "7 years",
      responseTime: "< 2 hours",
      languages: ["English", "French"],
      achievements: [
        "Certified Color Analyst",
        "Personal Styling Institute Graduate",
        "Style Transformation Award"
      ],
      tags: ["Color Analysis", "Personal Shopping", "Style Transformation"],
      price: "$60/session",
      availability: "Available",
      location: "Toronto, CA"
    }
  ];

  const filteredMentors = selectedSpecialty === 'all' 
    ? mentors 
    : mentors?.filter(mentor => 
        mentor?.specialties?.some(specialty => 
          specialty?.toLowerCase()?.includes(selectedSpecialty?.replace('-', ' '))
        )
      );

  const connectWithMentor = (mentorId) => {
    setConnectedMentors(prev => {
      const newSet = new Set(prev);
      if (newSet?.has(mentorId)) {
        newSet?.delete(mentorId);
      } else {
        newSet?.add(mentorId);
      }
      return newSet;
    });
  };

  const getAvailabilityColor = (availability) => {
    switch (availability) {
      case 'Available': return 'bg-success/10 text-success';
      case 'Busy': return 'bg-warning/10 text-warning';
      case 'Offline': return 'bg-error/10 text-error';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-playfair font-bold text-primary mb-4">
          Connect with Style Mentors
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Learn from experienced fashion enthusiasts who are passionate about sharing their knowledge and helping you discover your unique style.
        </p>
      </div>
      {/* Specialty Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {specialties?.map((specialty) => (
          <button
            key={specialty?.id}
            onClick={() => setSelectedSpecialty(specialty?.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium smooth-transition ${
              selectedSpecialty === specialty?.id
                ? 'bg-accent text-accent-foreground'
                : 'bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent'
            }`}
          >
            {specialty?.name} ({specialty?.count})
          </button>
        ))}
      </div>
      {/* Mentors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        {filteredMentors?.map((mentor) => (
          <div key={mentor?.id} className="bg-card rounded-lg border border-border overflow-hidden editorial-shadow">
            {/* Mentor Header */}
            <div className="p-6 pb-4">
              <div className="flex items-start space-x-4 mb-4">
                <div className="relative">
                  <Image
                    src={mentor?.avatar}
                    alt={mentor?.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-card ${
                    mentor?.availability === 'Available' ? 'bg-success' : 
                    mentor?.availability === 'Busy' ? 'bg-warning' : 'bg-error'
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-playfair font-semibold text-primary mb-1">
                    {mentor?.name}
                  </h3>
                  <p className="text-accent font-medium mb-2">{mentor?.title}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={14} className="text-yellow-500" />
                      <span>{mentor?.rating}</span>
                      <span>({mentor?.reviews})</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Users" size={14} />
                      <span>{mentor?.mentees} mentees</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability & Price */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getAvailabilityColor(mentor?.availability)}`}>
                  {mentor?.availability}
                </span>
                <span className="text-lg font-semibold text-primary">{mentor?.price}</span>
              </div>

              {/* Bio */}
              <p className="text-foreground text-sm mb-4 line-clamp-4 whitespace-pre-line">
                {mentor?.bio}
              </p>

              {/* Specialties */}
              <div className="flex flex-wrap gap-2 mb-4">
                {mentor?.specialties?.slice(0, 3)?.map((specialty, index) => (
                  <span
                    key={index}
                    className="inline-block bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                  >
                    {specialty}
                  </span>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-muted rounded-lg">
                <div>
                  <p className="text-xs text-muted-foreground">Experience</p>
                  <p className="text-sm font-medium text-primary">{mentor?.experience}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Response Time</p>
                  <p className="text-sm font-medium text-primary">{mentor?.responseTime}</p>
                </div>
              </div>

              {/* Languages */}
              <div className="mb-4">
                <p className="text-xs text-muted-foreground mb-1">Languages</p>
                <div className="flex space-x-2">
                  {mentor?.languages?.map((language, index) => (
                    <span key={index} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                      {language}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <Button
                  variant={connectedMentors?.has(mentor?.id) ? "outline" : "default"}
                  fullWidth
                  iconName={connectedMentors?.has(mentor?.id) ? "Check" : "MessageCircle"}
                  iconPosition="left"
                  onClick={() => connectWithMentor(mentor?.id)}
                  disabled={mentor?.availability === 'Offline'}
                >
                  {connectedMentors?.has(mentor?.id) ? "Connected" : "Connect"}
                </Button>
                <Button variant="ghost" iconName="Eye" size="default">
                  View Profile
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Become a Mentor CTA */}
      <div className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-lg p-8 text-center">
        <Icon name="Users" size={48} className="text-accent mx-auto mb-4" />
        <h3 className="text-2xl font-playfair font-bold text-primary mb-2">
          Become a Style Mentor
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Share your fashion expertise and help others discover their style confidence. Join our community of passionate style mentors and make a difference in someone's fashion journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="default" iconName="UserPlus" iconPosition="left">
            Apply to be a Mentor
          </Button>
          <Button variant="outline" iconName="Info" iconPosition="left">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StyleMentors;