import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="name"
          placeholder="Coffee Name" />
        <input
          type="text"
          name="string"
          placeholder="Origin" />
        <input
          type="number"
          name="price"
          placeholder="$" />
        <input
          type="string"
          name="roast"
          placeholder="Roast" />
        <input
          name="inventory"
          type="number"
          placeholder="inventory" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;