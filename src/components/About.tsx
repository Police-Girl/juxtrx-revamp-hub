import { CheckCircle, Target, Eye, Heart } from 'lucide-react';
import consultationImage from '@/assets/consultation.jpg';

const About = () => {
  const values = [
    {
      icon: <Target className="text-primary" size={24} />,
      title: "Mission",
      description: "To provide exceptional pharmaceutical services that enhance healthcare delivery and improve patient outcomes across Kenya and beyond."
    },
    {
      icon: <Eye className="text-secondary" size={24} />,
      title: "Vision",
      description: "To be the leading pharmaceutical services provider in East Africa, recognized for innovation, excellence, and commitment to healthcare advancement."
    },
    {
      icon: <Heart className="text-tertiary" size={24} />,
      title: "Values",
      description: "Integrity, Excellence, Innovation, and Compassion drive everything we do in our commitment to better healthcare solutions."
    }
  ];

  const achievements = [
    "ISO 9001:2015 Quality Management Certification",
    "Registered with Pharmacy & Poisons Board of Kenya",
    "Certified Pharmaceutical Consultancy Services",
    "Established Network of Healthcare Partners"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">JuxT Remedica</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Just Mercurial Research & Creatives (JMRC-Intel) is your trusted partner in 
            pharmaceutical excellence, providing comprehensive apothecary solutions across Kenya.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Image */}
          <div className="relative">
            <img 
              src={consultationImage} 
              alt="Medical consultation and pharmaceutical services"
              className="rounded-2xl shadow-strong w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Transforming Healthcare Through Innovation
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over a decade of experience in the pharmaceutical industry, JuxT Remedica 
                has established itself as a leader in providing comprehensive healthcare solutions. 
                Our team of experienced professionals is dedicated to supporting pharmaceutical 
                companies, healthcare providers, and patients across Kenya.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From regulatory compliance to pharmacy operations management, we offer end-to-end 
                solutions that ensure quality, safety, and efficacy in pharmaceutical services.
              </p>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Our Achievements</h4>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-soft border border-border hover:shadow-medium transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;