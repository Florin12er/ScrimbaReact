import PropTypes from "prop-types";

export function ListComponent({ name, index }) {
  return (
    <>
      <li key={index}>
        <p>{name}</p>
      </li>
    </>
  );
}
ListComponent.propTypes = {
  name: PropTypes.string.isRequired, // Specifies that name prop is required and should be a string
  index: PropTypes.number.isRequired, // Specifies that index prop is required and should be a number
};


