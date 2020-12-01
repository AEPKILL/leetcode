import { readdirSync, statSync } from 'fs';
import { parse, resolve } from 'path';

export default function getEntry(root: string) {
  const files = readdirSync(root);
  const entry = new Map<string, string>();
  for (const file of files) {
    const fullPath = resolve(root, file);
    const info = parse(fullPath);
    if (statSync(fullPath).isFile() && info.ext === '.ts') {
      entry.set(info.name, fullPath);
    }
  }
  return entry;
}
