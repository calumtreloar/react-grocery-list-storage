import SingleItem from "./SingleItem";

const Item = ({ items, removeItem, editItem }) => {
  return (
    <div className="items">
      {items.map(item => (
        <SingleItem key={item.id} {...item} removeItem={removeItem} editItem={editItem} />
      ))}
    </div>
  );
};

export default Item;
