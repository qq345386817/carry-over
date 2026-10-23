const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const root = path.resolve(__dirname, '..');
const appRoot = path.resolve(process.argv[2] || path.join(root, '..'));
const locales = {
  'en-US': 'en_US', 'zh-Hans': 'zh_Hans', 'zh-Hant': 'zh_Hant',
  ja: 'ja', ko: 'ko', 'de-DE': 'de_DE', 'fr-FR': 'fr_FR',
  'es-MX': 'es_MX', it: 'it', id: 'id',
};
const phoneFrame = process.env.CARRYOVER_IPHONE_FRAME ||
  path.join(path.dirname(appRoot), 'AppStorePreview/AppStorePreview/Bezels/iPhone 16 Pro Max - Black Titanium - Portrait.png');
const frames = path.join(appRoot, 'preview_assets/apple_product_bezels');
const output = path.join(root, 'images/product');
const jobs = [
  [phoneFrame, path.join(output, 'iphone-frame.webp'), 480],
  [path.join(frames, 'macbook-pro-m5-16-space-black.png'), path.join(output, 'macbook-frame.webp'), 1600],
];

for (const [locale, slug] of Object.entries(locales)) {
  for (const [scene, filename] of [['capture', 'phone-capture'], ['full', 'phone-inbox']]) {
    jobs.push([
      path.join(appRoot, `maestro_screenshots/iphone17promax_${slug}_light_${scene}.png`),
      path.join(output, locale, `${filename}.webp`), 600,
    ]);
  }
  jobs.push([
    path.join(appRoot, `macos_screenshots/raw/macos_${slug}_02-inbox.png`),
    path.join(output, locale, 'mac-inbox.webp'), null,
  ]);
}

const license = path.join(frames, 'Apple-Design-Resources-License.rtf');
const missing = [...jobs.map(([source]) => source), license].filter(source => !fs.existsSync(source));
if (missing.length) throw new Error(`Missing real captures or frames:\n${missing.join('\n')}`);
const encoder = spawnSync('cwebp', ['-version'], { encoding: 'utf8' });
if (encoder.status !== 0) throw new Error('cwebp is required to export product images.');

for (const [source, target, width] of jobs) {
  fs.mkdirSync(path.dirname(target), { recursive: true });
  const args = ['-quiet', '-q', '92', '-alpha_q', '100', '-metadata', 'none'];
  if (width) args.push('-resize', String(width), '0');
  const result = spawnSync('cwebp', [...args, source, '-o', target], { encoding: 'utf8' });
  if (result.status !== 0) throw new Error(`Image export failed: ${source}\n${result.stderr}`);
}
fs.copyFileSync(license, path.join(output, 'Apple-Design-Resources-License.rtf'));
console.log(`Exported ${jobs.length} real product images; no capture content was added or composited.`);
