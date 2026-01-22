import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Users, Building2, MapPin, Heart, Briefcase, Mail, Phone } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: string;
  image: string;
  bio: string;
  email?: string;
  phone?: string;
  location?: string;
}

const teamCategories = [
  {
    id: "conseil",
    title: "Le Conseil d'Administration",
    description: "L'organe de gouvernance et d'orientation stratégique du GBUSS",
    icon: Building2,
    color: "from-gbuss-navy to-gbuss-navy/80",
  },
  {
    id: "secretariat",
    title: "Le Secrétariat National",
    description: "L'équipe exécutive qui coordonne les activités au niveau national",
    icon: Briefcase,
    color: "from-primary to-primary/80",
  },
  {
    id: "itinerants",
    title: "Les Secrétaires Itinérants",
    description: "Les ambassadeurs du mouvement qui visitent les campus à travers le pays",
    icon: MapPin,
    color: "from-gbuss-gold to-gbuss-gold-light",
  },
  {
    id: "cellules",
    title: "Les Cellules Locales",
    description: "Les groupes actifs dans chaque établissement universitaire et scolaire",
    icon: Users,
    color: "from-accent to-accent/80",
  },
  {
    id: "amis",
    title: "Le Groupe des Amis",
    description: "Les anciens membres et sympathisants qui soutiennent le mouvement",
    icon: Heart,
    color: "from-gbuss-warm to-gbuss-warm/80",
  },
];

