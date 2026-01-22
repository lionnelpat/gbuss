import { Link } from "react-router-dom";
import { Calendar, Users, BookOpen, Megaphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import conferenceImage from "@/assets/conference.jpg";

const actions = [
  {
    icon: BookOpen,
    title: "Études bibliques",
    description: "Rencontres hebdomadaires d'étude de la Parole de Dieu sur les campus universitaires et lycées.",
  },
  {
    icon: Users,
    title: "Camps et retraites",
    description: "Temps forts annuels pour approfondir la foi, la communion fraternelle et le discipulat.",
  },
  {
    icon: Megaphone,
    title: "Évangélisation",
    description: "Campagnes de sensibilisation et témoignage de l'Évangile auprès des étudiants non-croyants.",
  },
  {
    icon: Calendar,
    title: "Événements",
    description: "Conférences, séminaires de formation au leadership et journées d'action sociale.",
  },
];

export function ActionsSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Nos activités
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Une présence active sur{" "}
            <span className="text-accent">chaque campus</span>
          </h2>
          <p className="text-lg text-primary-foreground/80">
            À travers diverses activités, nous accompagnons les étudiants dans leur vie 
            spirituelle et leur témoignage quotidien.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Actions Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {actions.map((action, index) => (
              <div
                key={action.title}
                className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <action.icon className="h-6 w-6 text-accent group-hover:text-accent-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">{action.title}</h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">
                  {action.description}
                </p>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={conferenceImage}
                alt="Conférence GBUSS"
                className="w-full h-[450px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground rounded-xl px-6 py-4 shadow-gold">
              <div className="text-3xl font-bold">1000+</div>
              <div className="text-sm">étudiants chaque année</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="gold" size="xl" asChild>
            <Link to="/actions">
              Découvrir toutes nos actions
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
