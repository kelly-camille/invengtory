import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";

function AddItemForm(props) {

  function handleAddItemFormSubmission(event) {
  event.preventDefault();
  props.onAddItemCreation({
  name: event.target.name.value,
  origin: event.target.origin.value,
  price: event.target.price.value,
  roast: event.target.roast.value,
  inventory: event.target.roast.value,
  id: v4()
  });
}
return (
  <React.Fragment>
    <ReusableForm
    formSubmissionHandler={handleAddItemFormSubmission} buttonText="Add" />
  </React.Fragment>
  );
}

AddItemForm.PropTypes = {
  onAddItemCreation: PropTypes.func
};

export default AddItemForm;