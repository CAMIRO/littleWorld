import tr from "./tr";
import en from "./en";

type GenericObject = { [key: string]: any };

export const dictionaryList: GenericObject = {
  tr,
  en,
};

export const languageOptions: Array<GenericObject> = [
  { id: "tr", text: "Turkce" },
  { id: "en", text: "English" },
];
