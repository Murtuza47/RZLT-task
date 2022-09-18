export interface IHomePage {
  isLoading: boolean;
  isError: boolean;
  data: { [x: string]: string }[];
  pagination: number;
  setPaginateNumer: (integer: number) => void;
  currrentListNumber: number;
  changeSortValue: () => void;
  sortValue: boolean;
  searchUser: (name: string) => void;
  onChangeInput: (name: string) => void;
}