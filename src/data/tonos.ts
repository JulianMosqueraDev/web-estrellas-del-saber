/** Tonos pastel compartidos por las cards (niveles, pilares) y sus páginas. */
export type Tono = "rosa" | "azul" | "amarillo" | "verde" | "lila";

/** Paleta de cada tono: fondo (degradado), color de acento y borde suave. */
const tonos: Record<Tono, { bg1: string; bg2: string; accent: string; edge: string }> = {
  rosa: { bg1: "#ffe6ec", bg2: "#ffcbd7", accent: "#ec3f7f", edge: "#ffb8ca" },
  azul: { bg1: "#e0f4ff", bg2: "#bde4fb", accent: "#168ce0", edge: "#a6d8fa" },
  amarillo: { bg1: "#fff5cf", bg2: "#ffe388", accent: "#e98300", edge: "#ffd666" },
  verde: { bg1: "#e1f8e3", bg2: "#bcebc3", accent: "#1f9c40", edge: "#a2dfab" },
  lila: { bg1: "#efe7ff", bg2: "#d9c8fa", accent: "#7d4bdf", edge: "#c8b2f6" },
};

/** Variables CSS del tono, para usar en un atributo style: --bg-1, --bg-2, --accent, --edge. */
export const tonoVars = (t: Tono) => {
  const c = tonos[t];
  return `--bg-1:${c.bg1};--bg-2:${c.bg2};--accent:${c.accent};--edge:${c.edge}`;
};
