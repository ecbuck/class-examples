import React from 'react';
import Article from './Article';


class ArticleList extends React.Component{
    constructor(props){
        super(props);
    }

    renderArticleList() {
        return this.props.list.map((item, index) => {
            return <Article data={ item } key={ index }/>
        });
    }

    render(){
        return (
            <div className="article-list-container">
                { this.props.list.length > 0 ? this.renderArticleList() : ''}
            </div>
        );
    }
}

export default ArticleList ;