import { IUser } from "../../interface/IUser";
import styles from "./Users.module.scss";

export const User = ({
  data,
  pagination,
  setPaginateNumer,
  currrentListNumber,
  changeSortValue,
  sortValue,
}: IUser) => {
  const paginateNumbers = data?.length / 9;
  const paginateNumbersArray = [];

  for (let index = 0; index <= paginateNumbers; index++) {
    paginateNumbersArray.push(index + 1);
  }

  return (
    <div data-testid={"User"} className={styles.container}>
      <div className={styles.table}>
        <div className={styles.header}>
          <p className={styles.pointer} onClick={changeSortValue}>
            Name{" "}
            {sortValue ? (
              <i className="fas fa-sort-amount-up" />
            ) : (
              <i className="fas fa-sort-amount-down" />
            )}
          </p>
        </div>
        <div className={styles.header}>
          <p>Login</p>
        </div>
        <div className={styles.header}>
          <p>Avatar</p>
        </div>
      </div>
      {data
        ?.sort((a, b) => {
          if (!sortValue) {
            return a.login.localeCompare(b.login);
          }

          return b.login.localeCompare(a.login);
        })
        .slice(currrentListNumber, 8 * pagination)
        .map((item, i) => (
          <div key={i} className={styles.table}>
            <div className={styles.tableItem}>
              <p>{item?.login}</p>
            </div>
            <div className={styles.tableItem}>
              <p>{item.type}</p>
            </div>
            <div className={styles.tableItemLast}>
              <img
                alt={item.login}
                className={styles.image}
                src={item.avatar_url}
              />
            </div>
          </div>
        ))}

      <div className={styles.paginateContainer}>
        {paginateNumbersArray?.map((item, i) => (
          <p
            onClick={() => setPaginateNumer(item)}
            className={item === pagination ? styles.paginationText : ""}
            key={i}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}