import {useState} from "react";
import TableRow from "./TableRow";

export default function Table({items, onRemoveItem, onSelectItem, selectedItem}) {
  const [sortBy, setSortBy] = useState("code_asc");

  let sortedItems;

  if (sortBy === "code_asc") {
    sortedItems = items.slice().sort((a, b) => a.code - b.code);
  }

  if (sortBy === "code_desc") {
    sortedItems = items.slice().sort((a, b) => b.code - a.code);
  }

  if (sortBy === "name_asc") {
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortBy === "name_desc") {
    sortedItems = items.slice().sort((a, b) => b.name.localeCompare(a.name));
  }

  if (sortBy === "quantity_asc") {
    sortedItems = items.slice().sort((a, b) => a.quantity - b.quantity);
  }

  if (sortBy === "quantity_desc") {
    sortedItems = items.slice().sort((a, b) => b.quantity - a.quantity);
  }


  return (
    <table>
      <thead>
        <tr>
          <th
            onClick={() => setSortBy(sortBy === "code_asc" ? "code_desc" : "code_asc")}
            style={{cursor: 'pointer'}}
          >
            Code
          </th>
          <th
            onClick={() => setSortBy(sortBy === "name_asc" ? "name_desc" : "name_asc")}
            style={{cursor: 'pointer'}}
          >
            Name
          </th>
          <th
            onClick={() => setSortBy(sortBy === "quantity_asc" ? "quantity_desc" : "quantity_asc")}
            style={{cursor: 'pointer'}}
          >
            Quantity
          </th>
          <th className="center">In Stock</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {sortedItems.map((item) => (
        <TableRow
          item={item}
          key={item.code}
          onRemoveItem={onRemoveItem}
          onSelectItem={onSelectItem}
          selectedItem={selectedItem}
        />
      ))}
      </tbody>
    </table>
  )
}