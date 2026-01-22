import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { 
  CalendarDays, 
  MapPin, 
  Clock, 
  Users, 
  ChevronLeft, 
  ChevronRight,
  X,
  Image as ImageIcon,
  BookOpen,
  Heart,
  Megaphone,
  GraduationCap
} from "lucide-react";
import { format, isSameDay } from "date-fns";
import { fr } from "date-fns/locale";
import { cn } from "@/lib/utils";

interface Event {
  id: string;
  title: string;
  date: Date;
  time: string;
  location: string;
  description: string;
  category: "formation" | "evangelisation" | "priere" | "conference";
  attendees?: number;
}

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  date: string;
  category: string;
}

const upcomingEvents: Event[] = [
  {
    id: "e1",
    title: "Retraite Spirituelle Nationale",
    date: new Date(2026, 1, 15),
    time: "08:00 - 18:00",
    location: "Centre de Conférence de Saly",
    description: "Une journée de ressourcement spirituel pour tous les membres du GBUSS. Au programme : louange, enseignements, ateliers et moments de communion fraternelle.",
    category: "priere",
    attendees: 150,
  },
  {
    id: "e2",
    title: "Formation des Leaders",
    date: new Date(2026, 1, 22),
    time: "14:00 - 17:00",
    location: "UCAD, Amphi A",
    description: "Session de formation pour les responsables de cellules sur le thème 'Diriger avec intégrité'. Intervenant : Pasteur Jean-Pierre Diop.",
    category: "formation",
    attendees: 45,
  },
  {
    id: "e3",
    title: "Semaine d'Évangélisation",
    date: new Date(2026, 2, 3),
    time: "Toute la semaine",
    location: "Campus universitaires",
    description: "Grande campagne d'évangélisation dans toutes les universités du Sénégal. Distribution de traités, témoignages personnels et concerts.",
    category: "evangelisation",
    attendees: 500,
  },
  {
    id: "e4",
    title: "Conférence Annuelle",
    date: new Date(2026, 3, 12),
    time: "09:00 - 20:00",
    location: "Grand Théâtre de Dakar",
    description: "Notre grande conférence annuelle avec des orateurs nationaux et internationaux. Thème : 'Sel et Lumière dans le monde académique'.",
    category: "conference",
    attendees: 1000,
  },
  {
    id: "e5",
    title: "Cercle de Prière",
    date: new Date(2026, 1, 28),
    time: "18:00 - 20:00",
    location: "En ligne (Zoom)",
    description: "Réunion de prière mensuelle pour intercéder pour le mouvement, les étudiants et le pays.",
    category: "priere",
    attendees: 80,
  },
];

const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop",
    title: "Conférence Nationale 2025",
    date: "Avril 2025",
    category: "Conférence",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
    title: "Camp d'été à Saly",
    date: "Août 2025",
    category: "Retraite",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop",
    title: "Formation Leadership",
    date: "Septembre 2025",
    category: "Formation",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop",
    title: "Évangélisation sur campus",
    date: "Octobre 2025",
    category: "Évangélisation",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    title: "Soirée de louange",
    date: "Novembre 2025",
    category: "Louange",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop",
    title: "Atelier d'étude biblique",
    date: "Décembre 2025",
    category: "Formation",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop",
    title: "Rencontre inter-campus",
    date: "Janvier 2026",
    category: "Communion",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
    title: "Prière du matin",
    date: "Janvier 2026",
    category: "Prière",
  },
];

const actionTypes = [
  {
    icon: BookOpen,
    title: "Études Bibliques",
    description: "Des groupes d'étude hebdomadaires pour approfondir la Parole de Dieu ensemble.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Megaphone,
    title: "Évangélisation",
    description: "Des campagnes pour partager l'Évangile dans les campus et au-delà.",
    color: "bg-gbuss-gold/20 text-gbuss-gold-dark",
  },
  {
    icon: GraduationCap,
    title: "Formation",
    description: "Des sessions pour équiper les étudiants à être des leaders serviteurs.",
    color: "bg-accent/20 text-accent-foreground",
  },
  {
    icon: Heart,
    title: "Actions Sociales",
    description: "Des initiatives pour servir la communauté et démontrer l'amour du Christ.",
    color: "bg-gbuss-warm/20 text-foreground",
  },
];

const categoryConfig = {
  formation: { label: "Formation", color: "bg-blue-100 text-blue-800", icon: GraduationCap },
  evangelisation: { label: "Évangélisation", color: "bg-amber-100 text-amber-800", icon: Megaphone },
  priere: { label: "Prière", color: "bg-purple-100 text-purple-800", icon: Heart },
  conference: { label: "Conférence", color: "bg-green-100 text-green-800", icon: Users },
};

