import React from 'react';

class Navbar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
        
                <div class="col-sm-3 sidenav">
      <h4>oding is the new knitting</h4>
      <ul class="nav nav-pills nav-stacked">
        <li class="active"><a href="#section1">Home</a></li>
        <li><a href="#section2">Articles</a></li>
        <li><a href="#section3">Tips</a></li>
        <li><a href="#section3">Typo or hypo?</a></li>
      </ul><br/>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search Blog.."/>
        <span class="input-group-btn">
          <button class="btn btn-default" type="button">
            <span class="glyphicon glyphicon-search"></span>
          </button>
        </span>
      </div>
    </div>
            
        );
    }
}

export default Navbar ;