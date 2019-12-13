import React from 'react';
import Die from './Die';
import { throwStatement } from '@babel/types';
import { linkSync } from 'fs';

class DieBag extends React.Component {
    constructor(props) {
      super(props);
  
      this.state ={
         list: [ 6,20,100,10,88],
         newInputSides: ''
      };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleNewDie = this.handleNewDie.bind(this);
   }  

   handleInputChange(event){ 
      const sides = event.target.value; 

      this.setState({ newInputSides: sides})
   }

   handleNewDie(){
      const sides = this.state.newInputSides;

      const newList = this.state.list.concat(sides);

     this.setState({ list: newList, newInputSides: ''});
   }

   renderDiceList() {
      return this.state.list.map(d =>(
         <Die sides = {d}/>
      ))
   }

   render(){
      return( 
         <div>
            <input  class="input-box" type="number" value={ this.state.newInputSides} onChange={ this.handleInputChange } />
            <button class="button" onClick= { this.handleNewDie}>Add New Die</button>
            { this.renderDiceList()}
         </div>
      )
   }
}
export default DieBag 