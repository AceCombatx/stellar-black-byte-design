
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, Globe, Cloud, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ServicesPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const tabParam = searchParams.get("tab");
  
  // Determine which tab should be active based on URL parameters
  const activeTab = tabParam === "web-dev" ? "web-dev" : 
                    tabParam === "hosting" ? "hosting" : 
                    "discord-bots";

  const handleTabChange = (value: string) => {
    navigate(`/services${value !== "discord-bots" ? `?tab=${value}` : ""}`);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-gradient">Our Services</h1>
            <p className="text-gray-300 text-lg">
              Explore our range of services designed to help developers and businesses build, maintain, and scale their digital presence.
            </p>
          </div>
          
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <div className="mb-8 flex justify-center">
              <TabsList className="bg-white/5 border border-white/10">
                <TabsTrigger value="discord-bots" className="data-[state=active]:bg-white/10">
                  <Bot className="h-4 w-4 mr-2" />
                  Discord Bots
                </TabsTrigger>
                <TabsTrigger value="web-dev" className="data-[state=active]:bg-white/10">
                  <Globe className="h-4 w-4 mr-2" />
                  Web Development
                </TabsTrigger>
                <TabsTrigger value="hosting" className="data-[state=active]:bg-white/10">
                  <Cloud className="h-4 w-4 mr-2" />
                  Hosting
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="discord-bots">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Custom Discord Bot Packages</h2>
                  <p className="text-gray-300">Whether you're running a small community or scaling a multi-server bot for thousands, we offer tailored solutions to fit your needs.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Basic Bot Package */}
                  <div className="panel flex flex-col justify-between h-full">
                    <div>
                      <div className="h-2 bg-green-500 rounded-t-md -mt-6 -mx-6 mb-6"></div>
                      <h3 className="text-xl font-heading font-bold mb-2">Basic Bot Package</h3>
                      <p className="text-gray-300 mb-4">Perfect for small communities or utility bots</p>
                      <div className="mb-6">
                        <p className="text-3xl font-heading font-bold mb-1">£25<span className="text-sm font-normal text-gray-400">/month</span></p>
                        <p className="text-sm text-gray-400">or £240/year (save ~20%)</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Up to 5 custom commands</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Basic setup and interaction</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>1 revision per month</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Basic support</span>
                        </li>
                      </ul>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full border-white/20 hover:border-white/50 hover:bg-white/5"
                      onClick={() => window.location.href = "/#contact"}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Advanced Bot Package */}
                  <div className="panel flex flex-col justify-between h-full">
                    <div>
                      <div className="h-2 bg-blue-500 rounded-t-md -mt-6 -mx-6 mb-6"></div>
                      <h3 className="text-xl font-heading font-bold mb-2">Advanced Bot Package</h3>
                      <p className="text-gray-300 mb-4">Ideal for larger servers with integrations</p>
                      <div className="mb-6">
                        <p className="text-3xl font-heading font-bold mb-1">£60<span className="text-sm font-normal text-gray-400">/month</span></p>
                        <p className="text-sm text-gray-400">or £576/year (save ~20%)</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Up to 15 custom commands</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>API or database integration</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>2 revisions per month</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Priority support</span>
                        </li>
                      </ul>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full border-white/20 hover:border-white/50 hover:bg-white/5"
                      onClick={() => window.location.href = "/#contact"}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Full Custom Bot Package */}
                  <div className="panel flex flex-col justify-between h-full transform scale-105 border-white/20 z-10">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-xs py-1 px-3 rounded-full">
                      MOST POPULAR
                    </div>
                    <div>
                      <div className="h-2 bg-purple-600 rounded-t-md -mt-6 -mx-6 mb-6"></div>
                      <h3 className="text-xl font-heading font-bold mb-2">Full Custom Bot Package</h3>
                      <p className="text-gray-300 mb-4">For servers needing fully tailored functionality</p>
                      <div className="mb-6">
                        <p className="text-3xl font-heading font-bold mb-1">£120<span className="text-sm font-normal text-gray-400">/month</span></p>
                        <p className="text-sm text-gray-400">or £1,152/year (save ~20%)</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Unlimited custom commands</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Advanced features and integrations</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>3 revisions per month</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Premium support</span>
                        </li>
                      </ul>
                    </div>
                    <Button 
                      className="w-full bg-purple-600 hover:bg-purple-700"
                      onClick={() => window.location.href = "/#contact"}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Multi-Server Bot Package */}
                  <div className="panel flex flex-col justify-between h-full">
                    <div>
                      <div className="h-2 bg-red-500 rounded-t-md -mt-6 -mx-6 mb-6"></div>
                      <h3 className="text-xl font-heading font-bold mb-2">Multi-Server Bot Package</h3>
                      <p className="text-gray-300 mb-4">Built for scale — perfect for public bots</p>
                      <div className="mb-6">
                        <p className="text-3xl font-heading font-bold mb-1">£160<span className="text-sm font-normal text-gray-400">/month</span></p>
                        <p className="text-sm text-gray-400">or £1,536/year (save ~20%)</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Supports multiple servers</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Scalable infrastructure setup</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Premium support and optimization</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Custom monitoring and scaling</span>
                        </li>
                      </ul>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full border-white/20 hover:border-white/50 hover:bg-white/5"
                      onClick={() => window.location.href = "/#contact"}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Web Development Tab */}
            <TabsContent value="web-dev">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Custom Web Development Packages</h2>
                  <p className="text-gray-300">From startups to community projects, our web services are designed to make launching and scaling your ideas easier.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Basic Web Package */}
                  <div className="panel flex flex-col justify-between h-full">
                    <div>
                      <div className="h-2 bg-green-500 rounded-t-md -mt-6 -mx-6 mb-6"></div>
                      <h3 className="text-xl font-heading font-bold mb-2">Basic Web Package</h3>
                      <p className="text-gray-300 mb-4">Ideal for portfolios or small sites</p>
                      <div className="mb-6">
                        <p className="text-3xl font-heading font-bold mb-1">£40<span className="text-sm font-normal text-gray-400">/month</span></p>
                        <p className="text-sm text-gray-400">or £384/year (save ~20%)</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Up to 3 pages</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Mobile-first design</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Basic contact form</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>1 revision per month</span>
                        </li>
                      </ul>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full border-white/20 hover:border-white/50 hover:bg-white/5"
                      onClick={() => window.location.href = "/#contact"}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Standard Web Package */}
                  <div className="panel flex flex-col justify-between h-full">
                    <div>
                      <div className="h-2 bg-blue-500 rounded-t-md -mt-6 -mx-6 mb-6"></div>
                      <h3 className="text-xl font-heading font-bold mb-2">Standard Web Package</h3>
                      <p className="text-gray-300 mb-4">Perfect for teams or small businesses</p>
                      <div className="mb-6">
                        <p className="text-3xl font-heading font-bold mb-1">£85<span className="text-sm font-normal text-gray-400">/month</span></p>
                        <p className="text-sm text-gray-400">or £816/year (save ~20%)</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Up to 7 pages</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>CMS integration</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Contact and dynamic forms</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>2 revisions per month</span>
                        </li>
                      </ul>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full border-white/20 hover:border-white/50 hover:bg-white/5"
                      onClick={() => window.location.href = "/#contact"}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Advanced Web Package */}
                  <div className="panel flex flex-col justify-between h-full transform scale-105 border-white/20 z-10">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-xs py-1 px-3 rounded-full">
                      MOST POPULAR
                    </div>
                    <div>
                      <div className="h-2 bg-purple-600 rounded-t-md -mt-6 -mx-6 mb-6"></div>
                      <h3 className="text-xl font-heading font-bold mb-2">Advanced Web Package</h3>
                      <p className="text-gray-300 mb-4">Great for SaaS, startups, or dashboards</p>
                      <div className="mb-6">
                        <p className="text-3xl font-heading font-bold mb-1">£160<span className="text-sm font-normal text-gray-400">/month</span></p>
                        <p className="text-sm text-gray-400">or £1,536/year (save ~20%)</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Up to 15 pages</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Full-stack with backend</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>API integrations and user auth</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>3 revisions per month</span>
                        </li>
                      </ul>
                    </div>
                    <Button 
                      className="w-full bg-purple-600 hover:bg-purple-700"
                      onClick={() => window.location.href = "/#contact"}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Enterprise Web Package */}
                  <div className="panel flex flex-col justify-between h-full">
                    <div>
                      <div className="h-2 bg-red-500 rounded-t-md -mt-6 -mx-6 mb-6"></div>
                      <h3 className="text-xl font-heading font-bold mb-2">Enterprise Web Package</h3>
                      <p className="text-gray-300 mb-4">Built for complex or high-traffic platforms</p>
                      <div className="mb-6">
                        <p className="text-3xl font-heading font-bold mb-1">£250<span className="text-sm font-normal text-gray-400">/month</span></p>
                        <p className="text-sm text-gray-400">or £2,400/year (save ~20%)</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Unlimited pages and components</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Scalable backend with database</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Performance optimization</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Ongoing dev support and monitoring</span>
                        </li>
                      </ul>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full border-white/20 hover:border-white/50 hover:bg-white/5"
                      onClick={() => window.location.href = "/#contact"}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Hosting Tab */}
            <TabsContent value="hosting">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Hosting Packages</h2>
                  <p className="text-gray-300">Need reliable, managed hosting for your Discord bots, web apps, or services? We provide fast, secure, and hassle-free hosting.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Basic Hosting */}
                  <div className="panel flex flex-col justify-between h-full">
                    <div>
                      <div className="h-2 bg-green-500 rounded-t-md -mt-6 -mx-6 mb-6"></div>
                      <h3 className="text-xl font-heading font-bold mb-2">Basic Hosting</h3>
                      <p className="text-gray-300 mb-4">Perfect for simple bots or landing pages</p>
                      <div className="mb-6">
                        <p className="text-3xl font-heading font-bold mb-1">£10<span className="text-sm font-normal text-gray-400">/month</span></p>
                        <p className="text-sm text-gray-400">or £96/year (save ~20%)</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>1 hosted app or bot</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>99% uptime guarantee</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Basic monitoring and updates</span>
                        </li>
                      </ul>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full border-white/20 hover:border-white/50 hover:bg-white/5"
                      onClick={() => window.location.href = "/#contact"}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Standard Hosting */}
                  <div className="panel flex flex-col justify-between h-full">
                    <div>
                      <div className="h-2 bg-blue-500 rounded-t-md -mt-6 -mx-6 mb-6"></div>
                      <h3 className="text-xl font-heading font-bold mb-2">Standard Hosting</h3>
                      <p className="text-gray-300 mb-4">Great for medium traffic or multi-featured apps</p>
                      <div className="mb-6">
                        <p className="text-3xl font-heading font-bold mb-1">£25<span className="text-sm font-normal text-gray-400">/month</span></p>
                        <p className="text-sm text-gray-400">or £240/year (save ~20%)</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Up to 3 hosted apps or bots</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Automatic restarts and logging</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>1GB+ RAM allocation</span>
                        </li>
                      </ul>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full border-white/20 hover:border-white/50 hover:bg-white/5"
                      onClick={() => window.location.href = "/#contact"}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Advanced Hosting */}
                  <div className="panel flex flex-col justify-between h-full transform scale-105 border-white/20 z-10">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-xs py-1 px-3 rounded-full">
                      MOST POPULAR
                    </div>
                    <div>
                      <div className="h-2 bg-purple-600 rounded-t-md -mt-6 -mx-6 mb-6"></div>
                      <h3 className="text-xl font-heading font-bold mb-2">Advanced Hosting</h3>
                      <p className="text-gray-300 mb-4">Ideal for production environments or public bots</p>
                      <div className="mb-6">
                        <p className="text-3xl font-heading font-bold mb-1">£50<span className="text-sm font-normal text-gray-400">/month</span></p>
                        <p className="text-sm text-gray-400">or £480/year (save ~20%)</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Up to 5 hosted services</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Full deployment support</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Daily backups and scaling options</span>
                        </li>
                      </ul>
                    </div>
                    <Button 
                      className="w-full bg-purple-600 hover:bg-purple-700"
                      onClick={() => window.location.href = "/#contact"}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Enterprise Hosting */}
                  <div className="panel flex flex-col justify-between h-full">
                    <div>
                      <div className="h-2 bg-red-500 rounded-t-md -mt-6 -mx-6 mb-6"></div>
                      <h3 className="text-xl font-heading font-bold mb-2">Enterprise Hosting</h3>
                      <p className="text-gray-300 mb-4">For mission-critical or high-traffic services</p>
                      <div className="mb-6">
                        <p className="text-3xl font-heading font-bold mb-1">£100<span className="text-sm font-normal text-gray-400">/month</span></p>
                        <p className="text-sm text-gray-400">or £960/year (save ~20%)</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Unlimited apps with custom configs</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Priority infrastructure and scaling</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>SLA-backed uptime guarantees</span>
                        </li>
                      </ul>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full border-white/20 hover:border-white/50 hover:bg-white/5"
                      onClick={() => window.location.href = "/#contact"}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-16 text-center">
            <p className="text-gray-300 mb-4">Need a custom package or have questions?</p>
            <Button 
              size="lg"
              className="bg-white text-black hover:bg-gray-200"
              onClick={() => window.location.href = "/#contact"}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
