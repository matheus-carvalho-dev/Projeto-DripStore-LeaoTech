import Form from "react-bootstrap/Form";
import Icon from "../Icons/Icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './SearchBar.module.scss'
function SearchBar() {
  const [inputValue,setInputValue] = useState('')
  const navigate = useNavigate()
  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        if(inputValue.trim() === '')return;
        navigate(`/search?q=${encodeURIComponent(inputValue)}`)
      }}
      className="d-flex position-relative w-100"
    >
      <Form.Control
        type="search"
        value={inputValue}
        onChange={(event)=>setInputValue(event.target.value)}
        placeholder="Pesquisar produto..."
        className={`border-0 bg-light-gray-3 py-3 pe-5 ${styles.Input}`}
        aria-label="Search"
      />
      <button
        type="submit"
        className={`position-absolute border-0 bg-transparent ${styles.button}`}
      >
        <Icon
          name="search"
          size="22px"
          attributes={{
            stroke: "#8F8F8F",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fill: "none",
          }}
        />
      </button>
    </Form>
  );
}
export default SearchBar;
