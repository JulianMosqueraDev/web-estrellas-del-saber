import type { LevelIconName } from "../components/atoms/level-icon.types";
import type { Tono } from "./tonos";

export interface Nivel {
  /** Ruta de la página: /niveles/{slug} */
  slug: string;
  nombre: string;
  edad: string;
  icono: LevelIconName;
  tono: Tono;
}

/** Niveles educativos. Alimenta las cards del inicio y las páginas /niveles/{slug}. */
export const niveles: Nivel[] = [
  { slug: "caminadores", nombre: "Caminadores", edad: "0 a 2 años", icono: "bear", tono: "rosa" },
  { slug: "pre-jardin", nombre: "Pre-jardín", edad: "2 a 3 años", icono: "blocks", tono: "azul" },
  { slug: "jardin", nombre: "Jardín", edad: "3 a 4 años", icono: "sun", tono: "amarillo" },
  { slug: "transicion", nombre: "Transición", edad: "4 a 5 años", icono: "sprout", tono: "verde" },
  { slug: "primaria", nombre: "Primaria", edad: "6 a 11 años", icono: "pencil", tono: "lila" },
];

export const nivelHref = (n: Nivel) => `/niveles/${n.slug}`;
