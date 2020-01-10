import React from 'react';
import ArticleList from './ArticleList';

class ArticleSearch extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <ArticleList />
            </div>
        );
    }
}

export default ArticleSearch ;