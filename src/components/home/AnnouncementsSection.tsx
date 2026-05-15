import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Bell, ArrowRight } from "lucide-react";
import { supabase, type DbAnnouncement } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const isSupabaseConfigured =
  import.meta.env.VITE_SUPABASE_URL &&
  import.meta.env.VITE_SUPABASE_URL !== "YOUR_SUPABASE_URL";

export function AnnouncementsSection() {
  const { data: announcements } = useQuery({
    queryKey: ["announcements"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("announcements")
        .select("*")
        .eq("active", true)
        .order("published_at", { ascending: false })
        .limit(3);
      if (error) throw error;
      return data as DbAnnouncement[];
    },
    enabled: isSupabaseConfigured,
  });

  if (!announcements || announcements.length === 0) return null;

  return (
    <section className="py-12 bg-accent/5 border-y border-accent/20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
              <Bell className="h-4 w-4 text-accent" />
            </div>
            <h2 className="font-serif text-xl font-bold text-foreground">
              Actualités & Annonces
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {announcements.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-5 border border-border hover:border-accent/40 hover:shadow-md transition-all duration-300"
              >
                <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-2">
                  {format(new Date(item.published_at), "d MMMM yyyy", { locale: fr })}
                </p>
                <h3 className="font-serif font-bold text-foreground mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Button variant="outline" size="sm" asChild>
              <Link to="/actions" className="gap-2">
                Voir toutes nos activités
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
