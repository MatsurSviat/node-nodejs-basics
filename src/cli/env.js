const PREFIX = "RSS_";

const parseEnv = () => {

  const envVariables = process.env;

  const rssVariables = Object.keys(envVariables)
    .filter(key => key.startsWith(PREFIX))
    .map(key => `${key}=${envVariables[key]}`)
    .join('; ');

  console.log(rssVariables);
};

parseEnv();
