import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import AddItemForm from "./AddItemForm";

function addStockForm (props) {
  const { item } = props;

  function handleAddStockFormSubmission(event) {
  event.preventDefault();
  props.onAddStock({  name: event.target.name.value,
    origin: event.target.origin.value,
    price: event.target.price.value,
    roast: event.target.roast.value,
    inventory: event.target.roast.value,
    id: item.id});
}

return (
  <React.Fragment>
    <ReusableForm
    formSubmissionHandler={handleAddStockFormSubmission}
    buttonText="add stock" />
  </React.Fragment>
);
}