export default function Actions() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [galleryFilter, setGalleryFilter] = useState<string>("all");

  const eventDates = upcomingEvents.map((e) => e.date);

  const getEventsForDate = (date: Date) => {
    return upcomingEvents.filter((event) => isSameDay(event.date, date));
  };

  const filteredGallery = galleryFilter === "all" 
    ? galleryImages 
    : galleryImages.filter((img) => img.category === galleryFilter);

  const galleryCategories = ["all", ...new Set(galleryImages.map((img) => img.category))];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Nos Activités
            </Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Nos <span className="text-gradient-gold">Actions</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos activités, événements à venir et les moments forts 
              qui marquent la vie du GBUSS.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Action Types */}
      <section className="py-12">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {actionTypes.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${action.color} flex items-center justify-center mb-4`}>
                  <action.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{action.title}</h3>
                <p className="text-muted-foreground text-sm">{action.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16 bg-muted/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Calendrier des <span className="text-primary">Événements</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Consultez notre calendrier pour ne manquer aucun événement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calendar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border"
            >
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                locale={fr}
                className="pointer-events-auto"
                modifiers={{
                  hasEvent: eventDates,
                }}
                modifiersStyles={{
                  hasEvent: {
                    backgroundColor: "hsl(var(--primary) / 0.2)",
                    borderRadius: "50%",
                    fontWeight: "bold",
                  },
                }}
                components={{
                  DayContent: ({ date }) => {
                    const hasEvent = eventDates.some((d) => isSameDay(d, date));
                    return (
                      <div className="relative">
                        {date.getDate()}
                        {hasEvent && (
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                        )}
                      </div>
                    );
                  },
                }}
              />
              {selectedDate && getEventsForDate(selectedDate).length > 0 && (
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2">
                    Événements du {format(selectedDate, "d MMMM", { locale: fr })}:
                  </p>
                  {getEventsForDate(selectedDate).map((event) => (
                    <button
                      key={event.id}
                      onClick={() => setSelectedEvent(event)}
                      className="w-full text-left p-2 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                    >
                      <span className="font-medium text-foreground">{event.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Upcoming Events List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-4"
            >
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-primary" />
                Prochains Événements
              </h3>
              {upcomingEvents.slice(0, 4).map((event, index) => {
                const CategoryIcon = categoryConfig[event.category].icon;
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedEvent(event)}
                    className="bg-card rounded-xl p-5 border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-xl flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold text-primary">
                          {format(event.date, "d")}
                        </span>
                        <span className="text-xs text-primary uppercase">
                          {format(event.date, "MMM", { locale: fr })}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge className={cn("text-xs", categoryConfig[event.category].color)}>
                            {categoryConfig[event.category].label}
                          </Badge>
                        </div>
                        <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {event.title}
                        </h4>
                        <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {event.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {event.location}
                          </span>
                          {event.attendees && (
                            <span className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {event.attendees} attendus
                            </span>
                          )}
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Galerie <span className="text-gradient-gold">Photos</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Revivez les moments forts de nos activités passées
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {galleryCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setGalleryFilter(category)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    galleryFilter === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  {category === "all" ? "Toutes" : category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredGallery.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedImage(image)}
                className="group cursor-pointer relative aspect-[4/3] rounded-xl overflow-hidden"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-white font-bold">{image.title}</h4>
                  <p className="text-white/80 text-sm">{image.date}</p>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <ImageIcon className="h-4 w-4 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-gbuss-navy">
        <div className="section-container text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Participez à nos activités
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Rejoignez-nous lors de nos prochains événements et faites partie 
              de cette belle aventure spirituelle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild className="bg-white text-primary hover:bg-white/90">
                <a href="/contact">Nous contacter</a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild className="border-white text-white hover:bg-white hover:text-primary">
                <a href="/don">Soutenir le mouvement</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Event Detail Dialog */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="sm:max-w-lg">
          {selectedEvent && (
            <>
              <DialogHeader>
                <Badge className={cn("w-fit mb-2", categoryConfig[selectedEvent.category].color)}>
                  {categoryConfig[selectedEvent.category].label}
                </Badge>
                <DialogTitle className="text-2xl font-serif">{selectedEvent.title}</DialogTitle>
                <DialogDescription className="text-primary font-medium">
                  {format(selectedEvent.date, "EEEE d MMMM yyyy", { locale: fr })}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <p className="text-muted-foreground">{selectedEvent.description}</p>
                
                <div className="border-t pt-4 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-foreground">{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-foreground">{selectedEvent.location}</span>
                  </div>
                  {selectedEvent.attendees && (
                    <div className="flex items-center gap-3 text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-foreground">{selectedEvent.attendees} participants attendus</span>
                    </div>
                  )}
                </div>

                <Button className="w-full mt-4" asChild>
                  <a href="/contact">S'inscrire à cet événement</a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Image Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="sm:max-w-3xl p-0 overflow-hidden">
          {selectedImage && (
            <>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto"
              />
              <div className="p-6">
                <DialogTitle className="text-xl font-serif">{selectedImage.title}</DialogTitle>
                <DialogDescription className="flex items-center gap-2 mt-1">
                  <Badge variant="secondary">{selectedImage.category}</Badge>
                  <span>{selectedImage.date}</span>
                </DialogDescription>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
