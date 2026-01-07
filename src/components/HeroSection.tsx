import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '-3s' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Profile Photo */}
          <div
            className="mb-8 animate-fade-in opacity-0"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="relative inline-block">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/50 animate-pulse-glow">
                <img
                  src={profilePhoto}
                  alt="Abhishek Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Greeting */}
          <p
            className="text-primary font-medium mb-4 text-xl animate-fade-in opacity-0"
            style={{ animationDelay: '0.2s' }}
          >
            Hi, I&apos;m Abhishek Kumar
          </p>

          {/* Role */}
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 animate-fade-in opacity-0"
            style={{ animationDelay: '0.4s' }}
          >
            <span className="gradient-text">
              Computer Science Engineering Student
            </span>
            <br />
            <span className="text-foreground text-2xl md:text-3xl">
              MERN Stack & AI Enthusiast
            </span>
          </h1>

          {/* Description */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in opacity-0"
            style={{ animationDelay: '0.6s' }}
          >
            I build full-stack web applications and AI-powered solutions that
            solve real-world problems.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground px-8 py-6 text-lg hover:scale-105 transition-transform"
              asChild
            >
              <a href="/Abhishek_Kumar_Resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg border-primary/50 hover:bg-primary/10"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://github.com/alfabuddy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all hover:-translate-y-1"
            >
              <Github size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/abhishek-kumar-263b46281/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all hover:-translate-y-1"
            >
              <Linkedin size={22} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center animate-bounce">
            <a
              href="#about"
              className="text-muted-foreground hover:text-primary"
            >
              <ArrowDown size={24} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
