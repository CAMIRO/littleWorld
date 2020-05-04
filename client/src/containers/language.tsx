import React, { useState, createContext, useContext } from "react";

import { languageOptions, dictionaryList } from "../languages";
type GenericObject = { [key: string]: any };
// create the language context with default selected language
export const LanguageContext = createContext({
  language: languageOptions[0],
  dictionary: dictionaryList[languageOptions[0].id],
});

// it provides the language context to app
export const LanguageProvider: React.FC<{}> = ({ children }) => {
  const languageContext = useContext(LanguageContext);
  const [language, setLanguage] = useState(languageContext.language);
  const [dictionary, setDictionary] = useState(languageContext.dictionary);

  const provider = {
    language,
    dictionary,
    setLanguage: (selectedLanguage: GenericObject) => {
      setLanguage(selectedLanguage);
      setDictionary(dictionaryList[selectedLanguage.id]);
    },
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
};

// get text according to id & current language
export const Text = ({ tid }: GenericObject) => {
  const languageContext = useContext(LanguageContext);

  return languageContext.dictionary[tid];
};
