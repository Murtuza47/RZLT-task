import { IResult } from "../../interface";
import { Error } from "../Error";
import { Spinner } from "../Spinner";
import { User } from "../Users";
import styles from "./Result.module.scss";

export const Result = ({
  isLoading,
  isError,
  data,
  pagination,
  setPaginateNumer,
  currrentListNumber,
  changeSortValue,
  sortValue,
}: IResult) => (
  <div>
    <div data-testid={"Result"} className={styles.container}>
      {isLoading ? (
        <div data-testid={"loading"}>
          <Spinner />
        </div>
      )
        : isError ? (
          <Error />
        )
          : data?.length > 0 ? (
            <User
              sortValue={sortValue}
              changeSortValue={changeSortValue}
              setPaginateNumer={setPaginateNumer}
              pagination={pagination}
              data={data}
              currrentListNumber={currrentListNumber}
            />
          )
            : (
              <h1>Oops! no data</h1>
            )}
    </div>
  </div >
)