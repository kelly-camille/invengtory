import React from 'react';
import AddItemForm from './AddItemForm'
import AddStockForm from './AddStockForm'
import InventoryList from './InventoryList'
import ItemDetail from './ItemDetail'

class Control extends React.Component {
  constructor(props){
  super(props);
  this.state={
    inventoryList: [],
    selectedItem: null,
    editing: false
  };
  this.handleClick = this.handleClick.bind(this);
}

handleClick = () => {
    
  if (this.state.selectedItem != null) {
    this.setState({
      formVisibleOnPage: false,
      selectedTicket: null,
      editing: false
    });

  }
}
}
