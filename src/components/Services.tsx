
import { Code, Bot, Globe, Cloud, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  price, 
  features, 
  learnMore 
}) => {
  return (
    <div className="service-card panel flex flex-col justify-between h-full">
      <div>
        <div className="service-icon mb-6 inline-flex p-3 rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-heading font-bold mb-4">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <div className="mb-6">
          <p className="text-sm text-muted-foreground mb-2">Starting from</p>
          <p className="text-3xl font-heading font-bold">{price}</p>
        </div>
        
        <ul className="space-y-2 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start text-sm">
              <span className="text-primary mr-2">•</span>
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <Button 
        variant="outline" 
        className="w-full border-primary/20 hover:border-primary/50 hover:bg-primary/5 flex justify-between"
        asChild
      >
        <Link to={learnMore}>
          <span>Learn More</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Discord Bots",
      description: "Custom Discord bots tailored to your server's specific needs.",
      icon: Bot,
      price: "£25/month",
      features: [
        "Tailored functionality",
        "Ongoing support",
        "Hosted infrastructure",
        "Secure deployment"
      ],
      learnMore: "/services"
    },
    {
      title: "Web Development",
      description: "Clean, responsive web solutions for your business or project.",
      icon: Globe,
      price: "£40/month",
      features: [
        "Responsive designs",
        "Full-stack solutions",
        "API integrations",
        "Performance optimization"
      ],
      learnMore: "/services?tab=web-dev"
    },
    {
      title: "Hosting Services",
      description: "Reliable, managed hosting for your bots, apps and services.",
      icon: Cloud,
      price: "£10/month",
      features: [
        "99% uptime guarantee",
        "Automatic restarts",
        "Daily backups",
        "Scaling options"
      ],
      learnMore: "/services?tab=hosting"
    },
    {
      title: "Custom Development",
      description: "Specialized solutions for unique development challenges.",
      icon: Code,
      price: "Custom",
      features: [
        "API integration",
        "Workflow automation",
        "System integration",
        "Technical consulting"
      ],
      learnMore: "/services"
    }
  ];

  return (
    <section id="services" className="relative py-24 noise-bg z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 inline-block text-gradient">Our Services</h2>
          <p className="text-muted-foreground text-lg">
            We provide comprehensive solutions to help developers and businesses build, maintain, and scale their digital presence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
