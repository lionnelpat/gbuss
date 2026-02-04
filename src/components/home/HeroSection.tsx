import { Link } from "react-router-dom";
import { ArrowRight, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-students.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Étudiants du GBUSS"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 text-accent mb-8 animate-fade-up">
            <BookOpen className="h-4 w-4" />
            <span className="text-sm font-medium">Depuis 1964 au service des étudiants</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Transformés par la{" "}
            <span className="text-gradient-gold">Parole</span>,{" "}
            unis pour{" "}
            <span className="text-gradient-gold">impacter</span>{" "}
            le campus
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-primary-foreground/85 max-w-2xl mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Le GBUSS accompagne les étudiants et lycéens chrétiens du Sénégal dans leur croissance
            spirituelle et leur témoignage au sein de leur établissement.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/vision">
                Découvrir notre vision
                <ArrowRight className="h-5 w-5 ml-1" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">
                <Users className="h-5 w-5 mr-1" />
                Nous rejoindre
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "60+", label: "Années d'existence" },
              { value: "7/14", label: "Régions couvertes" },
              { value: "100.000+", label: "Étudiants touchés" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-accent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
