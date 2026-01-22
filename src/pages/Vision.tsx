import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Target, Eye, Heart, BookOpen, Users, Compass } from "lucide-react";

const values = [
  {
    icon: BookOpen,
    title: "Fidélité à la Parole",
    description: "Nous croyons en l'autorité suprême de la Bible comme fondement de notre foi et de nos actions.",
  },
  {
    icon: Heart,
    title: "Amour fraternel",
    description: "Nous cultivons des relations authentiques basées sur l'amour de Christ entre étudiants.",
  },
  {
    icon: Compass,
    title: "Intégrité",
    description: "Nous cherchons à vivre de manière cohérente avec nos convictions dans tous les aspects de la vie.",
  },
  {
    icon: Users,
    title: "Communion",
    description: "Nous valorisons la vie communautaire et l'entraide au sein du corps de Christ.",
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
                  Voir des étudiants et lycéens chrétiens du Sénégal transformés par la Parole de Dieu, 
                  vivant une foi authentique et témoignant de Jésus-Christ au sein de leur établissement 
                  et dans la société.
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
                  Accompagner les étudiants et lycéens chrétiens du Sénégal dans leur croissance 
                  spirituelle, les équiper pour témoigner de l'Évangile sur leur campus et les 
                  préparer à servir Christ dans la société.
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
