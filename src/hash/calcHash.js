import crypto from 'crypto'
import { createReadStream } from 'fs'

const calculateHash = async () => {
  const FILE_PATH = "./files/fileToCalculateHashFor.txt";
  const fileUrl = new URL(FILE_PATH, import.meta.url);

  const hash = crypto.createHash('sha256');

  const fileStream = createReadStream(fileUrl);

  fileStream.on('data', chunk => hash.update(chunk));

  fileStream.on('end', () => {
    const fileHash = hash.digest('hex');
    console.log(`${fileHash}`);
  });

  fileStream.on('error', err => {
    console.error(`Error reading file: ${err.message}`);
  });
};

await calculateHash();
