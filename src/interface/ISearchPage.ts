import { IHomePage } from "./IHomePage";

export interface ISearchPage extends IHomePage {
  onChangeInput: (name: string) => void;
  searchUser: (text: string) => void;
  isSubmit: boolean;
  setIsSubmit: (submit: boolean) => void;
  searchText: string;
}