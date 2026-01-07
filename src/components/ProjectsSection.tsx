import { ExternalLink, Github, Car, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Ride Sharing Application',
    description:
      'A full-stack ride sharing platform with authentication, real-time location tracking, chat functionality, and secure online payments.',
    tech: ['MERN Stack', 'JWT Authentication', 'Google Maps / Live Location', 'Razorpay', 'Nodemailer', 'Render'],
    features: [
      'Real-time location tracking',
      'JWT Authentication',
      'Razorpay payments integration',
      'Driver-rider matching',
      'Chat functionality',
      'Email notifications',
    ],
    icon: Car,
    liveLink: 'https://placement-fullmern-web.onrender.com/',
    githubLink: 'https://github.com/alfabuddy/PLACEMENT_FULLMERN',
  },
  {
    title: 'Medical AI Chatbot',
    description:
      'An AI-powered medical chatbot that provides intelligent health-related responses using LLMs and vector databases.',
    tech: ['Python', 'LangChain', 'Groq LLM', 'Pinecone', 'Flask', 'Streamlit', 'Render'],
    features: [
      'Intelligent health responses',
      'Context-aware conversations',
      'Vector database search',
      'LLM-powered answers',
      'User-friendly interface',
      'Fast response times',
    ],
    icon: Stethoscope,
    liveLink: 'https://placement-medical-chatbott.onrender.com/',
    githubLink: 'https://github.com/alfabuddy/PLACEMENT_MEDICAL_CHATBOTT',
  },
];


const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">What I've Built</p>
            <h2 className="section-heading">My Projects</h2>
            <p className="section-subheading mx-auto">
              Real-world applications showcasing my development skills
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`project-card p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Icon/Visual */}
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center">
                    <project.icon size={80} className="text-primary opacity-50" />
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="font-display font-bold text-2xl mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  {/* Features */}
                  <ul className="grid grid-cols-2 gap-2 mb-4">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="border-primary/50 hover:bg-primary/10" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub Repo
                      </a>
                    </Button>
                    <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
