
import { CheckCircle } from "lucide-react";

const About = () => {
  const capabilities = [
    "Build custom Discord bots tailored to your server",
    "Design and develop full-stack web applications",
    "Offer reliable hosting for your Discord bots",
    "Help you automate the stuff you don't want to deal with",
    "Be there when you hit a wall and need real support"
  ];

  return (
    <section id="about" className="relative py-24 noise-bg bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-gradient">
              We understand developers because we are developers too.
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Volaris Solutions was created by developers who understand the challenges of modern development. 
              We know how tough the development journey can be — whether you're figuring out your first bot, 
              trying to launch a clean website, or just need solid hosting that won't let you down.
            </p>
            <p className="text-gray-300 text-lg mb-8">
              No corporate nonsense, no generic answers — just real help when you need it. 
              We work directly with developers, server owners, and creators to build smart tools, 
              fix tough problems, and support you as you grow.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-heading font-semibold mb-4">What we do:</h3>
              <ul className="space-y-3">
                {capabilities.map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="lg:pl-12">
            <div className="panel h-full">
              <div className="p-8 border-b border-white/10">
                <h3 className="text-2xl font-heading font-bold mb-2">Our Mission</h3>
                <p className="text-gray-300">
                  To empower developers with tools, support, and solutions that make their work 
                  more efficient and less stressful, allowing them to focus on what they do best - creating.
                </p>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-heading font-bold mb-4">Why Choose Us?</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Developer-First Approach</h4>
                    <p className="text-gray-300">
                      We prioritize clean code, smart solutions, and responsive support because we're developers too.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Transparent Communication</h4>
                    <p className="text-gray-300">
                      Clear, honest updates throughout your project with no technical jargon unless you want it.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Long-Term Partnership</h4>
                    <p className="text-gray-300">
                      We aim to build lasting relationships, not just deliver one-off projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-divide mt-24"></div>
    </section>
  );
};

export default About;
