
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <Button 
            variant="ghost" 
            className="mb-6 -ml-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <ShieldCheck className="h-8 w-8 text-white/80" />
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-gradient">
                Privacy Policy
              </h1>
            </div>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="panel mb-8">
                <p className="text-lg">
                  <strong className="text-white">Effective Date:</strong> 6 May {currentYear}<br />
                  <strong className="text-white">Business Name:</strong> Volaris Solutions (operating under Draft Inc.)
                </p>
              </div>
              
              <div className="space-y-10">
                <section>
                  <h2 className="text-2xl font-heading font-bold text-white border-b border-white/10 pb-2 mb-4">1. Introduction</h2>
                  <p className="mb-3">At Volaris Solutions, your privacy is important to us.</p>
                  <p className="mb-3">This policy outlines how we collect, use, and protect your personal data when you use our services.</p>
                  <p>By using our services, you agree to this Privacy Policy.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-white border-b border-white/10 pb-2 mb-4">2. Information We Collect</h2>
                  <p className="mb-3">We may collect the following types of information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong className="text-white">Contact Information</strong>: Your email address or Discord username</li>
                    <li><strong className="text-white">Project Information</strong>: Details you provide for custom development or support</li>
                    <li><strong className="text-white">Payment Information</strong>: Billing info (handled securely through third-party processors like Stripe)</li>
                    <li><strong className="text-white">Usage Data</strong>: General analytics (e.g., website visits, service usage patterns)</li>
                  </ul>
                  <p className="mt-3">We do not collect or store passwords, authentication tokens, or sensitive personal information unless explicitly required and agreed upon.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-white border-b border-white/10 pb-2 mb-4">3. How We Use Your Information</h2>
                  <p className="mb-3">We use your information to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide the services you request (e.g., bot development, support)</li>
                    <li>Communicate with you about updates, billing, and revisions</li>
                    <li>Improve our services and support</li>
                    <li>Comply with legal or regulatory requirements</li>
                  </ul>
                  <p className="mt-3">We do <strong className="text-white">not</strong> sell or share your information with third parties for marketing purposes.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-white border-b border-white/10 pb-2 mb-4">4. Data Storage and Security</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your data is stored securely using encrypted platforms and access control</li>
                    <li>Only authorized team members can access client information</li>
                    <li>We take reasonable steps to protect against unauthorized access, loss, or misuse</li>
                  </ul>
                  <p className="mt-3">If a data breach occurs, we will notify affected users promptly and comply with applicable laws.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-white border-b border-white/10 pb-2 mb-4">5. Third-Party Services</h2>
                  <p className="mb-3">We use trusted third-party platforms such as:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong className="text-white">Stripe</strong> (for payment processing)</li>
                    <li><strong className="text-white">Discord</strong> (for communication and bot interaction)</li>
                  </ul>
                  <p className="mt-3">These platforms have their own privacy policies, and we recommend reviewing them.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-white border-b border-white/10 pb-2 mb-4">6. Your Rights</h2>
                  <p className="mb-3">As a user, you have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Request a copy of your personal data</li>
                    <li>Ask us to update or correct inaccurate data</li>
                    <li>Request deletion of your data, where applicable</li>
                    <li>Withdraw consent for us to store or use your information</li>
                  </ul>
                  <p className="mt-3">To exercise any of these rights, contact us via email or Discord.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-white border-b border-white/10 pb-2 mb-4">7. Data Retention</h2>
                  <p className="mb-3">We keep your information for as long as necessary to provide services or comply with legal obligations.</p>
                  <p>You may request early removal of your data if services have ended.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-white border-b border-white/10 pb-2 mb-4">8. Children's Privacy</h2>
                  <p className="mb-3">Our services are not intended for individuals under 13 years of age.</p>
                  <p>We do not knowingly collect data from children under this age. If we learn we have, we will delete it immediately.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-white border-b border-white/10 pb-2 mb-4">9. Changes to This Policy</h2>
                  <p className="mb-3">We may update this Privacy Policy from time to time.</p>
                  <p className="mb-3">Updates will be posted in our Discord server or sent via email.</p>
                  <p>By continuing to use our services, you agree to the updated policy.</p>
                </section>

                <section className="panel">
                  <h2 className="text-2xl font-heading font-bold text-white border-b border-white/10 pb-2 mb-4">10. Contact</h2>
                  <p className="space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">📧</span> 
                      <strong className="text-white">Email:</strong> 
                      <a href="mailto:volarissolutions@draftinc.xyz" className="text-blue-400 hover:underline transition-colors">volarissolutions@draftinc.xyz</a>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">📧</span> 
                      <strong className="text-white">Support:</strong> 
                      <a href="mailto:support@volarissolutions.online" className="text-blue-400 hover:underline transition-colors">support@volarissolutions.online</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🌐</span> 
                      <strong className="text-white">Discord:</strong> 
                      <a href="https://discord.gg/gdZXz3QR6a" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline transition-colors">Volaris Solutions Server</a>
                    </div>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
