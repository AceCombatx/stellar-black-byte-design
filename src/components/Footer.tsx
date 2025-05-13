
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="text-xl font-heading font-bold text-white">VOLARIS</span>
              <span className="text-xl font-heading font-bold text-gray-400">SOLUTIONS</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Helping developers do more, with less stress.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="https://discord.gg/gdZXz3QR6a" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Discord</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25c-1.845-.274-3.68-.274-5.495 0c-.164-.386-.397-.875-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37c-.012.007-.023.016-.029.026c-3.121 4.664-3.968 9.212-3.551 13.699c.004.039.028.075.06.092c1.53 1.123 3.301 2.033 5.202 2.648a.077.077 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106c-.565-.216-1.105-.471-1.622-.766a.077.077 0 0 1-.008-.127c.109-.081.218-.162.324-.246c.018-.014.041-.019.062-.01c3.18 1.452 6.624 1.452 9.763 0c.021-.009.045-.004.062.011c.105.084.214.165.324.246a.077.077 0 0 1-.008.127c-.517.295-1.056.55-1.622.765a.077.077 0 0 0-.041.107c.36.698.772 1.363 1.225 1.993a.076.076 0 0 0 .084.028c1.908-.615 3.68-1.525 5.211-2.648a.077.077 0 0 0 .059-.092c.495-5.108-.838-9.612-3.549-13.699a.06.06 0 0 0-.03-.026zM8.02 15.33c-1.026 0-1.869-.942-1.869-2.092s.829-2.091 1.869-2.091s1.878.942 1.869 2.091c-.009 1.15-.843 2.092-1.869 2.092zm6.91 0c-1.026 0-1.869-.942-1.869-2.092s.829-2.091 1.869-2.091c1.039 0 1.878.942 1.869 2.091c-.009 1.15-.834 2.092-1.869 2.092z"></path>
                </svg>
              </a>
              <a href="mailto:volarissolutions@draftinc.xyz" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Email</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span>Discord Bots</span>
                  <ArrowRight className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link to="/services?tab=web-dev" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span>Web Development</span>
                  <ArrowRight className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link to="/services?tab=hosting" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span>Hosting Services</span>
                  <ArrowRight className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span>Custom Development</span>
                  <ArrowRight className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span>About Us</span>
                  <ArrowRight className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                </a>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span>Terms of Service</span>
                  <ArrowRight className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span>Privacy Policy</span>
                  <ArrowRight className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:volarissolutions@draftinc.xyz" className="text-gray-400 hover:text-white transition-colors">
                  volarissolutions@draftinc.xyz
                </a>
              </li>
              <li>
                <a href="mailto:support@volarissolutions.online" className="text-gray-400 hover:text-white transition-colors">
                  support@volarissolutions.online
                </a>
              </li>
              <li>
                <a href="https://discord.gg/gdZXz3QR6a" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Join our Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm text-center">
            &copy; {currentYear} Volaris Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
