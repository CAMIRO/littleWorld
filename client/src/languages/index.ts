import ch from "./ch";
import en from "./en";

type GenericObject = { [key: string]: any };

export const dictionaryList: GenericObject = {
  ch,
  en,
};

export const languageOptions: Array<GenericObject> = [
  { id: "ch", text: "中文" },
  { id: "en", text: "English" },
];
