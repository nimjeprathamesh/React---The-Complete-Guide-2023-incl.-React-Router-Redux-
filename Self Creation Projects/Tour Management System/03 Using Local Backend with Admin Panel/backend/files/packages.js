import { readFile, writeFile } from 'node:fs/promises';

async function getStoredPackages() {
  const rawFileContent = await readFile('./data/packages.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedPackages = data ?? [];
  return storedPackages;
}

function storePackages(packages) {
  return writeFile('./data/packages.json', JSON.stringify(packages || []));
}

export { getStoredPackages, storePackages };
