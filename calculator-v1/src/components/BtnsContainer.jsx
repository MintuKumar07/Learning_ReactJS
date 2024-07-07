import styles from "./BtnsContainer.module.css";
const BtnsContainer = () => {
  const btnsNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {btnsNames.map((btnsNames) => (
        <button className={styles.button}>{btnsNames}</button>
      ))}
    </div>
  );
};
export default BtnsContainer;
