import { register } from 'ts-node';
import { pathToFileURL } from 'url';

register({
  project: './tsconfig.api.json',
  transpileOnly: true,
});

import(pathToFileURL('./api/server.ts').href);
