// Sistema de ícones de linha, feito só com primitivas nativas de SVG
// (line, polyline, polygon, circle, ellipse, rect), sem path bezier
// customizado, pra não arriscar ícone malformado. Um ícone por tema de
// risco/serviço, no lugar de emoji genérico.
const ICONS = {
  pericia: `<line x1="12" y1="3" x2="12" y2="19"/><line x1="5" y1="7" x2="19" y2="7"/><polyline points="3,7 5,12 7,7"/><polyline points="17,7 19,12 21,7"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="19" x2="12" y2="21"/>`,

  treinamento: `<polygon points="12,4 22,9 12,14 2,9"/><rect x="8" y="13" width="8" height="5" rx="1"/>`,

  ambiental: `<polyline points="12,20 12,10"/><polyline points="12,10 6,4"/><polyline points="12,14 18,8"/>`,

  guindar: `<polyline points="4,4 18,4"/><line x1="8" y1="4" x2="8" y2="16"/><line x1="14" y1="4" x2="14" y2="12"/><polyline points="14,12 11,12 11,16"/>`,

  residuo: `<rect x="6" y="4" width="12" height="16" rx="2"/><line x1="6" y1="9" x2="18" y2="9"/><line x1="6" y1="15" x2="18" y2="15"/>`,

  pressao: `<circle cx="12" cy="13" r="7"/><line x1="12" y1="13" x2="16" y2="8"/><line x1="12" y1="5" x2="12" y2="6.5"/>`,

  mineracao: `<polyline points="2,19 9,8 13,14 16,10 22,19"/><line x1="2" y1="19" x2="22" y2="19"/>`,

  altura: `<circle cx="12" cy="5" r="2"/><line x1="12" y1="7" x2="12" y2="14"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="12" y1="14" x2="8" y2="20"/><line x1="12" y1="14" x2="16" y2="20"/><line x1="4" y1="21" x2="20" y2="21"/>`,

  confinado: `<ellipse cx="12" cy="6" rx="7" ry="3"/><line x1="5" y1="6" x2="5" y2="14"/><line x1="19" y1="6" x2="19" y2="14"/><ellipse cx="12" cy="14" rx="7" ry="3"/><line x1="9" y1="17" x2="9" y2="20"/><line x1="15" y1="17" x2="15" y2="20"/>`,

  sinaleiro: `<line x1="5" y1="3" x2="5" y2="21"/><polyline points="5,4 18,4 15,8 18,12 5,12"/>`,

  rocadeira: `<line x1="6" y1="21" x2="14" y2="13"/><polygon points="14,13 20,3 21,4 11,10"/>`,

  psicossocial: `<circle cx="12" cy="9" r="6"/><polyline points="7,9 10,12 12,8 14,11 17,9"/><line x1="9" y1="19" x2="9" y2="21"/><line x1="15" y1="19" x2="15" y2="21"/><line x1="8" y1="15" x2="16" y2="15"/>`,

  empresa: `<rect x="4" y="3" width="11" height="18" rx="1"/><polyline points="15,9 20,9 20,21"/><line x1="2" y1="21" x2="22" y2="21"/><line x1="7.5" y1="7" x2="11.5" y2="7"/><line x1="7.5" y1="11" x2="11.5" y2="11"/><line x1="7.5" y1="15" x2="11.5" y2="15"/>`,

  local: `<circle cx="12" cy="9" r="3"/><polyline points="5.5,11.5 12,21 18.5,11.5"/><circle cx="12" cy="9" r="7"/>`,

  certificado: `<rect x="3" y="4" width="18" height="12" rx="1.5"/><line x1="7" y1="8" x2="13" y2="8"/><line x1="7" y1="11.5" x2="11" y2="11.5"/><circle cx="16.5" cy="15" r="2.5"/><polyline points="15,17 14.5,21 16.5,20 18.5,21 18,17"/>`,

  camera: `<rect x="3" y="7" width="18" height="13" rx="2"/><polyline points="8,7 10,4 14,4 16,7"/><circle cx="12" cy="13.5" r="4"/>`,
};

function iconSvg(key, size) {
  size = size || 24;
  const inner = ICONS[key] || ICONS.treinamento;
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
}
