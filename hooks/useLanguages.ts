import React, { useState } from 'react';
import { setMultiLanguage, setSingleLanguage } from '../redux/modalSlice';
import { useAppDispatch, useAppSelector } from './useRedux';

interface ILanguages {
  code: string;
  name: string;
}

const languages: ILanguages[] = [
  { code: 'af', name: 'Afrikaans' },
  { code: 'ar', name: 'Arabic' },
  { code: 'az', name: 'Azerbaijani' },
  { code: 'bg', name: 'Bulgarian' },
  { code: 'zh', name: 'Chinese' },
  { code: 'cs', name: 'Czech' },
  { code: 'da', name: 'Danish' },
  { code: 'dz', name: 'Dzongkha' },
  { code: 'en', name: 'English' },
  { code: 'et', name: 'Estonian' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'el', name: 'Greek (Modern)' },
  { code: 'hi', name: 'Hindi' },
  { code: 'hu', name: 'Hungarian' },
  { code: 'it', name: 'Italian' },
  { code: 'ja', name: 'Japanese' },
  { code: 'mn', name: 'Mongolian' },
  { code: 'pl', name: 'Polish' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'ru', name: 'Russian' },
  { code: 'es', name: 'Spanish, Castilian' },
  { code: 'sv', name: 'Swedish' },
  { code: 'tr', name: 'Turkish' },
  { code: 'tk', name: 'Turkmen' },
  { code: 'ur', name: 'Urdu' },
];

const useLanguages = () => {
  const [multiLanguages, setMultiLanguages] = useState();
  const [language, setLanguage] = useState();
  const dispatch = useAppDispatch();
  const modal = useAppSelector((state) => state.modal);
  const handleMulti = (e: any) => {
    const multiLanguageValue = e;
    dispatch(setMultiLanguage(multiLanguageValue));
    // setMultiLanguages(multiLanguageValue);
  };

  console.log(modal);

  const handleSingle = (e: string) => {
    const singleLanguageValue = e;
    dispatch(setSingleLanguage(singleLanguageValue));
    console.log(language);
  };

  const allLanguages = languages.map((lang) => {
    return lang.name;
  });
  return { allLanguages, handleMulti, handleSingle };
};

export default useLanguages;
