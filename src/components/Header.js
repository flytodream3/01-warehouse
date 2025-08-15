import Button from "./Button";
import {AddForm} from "./AddForm";
import {useState} from "react";

export default function Header({handleSetData}) {
  const [showForm, setShowForm] = useState(false);

  function handleShowForm() {
    setShowForm((show) => !show);
  }

  function handleAddSubmit(item) {

    handleSetData(item);

    setShowForm(false);
  }

  return (
    <div className="container right">
      <Button className="add padding-16" onClick={handleShowForm}>
        {showForm ? "Close" : "Add item"}
      </Button>
      {showForm && <AddForm handleAddSubmit={handleAddSubmit} />}
    </div>
  )
}