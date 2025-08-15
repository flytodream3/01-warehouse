import {useState} from "react";
import Button from "./Button";

export function AddForm({handleAddSubmit}) {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleOnSubmit(e) {
    e.preventDefault();

    const newItem = {
      name,
      code,
      quantity,
      inStock: quantity > 0 ? true : false,
    }

    handleAddSubmit(newItem);
  }

  return (
    <form className="add-form" onSubmit={handleOnSubmit}>
      <label>Code:</label>
      <input
        type="text"
        value={code}
        onChange={(e) => (e.target.value !== "" ? setCode(e.target.value) : null)}
      />
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Quantity:</label>
      <input
        type="text"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <Button className="add">Add</Button>
    </form>
  )
}