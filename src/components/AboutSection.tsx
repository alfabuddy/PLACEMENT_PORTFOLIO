import { GraduationCap, BookOpen, Target, Sparkles } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">Get To Know</p>
            <h2 className="section-heading">About Me</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image/Graphic */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl transform rotate-6" />
                <div className="absolute inset-0 gradient-border glow-card rounded-2xl overflow-hidden">
                  <img 
                    src={profilePhoto} 
                    alt="Abhishek Kumar" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a <span className="text-foreground font-medium">B.Tech Computer Science Engineering</span> student
                at <span className="text-primary">Siksha 'O' Anusandhan University</span>.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in <span className="text-foreground font-medium">MERN Stack development</span> and{' '}
                <span className="text-foreground font-medium">Generative AI</span>. I enjoy building scalable web apps,
                authentication systems, real-time features, and AI-integrated platforms.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently, I am exploring <span className="text-primary">deep learning</span>,{' '}
                <span className="text-primary">ML projects</span>, and{' '}
                <span className="text-primary">full-stack system design</span>.
              </p>

              {/* Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4 pt-6">
                <div className="skill-card">
                  <GraduationCap className="text-primary mb-3" size={28} />
                  <h3 className="font-display font-semibold text-lg mb-1">Education</h3>
                  <p className="text-muted-foreground text-sm">B.Tech in Computer Science</p>
                  <p className="text-muted-foreground text-sm">SOA University</p>
                </div>

                <div className="skill-card">
                  <BookOpen className="text-primary mb-3" size={28} />
                  <h3 className="font-display font-semibold text-lg mb-1">Currently Learning</h3>
                  <p className="text-muted-foreground text-sm">Deep Learning & ML</p>
                  <p className="text-muted-foreground text-sm">Full-Stack System Design</p>
                </div>

                <div className="skill-card">
                  <Target className="text-primary mb-3" size={28} />
                  <h3 className="font-display font-semibold text-lg mb-1">Focus Areas</h3>
                  <p className="text-muted-foreground text-sm">MERN Stack Development</p>
                  <p className="text-muted-foreground text-sm">AI-Integrated Solutions</p>
                </div>

                <div className="skill-card">
                  <Sparkles className="text-primary mb-3" size={28} />
                  <h3 className="font-display font-semibold text-lg mb-1">Interests</h3>
                  <p className="text-muted-foreground text-sm">Generative AI</p>
                  <p className="text-muted-foreground text-sm">Real-time Applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
