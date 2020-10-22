import { default as config } from './configs';
import { default as _switch } from './command/Switch';
import { default as list } from './command/List';

export { i18n, initI18nLocales } from './lib/i18n';

export default {
  config,
  command: {
    switch: _switch,
    list,
    default: _switch, // 默认执行的命令
  },
};
