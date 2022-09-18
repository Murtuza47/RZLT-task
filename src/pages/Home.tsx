import { useEffect } from "react";
import { Result } from "../components/Result";
import { IHomePage } from "../interface";

export const HomePage = ({
  isLoading,
  isError,
  data,
  pagination,
  setPaginateNumer,
  currrentListNumber,
  changeSortValue,
  sortValue,
  searchUser,
  onChangeInput
}: IHomePage) => {

  useEffect(() => {
    searchUser('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Result
      sortValue={sortValue}
      changeSortValue={changeSortValue}
      setPaginateNumer={setPaginateNumer}
      pagination={pagination}
      isLoading={isLoading}
      isError={isError}
      data={data}
      currrentListNumber={currrentListNumber}
    />
  )
}