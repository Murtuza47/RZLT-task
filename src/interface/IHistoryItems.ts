import { IHistoryPage } from "./IHistoryPage";

export interface IHistoryItems extends IHistoryPage {
  navigateTo: (path: string) => void;
}