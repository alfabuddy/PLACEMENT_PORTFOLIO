import { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Message sent!',
      description: "Thanks for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">Get In Touch</p>
            <h2 className="section-heading">Contact Me</h2>
            <p className="section-subheading mx-auto">
              Have a project in mind or just want to chat? Feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display font-semibold text-xl mb-6">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground mb-8">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:abhishek9852815692@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground text-sm">
                      abhishek9852815692@gmail.com
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/abhishek-kumar-263b46281/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-muted-foreground text-sm">
                      Connect with me
                    </p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/alfabuddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Github size={24} />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-muted-foreground text-sm">
                      Check out my repos
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground text-sm">
                      Jamshedpur, Jharkhand, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="gradient-border p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Abhishek, I'd like to discuss..."
                    rows={5}
                    required
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg font-medium"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
