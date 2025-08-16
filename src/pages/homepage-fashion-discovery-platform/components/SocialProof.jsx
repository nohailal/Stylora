import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProof = () => {
  const testimonials = [
    {
      id: 1,
      user: {
        name: "Sarah Mitchell",
        role: "Fashion Blogger",
        avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
        verified: true
      },
      content: `Stylora completely transformed my approach to fashion. The AI styling suggestions are incredibly accurate, and I've discovered so many amazing pieces I never would have found otherwise. My confidence has skyrocketed!`,
      rating: 5,
      beforeAfter: {
        before: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=300",
        after: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      transformation: "Discovered my signature minimalist style"
    },
    {
      id: 2,
      user: {
        name: "Marcus Chen",
        role: "Creative Director",
        avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
        verified: false
      },
      content: `The community aspect of Stylora is what sets it apart. I've connected with so many like-minded fashion enthusiasts and learned styling techniques I never knew existed. It's like having a personal stylist and fashion school combined.`,
      rating: 5,
      beforeAfter: {
        before: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=300",
        after: "https://images.pixabay.com/photo/2016/03/27/22/16/fashion-1284496_1280.jpg"
      },
      transformation: "Elevated professional wardrobe"
    },
    {
      id: 3,
      user: {
        name: "Priya Sharma",
        role: "Entrepreneur",
        avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400",
        verified: true
      },
      content: `As someone who values sustainable fashion, finding Stylora was a game-changer. The platform's focus on conscious consumption and quality pieces aligns perfectly with my values. Plus, the styling advice is spot-on!`,
      rating: 5,
      beforeAfter: {
        before: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        after: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      transformation: "Built sustainable luxury wardrobe"
    }
  ];

  const mediaFeatures = [
    {
      publication: "Vogue",
      quote: "Stylora is revolutionizing how we discover and curate personal style",
      logo: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      publication: "Harper\'s Bazaar",
      quote: "The future of fashion discovery is here",
      logo: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      publication: "Elle",
      quote: "A game-changing platform for fashion enthusiasts",
      logo: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ];

  const stats = [
    {
      number: "50K+",
      label: "Style Transformations",
      icon: "Sparkles"
    },
    {
      number: "98%",
      label: "User Satisfaction",
      icon: "Heart"
    },
    {
      number: "200+",
      label: "Featured Designers",
      icon: "Crown"
    },
    {
      number: "1M+",
      label: "Community Members",
      icon: "Users"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
            Trusted by Fashion Enthusiasts Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            Join thousands of style-conscious individuals who have transformed their fashion journey with Stylora.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats?.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat?.icon} size={32} className="text-accent" />
                </div>
                <div className="text-3xl lg:text-4xl font-playfair font-bold text-primary mb-2">
                  {stat?.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat?.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-playfair font-bold text-primary mb-4">
              Style Transformation Stories
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real people, real transformations, real confidence boosts.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials?.map((testimonial) => (
              <div key={testimonial?.id} className="bg-card rounded-2xl p-8 editorial-shadow smooth-transition hover:shadow-lg">
                {/* Before/After Images */}
                <div className="flex space-x-4 mb-6">
                  <div className="flex-1">
                    <div className="relative">
                      <Image
                        src={testimonial?.beforeAfter?.before}
                        alt="Before transformation"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        Before
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Icon name="ArrowRight" size={24} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="relative">
                      <Image
                        src={testimonial?.beforeAfter?.after}
                        alt="After transformation"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="absolute bottom-2 left-2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded">
                        After
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-accent fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial?.content}"
                </p>

                {/* Transformation Note */}
                <div className="bg-accent/10 rounded-lg p-3 mb-6">
                  <p className="text-sm text-accent font-medium">
                    ✨ {testimonial?.transformation}
                  </p>
                </div>

                {/* User Info */}
                <div className="flex items-center space-x-3">
                  <Image
                    src={testimonial?.user?.avatar}
                    alt={testimonial?.user?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium text-primary">{testimonial?.user?.name}</h4>
                      {testimonial?.user?.verified && (
                        <Icon name="BadgeCheck" size={16} className="text-accent" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{testimonial?.user?.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Features */}
        <div className="text-center">
          <h3 className="text-2xl lg:text-3xl font-playfair font-bold text-primary mb-8">
            Featured In
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {mediaFeatures?.map((feature, index) => (
              <div key={index} className="bg-card rounded-xl p-6 editorial-shadow">
                <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 overflow-hidden">
                  <Image
                    src={feature?.logo}
                    alt={feature?.publication}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-playfair font-bold text-lg text-primary mb-2">
                  {feature?.publication}
                </h4>
                <p className="text-muted-foreground italic">
                  "{feature?.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;