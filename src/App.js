import goods from "./data";
import Table from "./components/Table";
import Header from "./components/Header";
import {useState} from "react";
import EditForm from "./components/EditForm";
import SearchForm from "./components/SearchForm";

function App() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  function handleSelectedItem(item) {
    setSelectedItem((cur) =>
      (cur?.code === item.code ? null : item));
  }

  function handleSetData(item) {
    setData((data) => [...data, item]);
  }

  function handleRemoveItem(id) {
    setData((data) => data.filter(item => item.code !== id));
  }

  function handleSearchItem(keyword) {
    setData(keyword !== ""
      ? (data) =>
          (data.slice().filter(item =>
            item.code.includes(keyword) || item.name.includes(keyword))
          )
      : data
    );
  }

  function handleEditItem(code, name, quantity) {
    setData((data) =>
      data.map((item) =>
        item.code === selectedItem.code
          ? {
              ...item,
              code: code,
              name: name,
              quantity: quantity,
              inStock: quantity > 0 && true,
            }
          : item
      )
    )
    setSelectedItem(null);
  }

  return (
    <div className="main">
      <Header handleSetData={handleSetData} />
      {data.length > 0 ? <><SearchForm onSearch={handleSearchItem} />
      <Table
        items={data}
        onRemoveItem={handleRemoveItem}
        onSelectItem={handleSelectedItem}
        selectedItem={selectedItem}
      /></> : <p>No items found</p>}
      {selectedItem && <EditForm item={selectedItem} onEdit={handleEditItem} />}
    </div>
  );
}

export default App;
