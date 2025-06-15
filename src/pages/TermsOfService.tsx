
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <Button 
            variant="ghost" 
            className="mb-6 -ml-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="h-8 w-8 text-foreground/80" />
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-gradient">
                Terms of Service
              </h1>
            </div>
            
            <div className="prose prose-invert prose-lg max-w-none text-foreground">
              <div className="panel mb-8">
                <p className="text-lg">
                  <strong className="text-foreground">Effective Date:</strong> 6 May {currentYear}<br />
                  <strong className="text-foreground">Business Name:</strong> Volaris Solutions (operating under Draft Inc.)
                </p>
              </div>
              
              <div className="space-y-10">
                <section>
                  <h2 className="text-2xl font-heading font-bold text-foreground border-b border-border pb-2 mb-4">1. Overview</h2>
                  <p className="mb-3">These Terms of Service ("Terms") govern the use of services provided by Volaris Solutions.</p>
                  <p className="mb-3">By commissioning our services, you agree to be bound by these Terms.</p>
                  <p>If you do not agree to these Terms, please do not use our services.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-foreground border-b border-border pb-2 mb-4">2. Services Offered</h2>
                  <p className="mb-3">We provide development and support services, including but not limited to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Custom Discord bot development</li>
                    <li>Website development (front-end and back-end)</li>
                    <li>Hosting services for bots and apps</li>
                    <li>Automation, API integration, and workflow setup</li>
                    <li>Ongoing technical support and consulting</li>
                  </ul>
                  <p className="mt-3">We reserve the right to refuse service to anyone for any reason at any time.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-foreground border-b border-border pb-2 mb-4">3. Payments & Currency</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>All prices are listed and charged in <strong className="text-foreground">British Pounds Sterling (GBP/£)</strong></li>
                    <li>Payments are processed via Stripe or another approved payment method</li>
                    <li><strong className="text-foreground">Full payment is required upfront</strong> unless a written agreement says otherwise</li>
                    <li>Monthly and yearly subscriptions automatically renew unless cancelled</li>
                    <li><strong className="text-foreground">No refunds</strong> will be issued once development has started or services have been delivered, except at our sole discretion</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-foreground border-b border-border pb-2 mb-4">4. Ownership & Licensing</h2>
                  <p className="mb-3">Unless otherwise agreed in writing:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>All <strong className="text-foreground">source code, scripts, and assets remain the intellectual property of Volaris Solutions</strong></li>
                    <li>You are granted a <strong className="text-foreground">non-exclusive, non-transferable license</strong> to use the delivered product</li>
                    <li>Redistribution, resale, or reverse-engineering is prohibited unless explicitly permitted</li>
                    <li>You may request full ownership or rights transfer for an additional fee</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-foreground border-b border-border pb-2 mb-4">5. Revisions & Scope</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Service packages include a limited number of <strong className="text-foreground">revisions</strong></li>
                    <li>A revision is a reasonable change to an existing feature — not a new feature</li>
                    <li>Extra revisions or out-of-scope requests may require additional charges</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-foreground border-b border-border pb-2 mb-4">6. Cancellation & Termination</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You may cancel anytime, but <strong className="text-foreground">no partial refunds</strong> will be given</li>
                    <li>We may terminate service due to abuse, harassment, non-payment, or breach of terms</li>
                    <li>Access to services may be suspended upon termination</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-foreground border-b border-border pb-2 mb-4">7. Support Policy</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Support is offered through approved channels (Discord or email)</li>
                    <li><strong className="text-foreground">Basic support is free</strong>, but priority support is only included in paid plans</li>
                    <li>We aim to respond within 1–2 business days depending on workload</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-foreground border-b border-border pb-2 mb-4">8. Liability & Disclaimers</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Services are provided "as is" — <strong className="text-foreground">we do not guarantee 100% uptime or bug-free software</strong></li>
                    <li>We are not responsible for third-party outages (e.g. Discord API)</li>
                    <li>We are not liable for any loss of data, revenue, or functionality</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-foreground border-b border-border pb-2 mb-4">9. Confidentiality & Non-Disclosure</h2>
                  <p className="mb-3">Both parties may agree to a Non-Disclosure Agreement (NDA) for sensitive projects. You acknowledge and agree to the following terms regarding confidentiality:</p>
                  <ul className="list-disc pl-6 space-y-2">
                      <li>If you (the client) are found to be in breach of a signed NDA, we (Volaris Solutions) reserve the right to pursue all available legal remedies.</li>
                      <li>In the event that we (Volaris Solutions) are alleged to have breached an NDA, you (the client) agree that your sole remedy shall be to terminate any ongoing services, and you agree not to pursue any other legal action or claims for damages.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-foreground border-b border-border pb-2 mb-4">10. Privacy</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your files and data are kept private and not shared externally</li>
                    <li>We follow UK data protection guidelines and will inform you of any breaches</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-foreground border-b border-border pb-2 mb-4">11. Changes to These Terms</h2>
                  <p className="mb-3">These Terms may change at any time.</p>
                  <p className="mb-3">You will be notified via Discord or email.</p>
                  <p>Continued use of our services means you accept the new terms.</p>
                </section>

                <section className="panel">
                  <h2 className="text-2xl font-heading font-bold text-foreground border-b border-border pb-2 mb-4">12. Contact</h2>
                  <p className="space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">📧</span> 
                      <strong className="text-foreground">Email:</strong> 
                      <a href="mailto:volarissolutions@draftinc.xyz" className="text-primary hover:underline">volarissolutions@draftinc.xyz</a>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">📧</span> 
                      <strong className="text-foreground">Support:</strong> 
                      <a href="mailto:support@volarissolutions.online" className="text-primary hover:underline">support@volarissolutions.online</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🌐</span> 
                      <strong className="text-foreground">Discord:</strong> 
                      <a href="https://discord.gg/gdZXz3QR6a" target="_blank" rel="noreferrer" className="text-primary hover:underline">Volaris Solutions Server</a>
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

export default TermsOfService;
