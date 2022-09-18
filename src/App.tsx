import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { searchResult } from "./actions/SearchActions";
import { Navbar } from "./components/Navbar/Navbar";
import { HistoryPage, HomePage, SearchPage } from "./pages";
import "./styles.scss";

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<{ [x: string]: string }[]>([]);
  const [pagination, setPagination] = useState<number>(1);
  const [currrentListNumber, setCurrrentListNumber] = useState<number>(0);
  const [sortValue, setSortValue] = useState<boolean>(false);
  const [isSubmit, setIsSubmit] = useState<boolean>(false)
  const [searchText, setSearchText] = useState<string>("");
  const [searchHistory, setSearchHistory] = useState<{ name: string, searchedAt: number }[]>([]);

  const searchUser = (text: string) => {
    setIsLoading(true);
    if (text) setSearchHistory(prevState => [...prevState, { name: text, searchedAt: new Date().getTime() }])
    searchResult(text)
      .then((data) => {
        setPagination(1);
        setIsLoading(false);
        setIsError(false);
        setData(data);
      })
      .catch((e) => {
        setPagination(1);
        setIsLoading(false);
        setIsError(true);
        setData([]);
      });
  };

  const changeSortValue = () => setSortValue(!sortValue);

  const onChangeInput = (search: string) => setSearchText(search);

  const setPaginateNumer = (integer: number) => {
    setPagination(integer);
    setCurrrentListNumber(integer === 1 ? 0 : Math.abs(integer - 1) * 8);
  };
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <HomePage
              sortValue={sortValue}
              changeSortValue={changeSortValue}
              setPaginateNumer={setPaginateNumer}
              pagination={pagination}
              isLoading={isLoading}
              isError={isError}
              data={data}
              currrentListNumber={currrentListNumber}
              searchUser={searchUser}
              onChangeInput={onChangeInput}
            />}
        />
        <Route
          path='/search'
          element={
            <SearchPage
              sortValue={sortValue}
              changeSortValue={changeSortValue}
              setPaginateNumer={setPaginateNumer}
              pagination={pagination}
              isLoading={isLoading}
              isError={isError}
              data={data}
              currrentListNumber={currrentListNumber}
              searchUser={searchUser}
              onChangeInput={onChangeInput}
              isSubmit={isSubmit}
              setIsSubmit={setIsSubmit}
              searchText={searchText}
            />} />
        <Route
          path='/history'
          element={
            <HistoryPage
              searchHistory={searchHistory}
            />}
        />
      </Routes>
    </Router>
  );
}

export default App;
