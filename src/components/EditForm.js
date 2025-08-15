import Button from "./Button";
import {useState} from "react";

  const [code, setCode] = useState(item.code);
  const [name, setName] = useState(item.name);
  const [quantity, setQuantity] = useState(item.quantity);

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <label>Code</label>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Quantity</label>
      <input
        type="text"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <Button className="edit">Save</Button>
    </form>
  )
}