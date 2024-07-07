import Item from "./Item";
const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          btnClicked={() => console.log(`${item} has been bought`)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
