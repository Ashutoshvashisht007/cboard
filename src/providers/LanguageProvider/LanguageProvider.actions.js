import {
  CHANGE_LANG,
  START_FETCHING_LANGS,
  SET_LANGS,
  SET_DOWNLOADING_LANG
} from './LanguageProvider.constants';
import { updateUserData } from '../../components/App/App.actions';

export function changeLang(lang) {
  updateUserData();
  return {
    type: CHANGE_LANG,
    lang
  };
}

export function startFetchingLangs() {
  return {
    type: START_FETCHING_LANGS
  };
}

export function setLangs(langs, localLangs) {
  return {
    type: SET_LANGS,
    langs,
    localLangs
  };
}

export function setDownloadingLang(downloadingLangData) {
  return {
    type: SET_DOWNLOADING_LANG,
    downloadingLangData
  };
}
