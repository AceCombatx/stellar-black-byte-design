
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
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
              Terms of Service
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p><strong>Effective Date:</strong> 6 May {currentYear}<br />
              <strong>Business Name:</strong> Volaris Solutions (operating under Draft Inc.)</p>
              
              <h2>1. Overview</h2>
              <p>These Terms of Service ("Terms") govern the use of services provided by Volaris Solutions.<br />
              By commissioning our services, you agree to be bound by these Terms.<br />
              If you do not agree to these Terms, please do not use our services.</p>

              <h2>2. Services Offered</h2>
              <p>We provide development and support services, including but not limited to:</p>
              <ul>
                <li>Custom Discord bot development</li>
                <li>Website development (front-end and back-end)</li>
                <li>Hosting services for bots and apps</li>
                <li>Automation, API integration, and workflow setup</li>
                <li>Ongoing technical support and consulting</li>
              </ul>
              <p>We reserve the right to refuse service to anyone for any reason at any time.</p>

              <h2>3. Payments & Currency</h2>
              <ul>
                <li>All prices are listed and charged in <strong>British Pounds Sterling (GBP/£)</strong></li>
                <li>Payments are processed via Stripe or another approved payment method</li>
                <li><strong>Full payment is required upfront</strong> unless a written agreement says otherwise</li>
                <li>Monthly and yearly subscriptions automatically renew unless cancelled</li>
                <li><strong>No refunds</strong> will be issued once development has started or services have been delivered, except at our sole discretion</li>
              </ul>

              <h2>4. Ownership & Licensing</h2>
              <p>Unless otherwise agreed in writing:</p>
              <ul>
                <li>All <strong>source code, scripts, and assets remain the intellectual property of Volaris Solutions</strong></li>
                <li>You are granted a <strong>non-exclusive, non-transferable license</strong> to use the delivered product</li>
                <li>Redistribution, resale, or reverse-engineering is prohibited unless explicitly permitted</li>
                <li>You may request full ownership or rights transfer for an additional fee</li>
              </ul>

              <h2>5. Revisions & Scope</h2>
              <ul>
                <li>Service packages include a limited number of <strong>revisions</strong></li>
                <li>A revision is a reasonable change to an existing feature — not a new feature</li>
                <li>Extra revisions or out-of-scope requests may require additional charges</li>
              </ul>

              <h2>6. Cancellation & Termination</h2>
              <ul>
                <li>You may cancel anytime, but <strong>no partial refunds</strong> will be given</li>
                <li>We may terminate service due to abuse, harassment, non-payment, or breach of terms</li>
                <li>Access to services may be suspended upon termination</li>
              </ul>

              <h2>7. Support Policy</h2>
              <ul>
                <li>Support is offered through approved channels (Discord or email)</li>
                <li><strong>Basic support is free</strong>, but priority support is only included in paid plans</li>
                <li>We aim to respond within 1–2 business days depending on workload</li>
              </ul>

              <h2>8. Liability & Disclaimers</h2>
              <ul>
                <li>Services are provided "as is" — <strong>we do not guarantee 100% uptime or bug-free software</strong></li>
                <li>We are not responsible for third-party outages (e.g. Discord API)</li>
                <li>We are not liable for any loss of data, revenue, or functionality</li>
              </ul>

              <h2>9. Privacy</h2>
              <ul>
                <li>Your files and data are kept private and not shared externally</li>
                <li>We follow UK data protection guidelines and will inform you of any breaches</li>
              </ul>

              <h2>10. Changes to These Terms</h2>
              <p>These Terms may change at any time.<br />
              You will be notified via Discord or email.<br />
              Continued use of our services means you accept the new terms.</p>

              <h2>11. Contact</h2>
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

export default TermsOfService;
