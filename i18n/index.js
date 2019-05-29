import I18n from 'react-native-i18n';
import en from './locale/en';

I18n.fallbacks = true;

I18n.translations = {
  en
};

export default function $t(key, params = {}) {
  return I18n.t(key, params);
}
