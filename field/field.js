import config from '../sovereign.config.js';
import { createRhythmContext } from './rhythm-context.js';
import { autoLoadDirectory } from './auto-loader.js';

const field = {
  rhythm: createRhythmContext(config),
  modules: []
};

if (config.autoLoad) {
  await autoLoadDirectory(new URL('../adapters/', import.meta.url), field);
}

export default field;
