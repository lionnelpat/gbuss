// src/hooks/useSEO.ts
// Hook utilitaire — à utiliser dans chaque composant de page

import { useEffect } from "react";

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    ogImage?: string;
}

const BASE_URL = "https://gbuss.netlify.app";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

export function useSEO({ title, description, canonical, ogImage }: SEOProps) {
    useEffect(() => {
        const fullTitle = `${title} – GBUSS`;
        const url = canonical ?? window.location.href;
        const image = ogImage ?? DEFAULT_IMAGE;

        // Title
        document.title = fullTitle;

        // Helpers
        const setMeta = (selector: string, attr: string, value: string) => {
            let el = document.querySelector(selector) as HTMLMetaElement | null;
            if (!el) {
                el = document.createElement("meta");
                document.head.appendChild(el);
            }
            el.setAttribute(attr, value);
        };

        setMeta('meta[name="description"]',       "content", description);
        setMeta('link[rel="canonical"]',           "href",    url);
        setMeta('meta[property="og:title"]',       "content", fullTitle);
        setMeta('meta[property="og:description"]', "content", description);
        setMeta('meta[property="og:url"]',         "content", url);
        setMeta('meta[property="og:image"]',       "content", image);
        setMeta('meta[name="twitter:title"]',      "content", fullTitle);
        setMeta('meta[name="twitter:description"]',"content", description);
        setMeta('meta[name="twitter:image"]',      "content", image);
    }, [title, description, canonical, ogImage]);
}

// ─────────────────────────────────────────────
// Métadonnées par route — centralise tout ici
// ─────────────────────────────────────────────

export const PAGE_SEO = {
    home: {
        title: "Accueil",
        description:
            "GBUSS forme des étudiants disciples de Christ au Sénégal. Un mouvement chrétien universitaire avec un impact sur l'université, l'église et la société.",
        canonical: `${BASE_URL}/`,
    },
    vision: {
        title: "Notre Vision",
        description:
            "Découvrez la vision et la mission du GBUSS : des communautés d'étudiants disciples, transformés par l'Évangile, rayonnant dans les universités sénégalaises.",
        canonical: `${BASE_URL}/vision`,
    },
    actions: {
        title: "Nos Actions",
        description:
            "Les actions du GBUSS en 2026 : formations de leaders, camps nationaux, soutien aux cellules locales, et expansion territoriale en Casamance et dans tout le Sénégal.",
        canonical: `${BASE_URL}/actions`,
    },
    temoignages: {
        title: "Témoignages",
        description:
            "Lisez les témoignages de membres du GBUSS dont la vie a été transformée par l'Évangile dans les universités et lycées du Sénégal.",
        canonical: `${BASE_URL}/temoignages`,
    },
    prier: {
        title: "Prier avec Nous",
        description:
            "Rejoignez la communauté de prière du GBUSS. Intercédez pour les étudiants, les cellules locales et l'avancement de l'Évangile dans les universités du Sénégal.",
        canonical: `${BASE_URL}/prier`,
    },
    don: {
        title: "Faire un Don",
        description:
            "Soutenez financièrement le GBUSS et participez à la formation de disciples dans les universités et lycées du Sénégal. Chaque don compte pour la gloire de Christ.",
        canonical: `${BASE_URL}/don`,
    },
    contact: {
        title: "Nous Contacter",
        description:
            "Contactez le GBUSS pour rejoindre une cellule, vous impliquer ou en savoir plus sur notre mouvement étudiant chrétien au Sénégal.",
        canonical: `${BASE_URL}/contact`,
    },
} as const;
