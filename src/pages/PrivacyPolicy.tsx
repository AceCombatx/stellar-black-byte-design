
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <Button 
            variant="ghost" 
            className="mb-6 -ml-2 text-gray-400 hover:text-white"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-gradient">
              Privacy Policy
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p><strong>Effective Date:</strong> 6 May {currentYear}<br />
              <strong>Business Name:</strong> Volaris Solutions (operating under Draft Inc.)</p>
              
              <h2>1. Introduction</h2>
              <p>At Volaris Solutions, your privacy is important to us.<br />
              This policy outlines how we collect, use, and protect your personal data when you use our services.</p>
              <p>By using our services, you agree to this Privacy Policy.</p>

              <h2>2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul>
                <li><strong>Contact Information</strong>: Your email address or Discord username</li>
                <li><strong>Project Information</strong>: Details you provide for custom development or support</li>
                <li><strong>Payment Information</strong>: Billing info (handled securely through third-party processors like Stripe)</li>
                <li><strong>Usage Data</strong>: General analytics (e.g., website visits, service usage patterns)</li>
              </ul>
              <p>We do not collect or store passwords, authentication tokens, or sensitive personal information unless explicitly required and agreed upon.</p>

              <h2>3. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul>
                <li>Provide the services you request (e.g., bot development, support)</li>
                <li>Communicate with you about updates, billing, and revisions</li>
                <li>Improve our services and support</li>
                <li>Comply with legal or regulatory requirements</li>
              </ul>
              <p>We do <strong>not</strong> sell or share your information with third parties for marketing purposes.</p>

              <h2>4. Data Storage and Security</h2>
              <ul>
                <li>Your data is stored securely using encrypted platforms and access control</li>
                <li>Only authorized team members can access client information</li>
                <li>We take reasonable steps to protect against unauthorized access, loss, or misuse</li>
              </ul>
              <p>If a data breach occurs, we will notify affected users promptly and comply with applicable laws.</p>

              <h2>5. Third-Party Services</h2>
              <p>We use trusted third-party platforms such as:</p>
              <ul>
                <li><strong>Stripe</strong> (for payment processing)</li>
                <li><strong>Discord</strong> (for communication and bot interaction)</li>
              </ul>
              <p>These platforms have their own privacy policies, and we recommend reviewing them.</p>

              <h2>6. Your Rights</h2>
              <p>As a user, you have the right to:</p>
              <ul>
                <li>Request a copy of your personal data</li>
                <li>Ask us to update or correct inaccurate data</li>
                <li>Request deletion of your data, where applicable</li>
                <li>Withdraw consent for us to store or use your information</li>
              </ul>
              <p>To exercise any of these rights, contact us via email or Discord.</p>

              <h2>7. Data Retention</h2>
              <p>We keep your information for as long as necessary to provide services or comply with legal obligations.<br />
              You may request early removal of your data if services have ended.</p>

              <h2>8. Children's Privacy</h2>
              <p>Our services are not intended for individuals under 13 years of age.<br />
              We do not knowingly collect data from children under this age. If we learn we have, we will delete it immediately.</p>

              <h2>9. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time.<br />
              Updates will be posted in our Discord server or sent via email.<br />
              By continuing to use our services, you agree to the updated policy.</p>

              <h2>10. Contact</h2>
              <p>
                📧 <strong>Email:</strong> <a href="mailto:volarissolutions@draftinc.xyz" className="text-blue-400 hover:underline">volarissolutions@draftinc.xyz</a><br />
                📧 <strong>Support:</strong> <a href="mailto:support@volarissolutions.online" className="text-blue-400 hover:underline">support@volarissolutions.online</a><br />
                🌐 <strong>Discord:</strong> <a href="https://discord.gg/gdZXz3QR6a" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">Volaris Solutions Server</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
