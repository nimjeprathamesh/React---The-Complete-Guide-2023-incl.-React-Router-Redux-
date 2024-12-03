import { readFile, writeFile } from 'node:fs/promises';

async function getStoredFeedback() {
  const rawFileContent = await readFile('./data/contactInfo.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedFeedback = data ?? [];
  return storedFeedback;
}

function storeFeedback(feedback) {
  return writeFile('./data/contactInfo.json', JSON.stringify(feedback || []));
}

export { getStoredFeedback, storeFeedback };
