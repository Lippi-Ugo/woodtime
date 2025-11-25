#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

// Ecrit public/countdown.json avec la date de fin.
// Priorité :
// 1) si la variable d'environnement COUNTDOWN_END est fournie -> l'utiliser
// 2) sinon, si le fichier existe déjà -> ne pas écraser (sauf FORCE_COUNTDOWN=1)
// 3) sinon -> créer avec now + 48h
const ms48h = 48 * 60 * 60 * 1000;

const outDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, 'countdown.json');

const force = process.env.FORCE_COUNTDOWN === '1';

// If COUNTDOWN_END provided (e.g., set in Netlify env), use it.
let end = null;
if (process.env.COUNTDOWN_END) {
	end = process.env.COUNTDOWN_END;
	console.log(`Using COUNTDOWN_END from env: ${end}`);
} else if (fs.existsSync(outPath) && !force) {
	console.log(`countdown.json already exists at ${outPath}; skipping creation (use FORCE_COUNTDOWN=1 to overwrite)`);
	process.exit(0);
} else {
	end = new Date(Date.now() + ms48h).toISOString();
	console.log(`No COUNTDOWN_END provided; generating end=${end}`);
}

if (end) {
	fs.writeFileSync(outPath, JSON.stringify({ end }, null, 2), 'utf-8');
	console.log(`Wrote countdown end=${end} to ${outPath}`);
}
