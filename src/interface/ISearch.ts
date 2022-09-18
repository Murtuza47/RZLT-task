export interface ISearch {
  setIsSubmit: (submit: boolean) => void;
  onChangeInput: (name: string) => void;
  searchUser: (name: string) => void;
  defaultValue: string;
  searchText: string;
}