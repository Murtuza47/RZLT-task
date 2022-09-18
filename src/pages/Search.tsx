import { useEffect } from "react";
import { Result } from "../components/Result";
import { Search } from "../components/Search";
import { ISearchPage } from "../interface";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export const SearchPage = ({
  isLoading,
  isError,
  data,
  pagination,
  setPaginateNumer,
  currrentListNumber,
  changeSortValue,
  sortValue,
  onChangeInput,
  searchUser,
  isSubmit,
  setIsSubmit,
  searchText
}: ISearchPage) => {
  const location = useLocation()
  const parsed = queryString.parse(location.search);
  useEffect(() => {
    if (parsed.text) {
      setIsSubmit(true)
      onChangeInput(parsed.text as string)
      searchUser(searchText)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return (() => {
      setIsSubmit(false)
    })
  }, [])

  return (
    <>
      <Search searchText={searchText} searchUser={searchUser} onChangeInput={onChangeInput} setIsSubmit={setIsSubmit} defaultValue={parsed.text as string || ''} />
      {isSubmit &&
        <Result
          sortValue={sortValue}
          changeSortValue={changeSortValue}
          setPaginateNumer={setPaginateNumer}
          pagination={pagination}
          isLoading={isLoading}
          isError={isError}
          data={data}
          currrentListNumber={currrentListNumber}
        />}
    </>
  )
}