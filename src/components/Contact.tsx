
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // This is a mock submission - in a real scenario you'd send this to your backend
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 noise-bg bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-gradient">Get In Touch</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? Need help with your development challenges? 
            Reach out to us and let's discuss how we can help.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="panel">
            <h3 className="text-2xl font-heading font-bold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 focus:border-white/30 text-white"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 focus:border-white/30 text-white"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 focus:border-white/30 text-white min-h-[150px]"
                  placeholder="Tell us about your project or question"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-white text-black hover:bg-gray-200"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="panel">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-white mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-300 mb-2">For general inquiries:</p>
                  <a 
                    href="mailto:volarissolutions@draftinc.xyz" 
                    className="text-white hover:text-gray-200 transition-colors underline"
                  >
                    volarissolutions@draftinc.xyz
                  </a>
                  <p className="text-gray-300 mt-3 mb-2">For support:</p>
                  <a 
                    href="mailto:support@volarissolutions.online" 
                    className="text-white hover:text-gray-200 transition-colors underline"
                  >
                    support@volarissolutions.online
                  </a>
                </div>
              </div>
            </div>
            
            <div className="panel">
              <div className="flex items-start">
                <MessageSquare className="h-6 w-6 text-white mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Join Our Discord</h3>
                  <p className="text-gray-300 mb-4">
                    Get faster responses and connect with our team directly on Discord.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-white/20 hover:border-white/50 hover:bg-white/5"
                    onClick={() => window.open("https://discord.gg/gdZXz3QR6a", "_blank")}
                  >
                    Join Volaris Solutions Server
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="panel">
              <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
              <p className="text-gray-300">
                We pride ourselves on response time. When you reach out to us, 
                you can expect a reply within 24-48 hours during business days.
                For urgent matters, Discord is usually the fastest way to get in touch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
