import { Transform } from "stream";
import { pipeline } from "stream/promises";

const reverseString = (str) => str.split("").reverse().join("");
class MyTransformStream extends Transform {
  _transform(chunk, encoding, callback) {
    callback(null, reverseString(chunk.toString()));
  }
}

const transform = async () => {
  const transformStream = new MyTransformStream();

  await pipeline(process.stdin, transformStream, process.stdout);
};

await transform();
