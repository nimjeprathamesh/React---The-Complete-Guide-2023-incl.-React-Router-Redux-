import { readFile, writeFile } from 'node:fs/promises';

async function getStoredDestinations() {
  const rawFileContent = await readFile('./data/destinations.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedDestinations = data ?? [];
  return storedDestinations;
}

function storeDestinations(destinations) {
  return writeFile('./data/destinations.json', JSON.stringify(destinations || []));
}

export { getStoredDestinations, storeDestinations };
