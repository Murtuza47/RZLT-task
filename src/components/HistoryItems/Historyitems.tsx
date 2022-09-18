import { format } from "date-fns"
import { IHistoryItems } from "../../interface"
import styles from "./HistoryItems.module.scss"

export const HistoryItems = ({ searchHistory, navigateTo }: IHistoryItems) => (
  <div className={styles.container}>
    <h2>History</h2>
    {searchHistory.map(({ name, searchedAt }) => (
      <ul className={styles.historyItem} onClick={() => navigateTo(`/search?text=${name}`)}>
        <li>
          <div className={styles.flex}>
            <p>{name}</p>
            <p>{format(searchedAt, 'yyyy-MM-dd')}</p>
          </div>
        </li>
      </ul>
    ))}
    {searchHistory.length === 0 && (
      <div className={styles.noHistory}>
        <p>No history found!</p>
      </div>
    )}
  </div>
)