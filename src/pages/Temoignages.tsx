import { useState } from "react";
import { motion } from "framer-motion";
import {
  Quote,
  Play,
  Pause,
  Volume2,
  Send,
  User,
  GraduationCap,
  Calendar,
  Video,
  Mic,
  FileText,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

// Types for testimonials
type TestimonialType = "text" | "audio" | "video";

interface Testimonial {
  id: number;
  type: TestimonialType;
  content?: string;
  author: string;
  role: string;
  year: string;
  university?: string;
  mediaUrl?: string;
  thumbnail?: string;
}

// Sample testimonials data
const testimonials: Testimonial[] = [
  {
    id: 1,
    type: "text",
    content: "Le GBUSS a transformé ma vie spirituelle. J'y ai trouvé une famille de foi et un accompagnement précieux dans ma marche avec Christ durant mes années universitaires. Les études bibliques m'ont appris à chercher Dieu par moi-même.",
    author: "Marie Ndiaye",
    role: "Ancienne étudiante",
    year: "Promotion 2020",
    university: "UCAD - Dakar",
  },
  {
    id: 2,
    type: "video",
    content: "Découvrez comment le GBUSS a impacté mon parcours universitaire et ma foi.",
    author: "Abdou Diallo",
    role: "Ingénieur informatique",
    year: "Promotion 2018",
    university: "ESP - Dakar",
    mediaUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    type: "audio",
    content: "Écoutez mon témoignage sur l'impact du GBUSS dans ma vie de foi.",
    author: "Fatou Sow",
    role: "Enseignante",
    year: "Promotion 2019",
    university: "UGB - Saint-Louis",
    mediaUrl: "/audio/testimonial-fatou.mp3",
  },
  {
    id: 4,
    type: "text",
    content: "Grâce aux camps nationaux du GBUSS, j'ai compris l'importance du témoignage chrétien dans le milieu académique. Cette expérience m'a préparé à vivre ma foi de manière authentique partout où je vais.",
    author: "Jean-Pierre Mendy",
    role: "Médecin",
    year: "Promotion 2017",
    university: "UCAD - Faculté de Médecine",
  },
  {
    id: 5,
    type: "text",
    content: "Les formations en leadership du GBUSS m'ont équipé non seulement pour servir dans l'église, mais aussi dans ma carrière professionnelle. J'ai appris à diriger avec intégrité et humilité.",
    author: "Aminata Fall",
    role: "Cadre en entreprise",
    year: "Promotion 2016",
    university: "ISM - Dakar",
  },
  {
    id: 6,
    type: "video",
    content: "Mon parcours de foi au GBUSS - un témoignage vidéo.",
    author: "Moussa Sarr",
    role: "Pasteur",
    year: "Promotion 2015",
    university: "UCAD - Philosophie",
    mediaUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop",
  },
];

// Audio Player Component
function AudioPlayer({ testimonial }: { testimonial: Testimonial }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Simulate progress for demo
    if (!isPlaying) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsPlaying(false);
            return 0;
          }
          return prev + 2;
        });
      }, 200);
    }
  };

  return (
    <Card className="bg-card border-border overflow-hidden group hover:shadow-elevated transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
            <Mic className="h-8 w-8 text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{testimonial.author}</h3>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            <p className="text-xs text-accent">{testimonial.university}</p>
          </div>
        </div>

        <p className="text-muted-foreground mb-4 text-sm italic">"{testimonial.content}"</p>

        {/* Audio Controls */}
        <div className="bg-muted rounded-lg p-4">
          <div className="flex items-center gap-4">
            <button
              onClick={togglePlay}
              className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-1" />}
            </button>
            <div className="flex-1">
              <div className="h-2 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent transition-all duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>0:00</span>
                <span>3:45</span>
              </div>
            </div>
            <Volume2 className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>

        <div className="mt-4 text-xs text-accent font-medium">{testimonial.year}</div>
      </CardContent>
    </Card>
  );
}

