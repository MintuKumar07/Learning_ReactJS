import styles from "./FoodInput.module.css";
function FoodInput({ handleKeyDown }) {
  return (
    <input
      type="text"
      placeholder="Enter the food name here"
      className={styles.fooIn}
      onKeyDown={handleKeyDown}
    />
  );
}

export default FoodInput;
