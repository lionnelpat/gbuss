import { Link } from "react-router-dom";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import prayerImage from "@/assets/prayer-group.jpg";

const values = [
  {
    icon: Eye,
    title: "Vision",
    description: "Notre vision est de voir des élèves, des étudiants et des amis qui croissent ensemble en tant que \n" +
        "communautés de disciples, transformés par l'Évangile et ayant un impact sur l’université, l'église et la \n" +
        "société pour la gloire de Christ.",
  },
  {
    icon: Target,
    title: "Mission",
    description: "Encourager les élèves, les étudiants et les amis à croitre ensemble, vivre et témoigner de leur foi \n" +
        "chrétienne au sein de leurs milieux d'études et de travail.",
  },
  {
    icon: Heart,
    title: "Valeurs",
    description: "Le GBUSS se fonde sur les valeurs suivantes: Intégrité | Service | Engagement | Unité",
  },
];

export function MissionSection() {
  return (
    <section className="py-24 bg-warm-gradient">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Notre identité
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Enracinés dans la foi,{" "}
              <span className="text-primary">engagés</span> pour demain
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Le GBUSS est un mouvement d'évangélisation et d'édification des étudiants
              et lycéens chrétiens au Sénégal. Nous croyons que chaque jeune peut être
              un ambassadeur de Christ dans son environnement académique.
            </p>

            <div className="space-y-6 mb-10">
              {values.map((item, index) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 rounded-xl bg-card shadow-card hover:shadow-elevated transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="navy" size="lg" asChild>
              <Link to="/vision">
                En savoir plus
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={prayerImage}
                alt="Moment de prière"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-elevated max-w-xs">
              <blockquote className="font-serif text-lg italic text-foreground mb-3">
                "Que ta Parole soit une lampe à mes pieds, une lumière sur mon sentier."
              </blockquote>
              <cite className="text-sm text-muted-foreground">— Psaume 119:105</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