// Video Player Component
function VideoPlayer({ testimonial }: { testimonial: Testimonial }) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <Card className="bg-card border-border overflow-hidden group hover:shadow-elevated transition-all duration-300">
      <div className="relative aspect-video">
        {showVideo ? (
          <iframe
            src={testimonial.mediaUrl}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img
              src={testimonial.thumbnail}
              alt={testimonial.author}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <button
              onClick={() => setShowVideo(true)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                <Play className="h-6 w-6 text-accent-foreground ml-1" />
              </div>
            </button>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center gap-2 text-white">
                <Video className="h-4 w-4" />
                <span className="text-sm font-medium">Témoignage vidéo</span>
              </div>
            </div>
          </>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-foreground">{testimonial.author}</h3>
        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        <p className="text-xs text-accent">{testimonial.university} • {testimonial.year}</p>
        <p className="text-sm text-muted-foreground mt-2 italic">"{testimonial.content}"</p>
      </CardContent>
    </Card>
  );
}

// Text Testimonial Component
function TextTestimonial({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="bg-card border-border overflow-hidden group hover:shadow-elevated transition-all duration-300 h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-4">
          <Quote className="h-5 w-5 text-accent" />
        </div>

        <blockquote className="text-foreground leading-relaxed flex-1 mb-4">
          "{testimonial.content}"
        </blockquote>

        <div className="border-t border-border pt-4 mt-auto">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{testimonial.author}</h3>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              <div className="flex items-center gap-2 text-xs text-accent">
                <GraduationCap className="h-3 w-3" />
                <span>{testimonial.university}</span>
                <span>•</span>
                <Calendar className="h-3 w-3" />
                <span>{testimonial.year}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Submission Form Component
function SubmissionForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
    year: "",
    type: "text" as TestimonialType,
    content: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Témoignage envoyé !",
      description: "Merci pour votre témoignage. Notre équipe le examinera avant publication.",
    });

    setFormData({
      name: "",
      email: "",
      university: "",
      year: "",
      type: "text",
      content: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="font-serif text-2xl text-foreground flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
            <Send className="h-5 w-5 text-accent" />
          </div>
          Partagez votre témoignage
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Nom complet *</label>
              <Input
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Votre nom"
                className="bg-background"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email *</label>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="votre@email.com"
                className="bg-background"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Université / École</label>
              <Input
                value={formData.university}
                onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                placeholder="Ex: UCAD, ESP, UGB..."
                className="bg-background"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Année de promotion</label>
              <Input
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                placeholder="Ex: 2020"
                className="bg-background"
              />
            </div>
          </div>

          {/* Type Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Type de témoignage *</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { type: "text" as TestimonialType, icon: FileText, label: "Texte" },
                { type: "audio" as TestimonialType, icon: Mic, label: "Audio" },
                { type: "video" as TestimonialType, icon: Video, label: "Vidéo" },
              ].map((option) => (
                <button
                  key={option.type}
                  type="button"
                  onClick={() => setFormData({ ...formData, type: option.type })}
                  className={`p-4 rounded-lg border-2 transition-all flex flex-col items-center gap-2 ${
                    formData.type === option.type
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border bg-background hover:border-accent/50 text-muted-foreground"
                  }`}
                >
                  <option.icon className="h-6 w-6" />
                  <span className="text-sm font-medium">{option.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content based on type */}
          {formData.type === "text" && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Votre témoignage *</label>
              <Textarea
                required
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="Partagez comment le GBUSS a impacté votre vie spirituelle et votre parcours..."
                className="bg-background min-h-[150px]"
              />
            </div>
          )}

          {formData.type === "audio" && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Fichier audio</label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-accent/50 transition-colors cursor-pointer">
                <Mic className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">
                  Glissez votre fichier audio ici ou cliquez pour parcourir
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Formats acceptés : MP3, WAV, M4A (max 10 MB)
                </p>
                <input type="file" accept="audio/*" className="hidden" />
              </div>
              <Textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="Description brève de votre témoignage (optionnel)"
                className="bg-background"
              />
            </div>
          )}

          {formData.type === "video" && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Lien vidéo (YouTube, Vimeo)</label>
              <Input
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="https://www.youtube.com/watch?v=..."
                className="bg-background"
              />
              <p className="text-xs text-muted-foreground">
                Collez le lien de votre vidéo YouTube ou Vimeo
              </p>
            </div>
          )}

          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin mr-2">⏳</span>
                Envoi en cours...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Envoyer mon témoignage
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Votre témoignage sera examiné par notre équipe avant publication.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}

