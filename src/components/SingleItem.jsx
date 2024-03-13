const SingleItem = ({ name, id, completed, removeItem, editItem }) => {
  return (
    <div className="single-item">
      <input type="checkbox" checked={completed} onChange={() => editItem(id)} />
      <p style={{ textTransform: "capitalize", textDecoration: completed ? "line-through" : "none" }}>{name}</p>
      <button type="button" className="btn remove-btn" onClick={() => removeItem(id)}>
        delete
      </button>
    </div>
  );
};

export default SingleItem;
