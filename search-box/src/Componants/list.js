  
import React from 'react';

class List extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.items.length > 0) {
            return (
                <ul>
                    {
                        this.props.items.map((item) => {
                            return <li key={item}>{ item }</li>
                        })
                    }
                </ul>
            );
        }
        else{
        // eslint-disable-next-line no-lone-blocks
        {
            return (<h4>No Matching Items!</h4>);
        }}
    }
}

export default List;