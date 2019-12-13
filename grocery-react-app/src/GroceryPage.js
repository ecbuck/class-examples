import React from 'react'

import Product from './Product'

class GroceryPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          products: []
      }
    }

    async componentDidMount(){
        // fetch to the API
        const url = 'https://grocery-api2019.herokuapp.com/api/products';

        const response = await fetch(url);
        const myJson = await response.json();

        
        this.setState({ products: myJson})
    }
    


    render(){

        return (
            <div>
                <ul>
                { this.state.products.map(product => {
                    return ( <Product key={ product._id } product={ product }/> );
                }) }
                </ul>
            </div>
        )
        };

}
export default GroceryPage
