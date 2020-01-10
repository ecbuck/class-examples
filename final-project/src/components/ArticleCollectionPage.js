import React from 'react';
import ArticleSearch from './ArticleSearch';
import ArticleList from './ArticleList';


class ArticleCollectionPage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <ArticleSearch />
                <ArticleList />
            </div>
        );
    }
}

export default ArticleCollectionPage ;
