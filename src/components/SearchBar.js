import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit("asdf");
  };

  const handleChange = (event) => {
    setTerm(event.target.value.replace(/[a-z/, '']/, ""));
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        Confirm your search: {term}
        <br />
        <input value={term} onChange={handleChange} />
        <br />
        {term.length < 3 && "Term must be longer"}
      </form>
    </div>
  );
}

export default SearchBar;
