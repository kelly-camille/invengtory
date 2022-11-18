import React from "react";
import PropTypes from "prop-types";

function Item (props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenItemClicked(props.id)}>
        <h3>{props.name} - {props.stock}</h3>
      </div>
    
    </React.Fragment>
  )
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
};

export default Item;