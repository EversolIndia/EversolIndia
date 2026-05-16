import { Link } from 'react-router-dom';
import { Sun, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, MessageCircle, Youtube } from 'lucide-react';

const footerLinks = {
  quickLinks: [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/shop#product-search' },
    { name: 'Roof Top Solar Solutions', path: '/solutions' },
    { name: 'Impact', path: '/impact' },
    { name: 'Contact', path: '/contact' },
    { name: 'Shipping Policy', path: '/shipping-policy' },
    { name: 'Payment Policy', path: '/payment-policy' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Cancellation and Returns Policy', path: '/cancellation-policy' },
    { name: 'Terms and Conditions', path: '/terms' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img
                src="/images/eversol.png"
                alt="Eversol Logo"
                className="h-28 w-auto object-contain"
              />
            </Link>
            <p className="text-primary-foreground/80 mb-4 max-w-sm leading-relaxed font-heading">
              Powering India's sustainable future with premium solar energy solutions.
              Generate | Conserve | Contribute
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.facebook.com/profile.php?id=61567848662496" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-solar hover:text-accent-foreground transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/eversol_india?igsh=MTZnZ3ZjczdnMGpyNA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-solar hover:text-accent-foreground transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/eversol-india-548543346/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-solar hover:text-accent-foreground transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@eversolindia" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-solar hover:text-accent-foreground transition-all duration-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-solar tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.slice(0, 6).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-solar transition-colors duration-300 font-heading font-medium"
                    onClick={() => {
                      if (link.path.includes('/shop')) {
                        ['shop_category', 'shop_brand', 'shop_invType', 'shop_invBrand', 'shop_search', 'shop_page'].forEach(k => sessionStorage.removeItem(k));
                      }
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div className="flex flex-col">
            <div className="hidden lg:block h-7 mb-6" aria-hidden="true"></div>
            <ul className="space-y-3">
              {footerLinks.quickLinks.slice(6).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-solar transition-colors duration-300"
                    onClick={() => {
                      if (link.path.includes('/shop')) {
                        ['shop_category', 'shop_brand', 'shop_invType', 'shop_invBrand', 'shop_search', 'shop_page'].forEach(k => sessionStorage.removeItem(k));
                      }
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-solar tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-solar shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 font-heading font-medium">
                  EVERSOL INDIA <br />
                  Vasu Complex New BEL Road,<br />
                  Bengaluru, Karnataka 560054
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-solar shrink-0" />
                <a href="tel:+919902843835" className="text-primary-foreground/80 hover:text-solar transition-colors font-heading font-medium">
                  +91 99028 43835
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-solar shrink-0" />
                <a href="mailto:info@eversol.in" className="text-primary-foreground/80 hover:text-solar transition-colors font-heading font-medium">
                  info@eversol.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Karnataka Districts */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-10">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="h-5 w-5 text-solar shrink-0" />
            <h4 className="font-heading font-bold text-base text-solar tracking-wide uppercase">
              We Serve Across All Districts of Karnataka
            </h4>
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {[
              { name: 'Bengaluru Urban', major: true },
              { name: 'Bengaluru Rural', major: true },
              { name: 'Mysuru', major: false },
              { name: 'Mangaluru', major: false },
              { name: 'Hubballi-Dharwad', major: true },
              { name: 'Belagavi', major: true },
              { name: 'Kalaburagi', major: true },
              { name: 'Davanagere', major: true },
              { name: 'Ballari', major: true },
              { name: 'Shivamogga', major: false },
              { name: 'Tumakuru', major: true },
              { name: 'Udupi', major: false },
              { name: 'Bagalkot', major: true },
              { name: 'Bidar', major: true },
              { name: 'Chamarajanagar', major: false },
              { name: 'Chikkaballapur', major: true },
              { name: 'Chikkamagaluru', major: true },
              { name: 'Chitradurga', major: true },
              { name: 'Dakshina Kannada', major: false },
              { name: 'Gadag', major: false },
              { name: 'Hassan', major: false },
              { name: 'Haveri', major: false },
              { name: 'Kodagu', major: false },
              { name: 'Kolar', major: true },
              { name: 'Koppal', major: true },
              { name: 'Mandya', major: true },
              { name: 'Raichur', major: true },
              { name: 'Ramanagara', major: true },
              { name: 'Uttara Kannada', major: true },
              { name: 'Vijayapura', major: true },
              { name: 'Vijayanagara', major: true },
              { name: 'Yadgir', major: true },
            ].map((district, i, arr) => (
              <span key={district.name} className="flex items-center gap-x-3">
                <span className={`font-heading text-sm ${district.major ? 'text-solar font-bold' : 'text-primary-foreground/70 font-medium'}`}>
                  {district.name}
                </span>
                {i < arr.length - 1 && <span className="text-primary-foreground/30 text-xs">•</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Andhra Pradesh Districts */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="h-5 w-5 text-solar shrink-0" />
            <h4 className="font-heading font-bold text-base text-solar tracking-wide uppercase">
              We Also Serve in Andhra Pradesh
            </h4>
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {[
              { name: 'Kurnool', major: true },
              { name: 'Puttaparthi', major: true },
              { name: 'Ananthapur', major: true },
              { name: 'Nellore', major: true },
            ].map((district, i, arr) => (
              <span key={district.name} className="flex items-center gap-x-3">
                <span className={`font-heading text-sm ${district.major ? 'text-solar font-bold' : 'text-primary-foreground/70 font-medium'}`}>
                  {district.name}
                </span>
                {i < arr.length - 1 && <span className="text-primary-foreground/30 text-xs">•</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm font-heading">
              © {new Date().getFullYear()} EVERSOL INDIA. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-solar transition-colors font-heading font-medium">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/60 hover:text-solar transition-colors font-heading font-medium">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
