import styles from "./Item.module.css";
const Item = ({ foodItem, btnClicked }) => {
  return (
    <ul className="list-group ">
      <li className={`list-group-item ${styles.miList}`}>
        <span>{foodItem}</span>
        <button
          type="button"
          className={`btn btn-primary ${styles.miBtn}`}
          onClick={btnClicked}
        >
          Buy
        </button>
      </li>
    </ul>
  );
};

export default Item;
