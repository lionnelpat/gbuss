import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-gbuss.png";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Vision & Mission", href: "/vision" },
  { name: "Nos Actions", href: "/actions" },
  { name: "Témoignages", href: "/temoignages" },
  { name: "Équipe", href: "/equipe" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="section-container flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={logo} 
            alt="GBUSS Logo" 
            className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
          />
          <div className="hidden sm:block">
            <span className="font-serif text-xl font-bold text-primary">GBUSS</span>
            <p className="text-xs text-muted-foreground leading-tight">
              Groupe Biblique Universitaire
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive(item.href)
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted hover:text-primary"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="hero" size="lg" asChild>
            <Link to="/don" className="gap-2">
              <Heart className="h-4 w-4" />
              Faire un don
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border animate-fade-in">
          <div className="section-container py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <Button variant="hero" size="lg" className="w-full" asChild>
                <Link to="/don" onClick={() => setMobileMenuOpen(false)}>
                  <Heart className="h-4 w-4 mr-2" />
                  Faire un don
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
