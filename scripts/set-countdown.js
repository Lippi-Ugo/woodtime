#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

// Ecrit public/countdown.json avec la date de fin = maintenant + 48h
const ms48h = 48 * 60 * 60 * 1000;
const end = new Date(Date.now() + ms48h).toISOString();

const outDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, 'countdown.json');

fs.writeFileSync(outPath, JSON.stringify({ end }, null, 2), 'utf-8');
console.log(`Wrote countdown end=${end} to ${outPath}`);