// Filter Tabs Component
function FilterTabs({
  activeFilter,
  setActiveFilter
}: {
  activeFilter: TestimonialType | "all";
  setActiveFilter: (filter: TestimonialType | "all") => void;
}) {
  const filters = [
    { id: "all" as const, label: "Tous", icon: Quote },
    { id: "text" as const, label: "Texte", icon: FileText },
    { id: "audio" as const, label: "Audio", icon: Mic },
    { id: "video" as const, label: "Vidéo", icon: Video },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => setActiveFilter(filter.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeFilter === filter.id
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          <filter.icon className="h-4 w-4" />
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export default function Temoignages() {
  const [activeFilter, setActiveFilter] = useState<TestimonialType | "all">("all");

  const filteredTestimonials = activeFilter === "all"
    ? testimonials
    : testimonials.filter((t) => t.type === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Témoignages
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Des vies <span className="text-gradient-gold">transformées</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Découvrez comment Dieu a touché et transformé des vies à travers le ministère du GBUSS.
              Ces témoignages d'anciens étudiants racontent l'impact du mouvement sur leur foi et leur parcours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100+", label: "Témoignages" },
              { number: "30", label: "Années d'impact" },
              { number: "6+", label: "Universités" },
              { number: "∞", label: "Vies transformées" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="font-serif text-3xl sm:text-4xl font-bold text-accent mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Galerie de témoignages
            </h2>
            <p className="text-muted-foreground mb-8">
              Filtrez par type de témoignage : texte, audio ou vidéo
            </p>
            <FilterTabs activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          </div>

          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {testimonial.type === "text" && <TextTestimonial testimonial={testimonial} />}
                {testimonial.type === "audio" && <AudioPlayer testimonial={testimonial} />}
                {testimonial.type === "video" && <VideoPlayer testimonial={testimonial} />}
              </motion.div>
            ))}
          </motion.div>

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Aucun témoignage trouvé pour ce filtre.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-20 bg-secondary">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                Témoignage à la une
              </span>
              <h2 className="font-serif text-3xl font-bold text-foreground">
                50 ans d'impact au Sénégal
              </h2>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-elevated">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary flex items-center justify-center">
                <div className="text-center text-primary-foreground p-8">
                  <Play className="h-16 w-16 mx-auto mb-4 text-accent" />
                  <h3 className="font-serif text-2xl font-bold mb-2">
                    Documentaire GBUSS
                  </h3>
                  <p className="text-primary-foreground/80">
                    Découvrez l'histoire et l'impact du GBUSS à travers les générations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Form Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                Votre histoire compte
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Partagez votre <span className="text-primary">témoignage</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Votre expérience au sein du GBUSS peut inspirer et encourager la nouvelle génération
                d'étudiants. Que ce soit un texte, un audio ou une vidéo, partagez comment Dieu a
                agi dans votre vie à travers le mouvement.
              </p>

              <div className="space-y-4">
                {[
                  { icon: FileText, title: "Témoignage écrit", desc: "Rédigez votre histoire en quelques paragraphes" },
                  { icon: Mic, title: "Témoignage audio", desc: "Enregistrez votre voix et partagez-la" },
                  { icon: Video, title: "Témoignage vidéo", desc: "Partagez un lien YouTube ou Vimeo" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <SubmissionForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
