import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-gbuss.png";

const footerLinks = {
  decouvrir: [
    { name: "Vision & Mission", href: "/vision" },
    { name: "Nos Actions", href: "/actions" },
    { name: "Équipe nationale", href: "/equipe" },
    { name: "Témoignages", href: "/temoignages" },
  ],
  soutenir: [
    { name: "Faire un don", href: "/don" },
    { name: "Prier avec nous", href: "/prier" },
    { name: "Devenir partenaire", href: "/contact" },
  ],
};

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com/gbuss", icon: Facebook },
  { name: "Instagram", href: "https://instagram.com/gbuss", icon: Instagram },
  { name: "YouTube", href: "https://youtube.com/gbuss", icon: Youtube },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="GBUSS Logo" className="h-14 w-auto brightness-0 invert" />
              <div>
                <span className="font-serif text-2xl font-bold">GBUSS</span>
                <p className="text-sm opacity-80">
                  Groupe Biblique Universitaire et Scolaire du Sénégal
                </p>
              </div>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              Depuis plus de 50 ans, le GBUSS accompagne les étudiants et lycéens chrétiens 
              dans leur cheminement de foi.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Découvrir */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Découvrir</h4>
            <ul className="space-y-3">
              {footerLinks.decouvrir.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Soutenir */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">S'engager</h4>
            <ul className="space-y-3">
              {footerLinks.soutenir.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 opacity-80" />
                <span className="text-sm opacity-80">
                  Dakar, Sénégal
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 opacity-80" />
                <a href="tel:+221xxxxxxxxx" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  +221 XX XXX XX XX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 opacity-80" />
                <a href="mailto:contact@gbuss.sn" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  contact@gbuss.sn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-container py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} GBUSS. Tous droits réservés.
          </p>
          <p className="text-sm opacity-70">
            « Car Dieu a tant aimé le monde... » — Jean 3:16
          </p>
        </div>
      </div>
    </footer>
  );
}
