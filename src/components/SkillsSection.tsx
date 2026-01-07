import { Code2, Server, Brain, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'HTML, CSS, JavaScript', level: 90 },
      { name: 'Tailwind CSS', level: 80 },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'Express.js', level: 80 },
      { name: 'MongoDB', level: 78 },
      { name: 'JWT, Bcrypt', level: 75 },
    ],
  },
  {
    title: 'AI / ML',
    icon: Brain,
    skills: [
      { name: 'Python', level: 75 },
      { name: 'LangChain', level: 70 },
      { name: 'Groq Models', level: 65 },
      { name: 'Pinecone', level: 60 },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Render', level: 75 },
      { name: 'VS Code', level: 90 },
      { name: 'MongoDB Compass', level: 78 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">What I Know</p>
            <h2 className="section-heading">My Skills</h2>
            <p className="section-subheading mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="skill-card"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-xl gradient-text">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-muted-foreground text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            background: 'var(--gradient-primary)',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
