import goods from "./data";
import Table from "./components/Table";
import Header from "./components/Header";
import {useState} from "react";
import EditForm from "./components/EditForm";

function App() {
  const [data, setData] = useState(goods);
  const [showEdit, setShowEdit] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  function handleSelectedItem(item) {
    setSelectedItem((cur) =>
      (cur?.code === item.code ? null : item));
    setShowEdit(true)
  }

  function handleSetData(item) {
    setData((data) => [...data, item]);
  }

  function handleRemoveItem(id) {
    setData((data) => data.filter(item => item.code !== id));
  }

  return (
    <div className="main">
      <Header setData={setData} handleSetData={handleSetData} />
      <Table
        items={data}
        onRemoveItem={handleRemoveItem}
        onSelectItem={handleSelectedItem}
        selectedItem={selectedItem}
      />
      {selectedItem && <EditForm item={selectedItem}/>}
    </div>
  );
}

export default App;
