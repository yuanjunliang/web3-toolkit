import log4js, { Configuration } from 'log4js';
const defaultConfig = {
  appenders: {
    file: { type: 'file', filename: 'logs/logs.log' },
    out: { type: 'stdout' },
  },
  categories: { default: { appenders: ['file', 'out'], level: 'error' } },
};

export function getLogger(config?: Configuration) {
  log4js.configure(Object.assign({}, defaultConfig, config));
  const logger = log4js.getLogger();
  logger.level = 'debug';
  return logger;
}
