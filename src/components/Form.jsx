import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export function Form({ addItem }) {
  const [newItemName, setNewItemName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!newItemName) {
      toast.error("Please enter an item");
      return;
    }
    addItem(newItemName);
    setNewItemName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          id="item"
          name="item"
          onChange={e => setNewItemName(e.target.value)}
          value={newItemName}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
}
