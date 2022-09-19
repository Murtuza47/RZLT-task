import React from "react";
import ErrorIcon from "../../assets/error.json";
import Lottie from "lottie-react";
import styles from "./Error.module.scss";

export const Error = () => (
  <div data-testid={"Error"} className={styles.container}>
    <Lottie height={100} width={100} animationData={ErrorIcon} />
    <h1>Error !</h1>
  </div>
);
