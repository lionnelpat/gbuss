import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HandHeart, Clock, Users, BookOpen, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const prayerTopics = [
  {
    title: "Les étudiants",
    description: "Priez pour leur croissance spirituelle et leur témoignage sur les campus.",
  },
  {
    title: "Les leaders",
    description: "Priez pour la sagesse et la force des responsables du mouvement.",
  },
  {
    title: "L'évangélisation",
    description: "Priez pour que l'Évangile atteigne chaque campus du Sénégal.",
  },
  {
    title: "Les ressources",
    description: "Priez pour les moyens financiers et matériels nécessaires au ministère.",
  },
];

const prayerTimes = [
  { label: "Matin (6h-8h)", value: "morning" },
  { label: "Midi (12h-14h)", value: "noon" },
  { label: "Soir (18h-20h)", value: "evening" },
  { label: "Nuit (21h-23h)", value: "night" },
];

const PrierPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    prayerTimes: [] as string[],
    message: "",
  });

  const handleTimeChange = (value: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      prayerTimes: checked
        ? [...prev.prayerTimes, value]
        : prev.prayerTimes.filter((t) => t !== value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Inscription réussie !",
      description: "Bienvenue dans la chaîne de prière du GBUSS.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <section className="py-32 bg-hero-gradient text-primary-foreground">
            <div className="section-container text-center">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="h-10 w-10 text-accent" />
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
                Merci de rejoindre notre chaîne de prière !
              </h1>
              <p className="text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-8">
                Vous recevrez bientôt un email avec les sujets de prière et les informations
                pour rejoindre notre groupe WhatsApp de prière.
              </p>
              <Button
                variant="gold"
                size="lg"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    city: "",
                    prayerTimes: [],
                    message: "",
                  });
                }}
              >
                Inscrire une autre personne
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-hero-gradient text-primary-foreground">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <HandHeart className="h-8 w-8 text-accent" />
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Priez avec nous
              </h1>
              <p className="text-xl text-primary-foreground/85">
                La prière est le moteur du GBUSS. Rejoignez notre chaîne de prière
                et soutenez le mouvement par l'intercession.
              </p>
            </div>
          </div>
        </section>

        {/* Why Pray */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Pourquoi prier pour le GBUSS ?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                « La prière fervente du juste a une grande efficace. » (Jacques 5:16)
                <br />
                Votre prière fait une différence réelle dans la vie des étudiants
                et l'avancement de l'Évangile sur les campus.
              </p>
            </div>

            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
              {[
                { icon: Users, value: "50+", label: "Intercesseurs actifs" },
                { icon: Clock, value: "24/7", label: "Couverture de prière" },
                { icon: BookOpen, value: "14", label: "Régions couvertes" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center bg-secondary rounded-xl p-8"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-4xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prayer Topics */}
        <section className="py-20 bg-secondary">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Sujets de prière
              </h2>
              <p className="text-lg text-muted-foreground">
                Voici les principaux sujets pour lesquels nous vous invitons à intercéder.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {prayerTopics.map((topic, index) => (
                <div
                  key={topic.title}
                  className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <span className="text-lg font-bold text-accent">{index + 1}</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{topic.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Rejoindre la chaîne de prière
                </h2>
                <p className="text-lg text-muted-foreground">
                  Remplissez ce formulaire pour rejoindre notre groupe d'intercesseurs.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl p-8 shadow-card space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, name: e.target.value }))
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, email: e.target.value }))
                      }
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+221 XX XXX XX XX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, phone: e.target.value }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">Ville</Label>
                    <Input
                      id="city"
                      placeholder="Votre ville"
                      value={formData.city}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, city: e.target.value }))
                      }
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Créneaux de prière préférés</Label>
                  <p className="text-sm text-muted-foreground">
                    Sélectionnez les moments où vous pouvez prier régulièrement.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {prayerTimes.map((time) => (
                      <div key={time.value} className="flex items-center space-x-3">
                        <Checkbox
                          id={time.value}
                          checked={formData.prayerTimes.includes(time.value)}
                          onCheckedChange={(checked) =>
                            handleTimeChange(time.value, checked as boolean)
                          }
                        />
                        <Label
                          htmlFor={time.value}
                          className="text-sm font-normal cursor-pointer"
                        >
                          {time.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (optionnel)</Label>
                  <Textarea
                    id="message"
                    placeholder="Partagez une intention de prière ou un message pour l'équipe..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, message: e.target.value }))
                    }
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Inscription en cours..."
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Rejoindre la chaîne de prière
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* WhatsApp Group CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="section-container text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
              Groupe WhatsApp de prière
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Après votre inscription, vous recevrez un lien pour rejoindre notre groupe
              WhatsApp où nous partageons quotidiennement les sujets de prière.
            </p>
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-6 py-3">
              <Users className="h-5 w-5 text-accent" />
              <span className="text-primary-foreground/90">
                Plus de 50 intercesseurs actifs
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrierPage;
