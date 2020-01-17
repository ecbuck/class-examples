import React from 'react';

class Article extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div >
                Title: { this.props.data.title }
                Bodu: { this.props.data.body }
                Author: { this.props.data.author }
            </div>
        );
    }
}

export default Article ;