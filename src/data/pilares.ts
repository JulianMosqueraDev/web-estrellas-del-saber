import type { FeatureIconName } from "../components/atoms/feature-icon.types";
import type { Tono } from "./tonos";

export interface Pilar {
  /** Ruta de la página: /pilares/{slug} */
  slug: string;
  /** Título en dos renglones, como en el mock */
  lineas: [string, string];
  descripcion: string;
  icono: FeatureIconName;
  tono: Tono;
  /** Color del título (en el mock no siempre coincide con el tono de la card) */
  colorTitulo: string;
}

/** Pilares del colegio. Alimenta las cards del inicio y las páginas /pilares/{slug}. */
export const pilares: Pilar[] = [
  {
    slug: "exploracion-creativa",
    lineas: ["Exploración", "creativa"],
    descripcion: "Curiosidad que abre grandes ideas.",
    icono: "bulb",
    tono: "rosa",
    colorTitulo: "#e3213f",
  },
  {
    slug: "aprendizaje-jugando",
    lineas: ["Aprendizaje", "jugando"],
    descripcion: "Experiencias significativas para la vida.",
    icono: "puzzle",
    tono: "azul",
    colorTitulo: "#1d2b7a",
  },
  {
    slug: "arte-y-expresion",
    lineas: ["Arte y", "expresión"],
    descripcion: "Talentos que dan color al mundo.",
    icono: "palette",
    tono: "verde",
    colorTitulo: "#1d2b7a",
  },
  {
    slug: "literatura-magica",
    lineas: ["Literatura", "mágica"],
    descripcion: "Historias que inspiran grandes sueños.",
    icono: "book",
    tono: "lila",
    colorTitulo: "#7a2fd0",
  },
];

export const pilarTitulo = (p: Pilar) => p.lineas.join(" ");
export const pilarHref = (p: Pilar) => `/pilares/${p.slug}`;
