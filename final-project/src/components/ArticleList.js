import React from 'react';
import Article from './Article';

class ArticleList extends React.Component{
    constructor(props){
        super(props);
    }

    renderArticleList() {
        return this.props.list.map((item) => {
            return <Article data={ item } key={ item.title }/>
        });
    }

    render(){
        return (
            <div className="article-list-container">
                { this.renderArticleList() }
            </div>
        );
    }
}

export default ArticleList ;