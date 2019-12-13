import React from 'react'
import './Product.css';

class Product extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          
      }
    }

    render(){
        return (
        <div className="product-container">
            <h1>{ this.props.product.name }</h1>
        </div>)
    };
}
export default Product