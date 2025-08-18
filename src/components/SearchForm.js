import {useState} from "react";
import Button from "./Button";

export default function SearchForm({onSearch}) {
  const [keyword, setKeyword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(keyword);

  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
      />
      <Button>Search</Button>
    </form>
  )
}