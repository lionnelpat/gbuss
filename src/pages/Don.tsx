import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Heart, CreditCard, Smartphone, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const donationOptions = [
  {
    icon: Smartphone,
    title: "Wave Money",
    description: "Via Wave Money",
    details: "Envoyez votre don au numéro : +221 78 754 53 63",
  },
  {
    icon: Smartphone,
    title: "Orange Money",
    description: "Via Orange Money",
    details: "Envoyez votre don au numéro : +221 78 754 53 63",
  },
  {
    icon: CreditCard,
    title: "Virement bancaire",
    description: "Transfert direct",
    details: "Contactez-nous pour les coordonnées bancaires",
  },
];

const DonPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-hero-gradient text-primary-foreground">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Soutenez le GBUSS
              </h1>
              <p className="text-xl text-primary-foreground/85">
                Votre générosité permet d'accompagner des milliers d'étudiants dans leur foi.
              </p>
            </div>
          </div>
        </section>

        {/* Why Give */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Pourquoi donner ?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Le GBUSS fonctionne grâce à la générosité de ses membres et partenaires.
                Vos dons financent les études bibliques, les camps, la formation des leaders
                et l'évangélisation sur les campus du Sénégal.
              </p>
            </div>

            {/* Impact Stats */}
            <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
              {[
                { value: "500+", label: "Étudiants touchés chaque année" },
                { value: "7", label: "Régions couvertes" },
                { value: "10+", label: "Groupes locaux actifs" },
              ].map((stat) => (
                <div key={stat.label} className="text-center bg-secondary rounded-xl p-8">
                  <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Options */}
        <section className="py-20 bg-secondary">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Comment donner ?
              </h2>
              <p className="text-lg text-muted-foreground">
                Choisissez le mode de paiement qui vous convient.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {donationOptions.map((option) => (
                <div
                  key={option.title}
                  className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <option.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {option.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{option.description}</p>
                  <p className="text-sm text-primary font-medium">{option.details}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">
                Pour toute question concernant les dons, contactez-nous.
              </p>
              <Button variant="navy" size="lg" asChild>
                <Link to="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Prayer CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="section-container text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
              Vous préférez prier avec nous ?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              La prière est un soutien précieux. Rejoignez notre chaîne de prière
              et intercédez pour le mouvement et les étudiants.
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link to="/prier">Rejoindre la chaîne de prière</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DonPage;
