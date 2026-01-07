import { Code2, Shield, Brain, Trophy } from 'lucide-react';

const experiences = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Built multiple full-stack MERN projects with scalable architectures',
  },
  {
    icon: Shield,
    title: 'Authentication & Security',
    description: 'Implemented authentication & authorization using JWT and Bcrypt',
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Worked with AI pipelines using LLMs and embeddings',
  },
  {
    icon: Trophy,
    title: 'Workshops & Competitions',
    description: 'Participated in ML & DL workshops and competitions',
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">My Journey</p>
            <h2 className="section-heading">Experience & Learning</h2>
            <p className="section-subheading mx-auto">
              Key experiences and skills I've developed along the way
            </p>
          </div>

          {/* Experience Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className="skill-card text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <exp.icon size={32} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{exp.title}</h3>
                <p className="text-muted-foreground text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
