import styles from "./Item.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Item = ({ foodItem, bought, btnClicked, handleBuyButton }) => {
  return (
    <li
      className={`${styles["mi-item"]} list-group-item  ${bought && "active"}`}
    >
      <span className={styles["mi-span"]}>{foodItem}</span>
      <button
        className={`${styles.btn} btn btn-primary`}
        onClick={() => {
          handleBuyButton(foodItem);
          btnClicked(foodItem);
        }}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
