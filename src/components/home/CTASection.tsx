import { Link } from "react-router-dom";
import { Heart, HandHeart, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 bg-warm-gradient">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-8 sm:p-12 lg:p-16">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-2xl" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Rejoignez le mouvement
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ensemble, impactons la{" "}
              <span className="text-accent">prochaine génération</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-10">
              Votre soutien permet au GBUSS de continuer sa mission auprès des étudiants 
              et lycéens du Sénégal. Chaque prière, chaque don compte.
            </p>

            {/* CTA Cards */}
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {[
                {
                  icon: Heart,
                  title: "Faire un don",
                  description: "Soutenez financièrement le mouvement",
                  href: "/don",
                  variant: "gold" as const,
                },
                {
                  icon: HandHeart,
                  title: "Prier avec nous",
                  description: "Rejoignez notre chaîne de prière",
                  href: "/prier",
                  variant: "heroOutline" as const,
                },
                {
                  icon: Mail,
                  title: "Nous contacter",
                  description: "Posez vos questions",
                  href: "/contact",
                  variant: "heroOutline" as const,
                },
              ].map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="group bg-primary-foreground/5 hover:bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors">
                    <item.icon className="h-6 w-6 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-primary-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/70">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>

            <Button variant="gold" size="xl" asChild>
              <Link to="/don">
                <Heart className="h-5 w-5 mr-2" />
                Soutenir le GBUSS maintenant
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
