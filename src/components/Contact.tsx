
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Define form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Initialize react-hook-form with zod validation
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    },
  });

  const sendToDiscord = async (formData: FormValues) => {
    const webhookUrl = "https://discord.com/api/webhooks/1371540943244886159/tVrulsIVRVyiJUqVE1u-EmywoO3AmPQMqjdrxi_aalWJW6N6xszi_880zK5ZSAUmLZUi";
    
    const discordMessage = {
      embeds: [{
        title: "New Contact Form Submission",
        color: 3447003, // Blue color
        fields: [
          {
            name: "Name",
            value: formData.name,
            inline: true
          },
          {
            name: "Email",
            value: formData.email,
            inline: true
          },
          {
            name: "Message",
            value: formData.message
          }
        ],
        timestamp: new Date().toISOString()
      }]
    };

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(discordMessage),
      });

      if (!response.ok) {
        throw new Error("Failed to send message to Discord");
      }

      return true;
    } catch (error) {
      console.error("Discord webhook error:", error);
      return false;
    }
  };

  const sendToEmail = async (formData: FormValues) => {
    // Normally we would use a proper email service API here
    // For now, we'll log the intent to send an email
    console.log(`Would send email to volarissolutionsgg@gmail.com with:`, formData);
    
    // In a real implementation, you would integrate with an email service API
    // Since we can't directly send emails from the frontend, this would typically
    // be handled by a backend service or serverless function
    
    return true; // Simulating successful email send
  };

  const onSubmit = async (formData: FormValues) => {
    setIsSubmitting(true);

    try {
      // Send to Discord webhook
      const discordResult = await sendToDiscord(formData);
      
      // Send to email (in a real implementation)
      const emailResult = await sendToEmail(formData);

      if (discordResult) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
          variant: "default",
        });
        
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="bg-white/5 border-white/10 focus:border-white/30 text-white"
                          placeholder="Your name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          className="bg-white/5 border-white/10 focus:border-white/30 text-white"
                          placeholder="your.email@example.com"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="bg-white/5 border-white/10 focus:border-white/30 text-white min-h-[150px]"
                          placeholder="Tell us about your project or question"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-white text-black hover:bg-gray-200 flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send className="h-4 w-4" />}
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="space-y-8">
            <div className="panel">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-white mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-300 mb-2">For general inquiries:</p>
                  <a 
                    href="mailto:volarissolutionsgg@gmail.com" 
                    className="text-white hover:text-gray-200 transition-colors underline"
                  >
                    volarissolutionsgg@gmail.com
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
