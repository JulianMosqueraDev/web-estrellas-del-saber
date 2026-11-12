/** Tramo de un contorno ondulado: [xFin, yFin, altura de la loma]. */
export type Bump = [x: number, y: number, h: number];

/**
 * Encadena curvas Bézier en forma de loma desde (x0, y0).
 * Sirve para siluetas de nubes, olas o césped con bordes orgánicos.
 */
export function bumps(x0: number, y0: number, list: Bump[]): string {
  let d = "";
  for (const [x1, y1, h] of list) {
    const dx = x1 - x0;
    d += ` C${(x0 + dx * 0.06).toFixed(1)} ${y0 - h} ${(x1 - dx * 0.06).toFixed(1)} ${y1 - h} ${x1} ${y1}`;
    x0 = x1;
    y0 = y1;
  }
  return d;
}

/** Destello de 4 puntas centrado en (x, y) con radio s. */
export function sparklePath(x: number, y: number, s: number): string {
  const k = s * 0.28;
  return `M${x} ${y - s}L${x + k} ${y - k} ${x + s} ${y} ${x + k} ${y + k} ${x} ${y + s} ${x - k} ${y + k} ${x - s} ${y} ${x - k} ${y - k}Z`;
}
