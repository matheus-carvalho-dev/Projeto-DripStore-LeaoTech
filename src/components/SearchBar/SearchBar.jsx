import Form from "react-bootstrap/Form";
import Icon from "../Icons/Icons";


function SearchBar() {
  return (
    <Form className="d-flex position-relative w-100">
      <Form.Control
        type="search"
        placeholder="Pesquisar produto..."
        className="border-0 bg-light-gray-3 py-3 pe-5"
        style={{
          outline: "none",
          boxShadow: "none",
          borderRadius: "8px",
        }}
        aria-label="Search"
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
        }}
        className="position-absolute border-0 bg-transparent"
        style={{
          right: "15px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
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
