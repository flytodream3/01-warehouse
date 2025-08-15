import goods from "./data";
import Table from "./components/Table";
import Header from "./components/Header";
import {useState} from "react";
import EditForm from "./components/EditForm";

function App() {
  const [data, setData] = useState(goods);
  const [selectedItem, setSelectedItem] = useState(null);

  function handleSelectedItem(item) {
    setSelectedItem((cur) =>
      (cur?.code === item.code ? null : item));
  }

  function handleSetData(item) {
    setData((data) => [...data, item]);
  }

  function handleRemoveItem(id) {
    setData(
      (data) =>
        data.filter(item => item.code !== id)
    );
  }

  function handleEditItem(c, n, quan) {
    setData((data) =>
      data.map((item) =>
        item.code === selectedItem.code
        ? {
            ...item,
            code: c,
            name: n,
            quantity: quan,
            inStock: (quan > 0 && true),
          }
        : item
      )
    )
    setSelectedItem(null)
  }

  return (
    <div className="main">
      <Header
        setData={setData}
        handleSetData={handleSetData}
      />
      {data.length > 0 &&
        <Table
        items={data}
        onRemoveItem={handleRemoveItem}
        onSelectItem={handleSelectedItem}
        selectedItem={selectedItem}
      />}
      {selectedItem
        && <EditForm item={selectedItem} onEditItem={handleEditItem}/>
      }
    </div>
  );
}

export default App;
