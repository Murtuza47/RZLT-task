import { HistoryItems } from "../components/HistoryItems"
import { IHistoryPage } from "../interface"
import { useNavigate } from "react-router-dom"

export const HistoryPage = ({ searchHistory }: IHistoryPage) => {
  const historyItems = searchHistory.sort((x, y) => {
    return y.searchedAt - x.searchedAt;
  })

  const navigate = useNavigate()

  return (
    <HistoryItems searchHistory={historyItems} navigateTo={navigate} />
  )
}