const teamMembers: TeamMember[] = [
  // Conseil d'Administration
  {
    id: "ca1",
    name: "Pasteur Jean-Pierre Diop",
    role: "Président du Conseil",
    category: "conseil",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Pasteur engagé dans le ministère estudiantin depuis plus de 20 ans. Il apporte sa sagesse et son expérience pour guider la vision du GBUSS.",
    email: "president@gbuss.sn",
  },
  {
    id: "ca2",
    name: "Dr. Marie Faye",
    role: "Vice-Présidente",
    category: "conseil",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    bio: "Professeure d'université et ancienne responsable GBUSS, elle milite pour l'excellence académique et spirituelle.",
    email: "vp@gbuss.sn",
  },
  {
    id: "ca3",
    name: "M. Abdoulaye Ndiaye",
    role: "Trésorier Général",
    category: "conseil",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Expert-comptable de profession, il veille à la bonne gestion des ressources du mouvement.",
    email: "tresorier@gbuss.sn",
  },
  // Secrétariat National
  {
    id: "sn1",
    name: "Mme. Fatou Sow",
    role: "Secrétaire Nationale",
    category: "secretariat",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    bio: "Ancienne présidente du GBU de l'UCAD, elle coordonne maintenant toutes les activités nationales du mouvement avec passion et dévouement.",
    email: "secretariat@gbuss.sn",
    phone: "+221 77 000 00 00",
    location: "Dakar, Sénégal",
  },
  {
    id: "sn2",
    name: "M. Ousmane Sarr",
    role: "Secrétaire National Adjoint",
    category: "secretariat",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    bio: "Responsable de la formation et du développement des leaders au sein du mouvement.",
    email: "formation@gbuss.sn",
  },
  {
    id: "sn3",
    name: "Mlle. Aïda Mbaye",
    role: "Chargée de Communication",
    category: "secretariat",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Spécialiste en communication digitale, elle gère la présence en ligne et les relations publiques du GBUSS.",
    email: "communication@gbuss.sn",
  },
  // Secrétaires Itinérants
  {
    id: "si1",
    name: "M. Moussa Diallo",
    role: "Secrétaire Itinérant - Zone Nord",
    category: "itinerants",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    bio: "Couvre les universités et lycées de Saint-Louis, Louga et Matam. Passionné par l'évangélisation estudiantine.",
    location: "Saint-Louis",
  },
  {
    id: "si2",
    name: "Mme. Khady Thiam",
    role: "Secrétaire Itinérante - Zone Centre",
    category: "itinerants",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&crop=face",
    bio: "Responsable des cellules à Thiès, Diourbel et Kaolack. Anime des retraites et des formations régulières.",
    location: "Thiès",
  },
  {
    id: "si3",
    name: "M. Paul Mendy",
    role: "Secrétaire Itinérant - Zone Sud",
    category: "itinerants",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    bio: "Dessert la Casamance et les régions de Kolda et Tambacounda. Expert en implantation de nouvelles cellules.",
    location: "Ziguinchor",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Equipe() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getMembersByCategory = (categoryId: string) => {
    return teamMembers.filter((member) => member.category === categoryId);
  };

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
              Notre Équipe
            </Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              L'Équipe <span className="text-gradient-gold">Nationale</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez les personnes dévouées qui font vivre le GBUSS au quotidien, 
              des responsables nationaux aux animateurs locaux.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Organigramme Section */}
      <section className="py-16">
        <div className="section-container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {teamCategories.map((category, index) => {
              const members = getMembersByCategory(category.id);
              const IconComponent = category.icon;

              return (
                <motion.div
                  key={category.id}
                  variants={cardVariants}
                  className="relative"
                >
                  {/* Category Header */}
                  <div
                    className={`bg-gradient-to-r ${category.color} rounded-2xl p-6 md:p-8 text-white mb-6 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
                    onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold">
                          {category.title}
                        </h2>
                        <p className="text-white/80 mt-1">{category.description}</p>
                      </div>
                      <div className="hidden md:flex items-center gap-2">
                        <span className="text-sm text-white/70">
                          {members.length > 0 ? `${members.length} membre${members.length > 1 ? 's' : ''}` : 'Voir les détails'}
                        </span>
                        <motion.div
                          animate={{ rotate: selectedCategory === category.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Members Grid */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: selectedCategory === category.id || members.length === 0 ? "auto" : 0,
                      opacity: selectedCategory === category.id || members.length === 0 ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {members.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-4">
                        {members.map((member, memberIndex) => (
                          <motion.div
                            key={member.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: memberIndex * 0.1 }}
                            onClick={() => setSelectedMember(member)}
                            className="group cursor-pointer"
                          >
                            <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border">
                              <div className="relative h-64 overflow-hidden">
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                  <h3 className="text-xl font-bold">{member.name}</h3>
                                  <p className="text-white/80 text-sm">{member.role}</p>
                                </div>
                              </div>
                              <div className="p-4">
                                <p className="text-muted-foreground text-sm line-clamp-2">
                                  {member.bio}
                                </p>
                                <div className="mt-3 flex items-center text-primary text-sm font-medium">
                                  <span>Voir le profil</span>
                                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="bg-muted/30 rounded-xl p-8 text-center mb-4">
                        <IconComponent className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
                        <p className="text-muted-foreground">
                          {category.id === "cellules" && "Plus de 30 cellules actives dans les universités et lycées du Sénégal. Chaque cellule est animée par des étudiants engagés."}
                          {category.id === "amis" && "Un réseau de plus de 500 anciens membres et sympathisants qui soutiennent le mouvement par leurs prières et leurs dons."}
                        </p>
                      </div>
                    )}
                  </motion.div>

                  {/* Connector Line */}
                  {index < teamCategories.length - 1 && (
                    <div className="flex justify-center py-2">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-border to-transparent" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-gbuss-navy">
        <div className="section-container text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Rejoignez l'équipe
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Vous êtes passionné par le ministère estudiantin ? Découvrez comment vous pouvez 
              servir au sein du GBUSS et impacter la vie des jeunes.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-xl hover:bg-white/90 transition-all hover:scale-105 shadow-lg"
            >
              Nous contacter
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Member Detail Dialog */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="sm:max-w-lg">
          {selectedMember && (
            <>
              <div className="relative h-48 -m-6 mb-4 overflow-hidden rounded-t-lg">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <DialogHeader className="pt-2">
                <DialogTitle className="text-2xl font-serif">{selectedMember.name}</DialogTitle>
                <DialogDescription className="text-primary font-medium">
                  {selectedMember.role}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <p className="text-muted-foreground">{selectedMember.bio}</p>
                
                {(selectedMember.email || selectedMember.phone || selectedMember.location) && (
                  <div className="border-t pt-4 space-y-3">
                    {selectedMember.email && (
                      <div className="flex items-center gap-3 text-sm">
                        <Mail className="h-4 w-4 text-primary" />
                        <a href={`mailto:${selectedMember.email}`} className="text-foreground hover:text-primary transition-colors">
                          {selectedMember.email}
                        </a>
                      </div>
                    )}
                    {selectedMember.phone && (
                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="h-4 w-4 text-primary" />
                        <a href={`tel:${selectedMember.phone}`} className="text-foreground hover:text-primary transition-colors">
                          {selectedMember.phone}
                        </a>
                      </div>
                    )}
                    {selectedMember.location && (
                      <div className="flex items-center gap-3 text-sm">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{selectedMember.location}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
