import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Target, Eye, Heart, BookOpen, Users, Compass } from "lucide-react";

const values = [
  {
    icon: BookOpen,
    title: "Intégrité",
    description: "Agir avec honnêteté et transparence, en étant fidèle à nos principes dans toutes nos actions.",
  },
  {
    icon: Heart,
    title: "Service",
    description: "Servir les autres avec humilité et amour, en suivant l'exemple du Christ.",
  },
  {
    icon: Compass,
    title: "Engagement",
    description: "Travailler avec persévérance et détermination pour promouvoir l'Évangile, malgré les défis",
  },
  {
    icon: Users,
    title: "Unité",
    description: "Promouvoir la cohésion et la collaboration entre les membres et partenaires pour accomplir notre mission commune",
  },
];

const VisionPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-hero-gradient text-primary-foreground">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                Notre identité
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Vision & Mission
              </h1>
              <p className="text-xl text-primary-foreground/85">
                Depuis 1967, le GBUSS œuvre pour la transformation des campus sénégalais par l'Évangile.
              </p>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Eye className="h-7 w-7 text-accent" />
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                    Notre Vision
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Notre vision est de voir des élèves, des étudiants et des amis qui croissent ensemble en tant que
                  communautés de disciples, transformés par l'Évangile et ayant un impact sur l’université, l'église et la
                  société pour la gloire de Christ.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nous rêvons d'une génération de jeunes leaders chrétiens qui impactent positivement
                  leur environnement académique et professionnel par leur intégrité, leur excellence
                  et leur amour pour les autres.
                </p>
              </div>
              <div className="bg-secondary rounded-2xl p-8 lg:p-12">
                <blockquote className="font-serif text-2xl italic text-foreground leading-relaxed">
                  "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque
                  croit en lui ne périsse point, mais qu'il ait la vie éternelle."
                </blockquote>
                <cite className="block mt-6 text-accent font-semibold">— Jean 3:16</cite>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-secondary">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 bg-primary rounded-2xl p-8 lg:p-12 text-primary-foreground">
                <h3 className="font-serif text-2xl font-bold mb-6">Ce que nous faisons</h3>
                <ul className="space-y-4">
                  {[
                    "Études bibliques régulières sur les campus",
                    "Formation au leadership chrétien",
                    "Accompagnement spirituel personnalisé",
                    "Camps et retraites annuels",
                    "Évangélisation et sensibilisation",
                    "Actions sociales et d'entraide",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Target className="h-7 w-7 text-accent" />
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                    Notre Mission
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Encourager les élèves, les étudiants et les amis à croitre ensemble, vivre et témoigner de leur foi
                  chrétienne au sein de leurs milieux d'études et de travail..
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nous travaillons en partenariat avec les églises locales pour offrir un
                  encadrement complet aux jeunes croyants.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-3 justify-center mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Heart className="h-7 w-7 text-accent" />
                </div>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Nos Valeurs
              </h2>
              <p className="text-lg text-muted-foreground">
                Les principes qui guident notre action au quotidien.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 text-center group"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors">
                    <value.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VisionPage;
