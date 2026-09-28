/* Gera os PDFs do currículo a partir dos HTMLs desta pasta.
   Uso:  node curriculo/gerar-pdf.js
   Requer o Playwright (npm i -g playwright && npx playwright install chromium). */
const path = require('path');
const { execSync } = require('child_process');

function carregarPlaywright() {
  try { return require('playwright'); } catch (e) { /* tenta a instalação global */ }
  return require(path.join(execSync('npm root -g').toString().trim(), 'playwright'));
}

const ARQUIVOS = [
  ['curriculo.html', 'Gildean_Monteiro_Curriculo.pdf'],
  ['resume-en.html', 'Gildean_Monteiro_Resume_EN.pdf']
];

(async () => {
  const { chromium } = carregarPlaywright();
  const navegador = await chromium.launch();
  const pagina = await navegador.newPage();
  for (const [origem, destino] of ARQUIVOS) {
    const fonte = path.join(__dirname, origem);
    await pagina.goto('file://' + fonte, { waitUntil: 'networkidle' });
    await pagina.evaluate(() => document.fonts.ready);
    await pagina.emulateMedia({ media: 'print' });
    await pagina.pdf({ path: path.join(__dirname, destino), format: 'A4', printBackground: true, preferCSSPageSize: true });
    console.log('gerado:', destino);
  }
  await navegador.close();
})();
