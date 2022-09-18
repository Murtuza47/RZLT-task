export interface IUser {
  data: { [x: string]: string }[];
  pagination: number;
  setPaginateNumer: (integer: number) => void;
  currrentListNumber: number;
  changeSortValue: () => void;
  sortValue: boolean;
}