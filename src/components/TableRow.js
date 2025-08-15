import {useState} from "react";
import Button from "./Button";

export default function TableRow({item, onRemoveItem, onSelectItem, selectedItem}) {
  const isSelected = selectedItem?.code === item.code;

  return (
    <tr className={selectedItem?.code === item.code ? "active" : ""}>
      <td>{item.code}</td>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td className="center">{item.inStock ? "✅" : "🚫"}</td>
      <td>
        <Button className="edit" onClick={() => onSelectItem(item)}>
          {selectedItem?.code === item.code ? "Close" : "Edit"}
        </Button>
        <Button className="delete" onClick={() => onRemoveItem(item.code)}>Remove</Button>
      </td>
    </tr>
  )
}