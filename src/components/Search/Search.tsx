import { ISearch } from "../../interface";
import styles from "./Search.module.scss";

export const Search = ({ onChangeInput, searchUser, setIsSubmit, defaultValue, searchText }: ISearch) => (
  <div data-testid={"Search"} className={styles.container}>
    <div className={styles.searchContainer}>
      <input
        onChange={(e) => onChangeInput(e.target.value)}
        placeholder={"Search"}
        defaultValue={defaultValue}
      />
    </div>

    <button
      onClick={() => {
        setIsSubmit(true)
        searchUser(searchText)
      }}
      className={styles.button}>
      <p>Search</p>
    </button>
  </div>
)