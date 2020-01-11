import React from 'react';
import ArticleList from './ArticleList';


class ArticleSearch extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <input type="text" class="box"></input>
                <input type="text" class="box"></input>
                <input type="text" class="box"></input>
                <input type="text" class="box"></input>
                
            </div>
        );
    }
}

export default ArticleSearch ;