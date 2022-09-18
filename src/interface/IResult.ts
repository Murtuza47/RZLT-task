export interface IResult {
  isLoading: boolean;
  isError: boolean;
  data: { [x: string]: string }[];
  pagination: number;
  setPaginateNumer: (integer: number) => void;
  currrentListNumber: number;
  changeSortValue: () => void;
  sortValue: boolean;
}