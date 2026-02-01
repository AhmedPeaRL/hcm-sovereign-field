import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

export async function autoLoadDirectory(dirUrl, field) {
  const dirPath = path.dirname(dirUrl.pathname);
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    if (!file.endsWith('.js')) continue;

    try {
      const module = await import(pathToFileURL(path.join(dirPath, file)));
      if (typeof module.default === 'function') {
        module.default(field);
        field.modules.push(file);
      }
    } catch {
      // misinterpretation is allowed
    }
  }
}
