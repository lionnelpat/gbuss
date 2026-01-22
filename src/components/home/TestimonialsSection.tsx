import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    content: "Le GBUSS a transformé ma vie spirituelle. J'y ai trouvé une famille de foi et un accompagnement précieux dans ma marche avec Christ durant mes années universitaires.",
    author: "Marie N.",
    role: "Ancienne étudiante, UCAD",
    year: "Promotion 2020",
  },
  {
    id: 2,
    content: "Grâce aux études bibliques du GBUSS, j'ai appris à étudier la Bible par moi-même et à vivre ma foi de manière authentique sur le campus. Cette expérience m'a préparé pour la vie.",
    author: "Abdou D.",
    role: "Ingénieur, ancien membre",
    year: "Promotion 2018",
  },
  {
    id: 3,
    content: "Les camps nationaux du GBUSS restent parmi mes meilleurs souvenirs. C'est là que j'ai compris l'importance du témoignage chrétien dans le milieu académique.",
    author: "Fatou S.",
    role: "Enseignante, Dakar",
    year: "Promotion 2019",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-secondary">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Témoignages
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Des vies <span className="text-primary">transformées</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-2xl p-8 sm:p-12 shadow-elevated">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-gold">
              <Quote className="h-6 w-6 text-accent-foreground" />
            </div>

            {/* Content */}
            <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-foreground leading-relaxed mb-8 pt-4">
              "{current.content}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-semibold text-foreground text-lg">{current.author}</div>
                <div className="text-muted-foreground">{current.role}</div>
                <div className="text-sm text-accent font-medium">{current.year}</div>
              </div>

              {/* Navigation */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prev}
                  className="rounded-full"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={next}
                  className="rounded-full"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-accent w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
