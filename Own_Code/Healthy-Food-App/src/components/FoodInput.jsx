import styles from "./FoodInput.module.css";
const FoodInput = ({handleKeyDown}) => {
  return (
    <input
      type="text"
      className={styles.fooin}
      placeholder="Enter the Food here"
      onKeyDown={handleKeyDown}
    />
  );
};

export default FoodInput;
