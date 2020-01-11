import React from 'react';

class Search extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input 
                    type="text"
                    disabled={ this.props.disabled ? 'disabled' : ''}
                    placeholder={ this.props.placeholder }
                    onKeyPress={ (e) => this.props.handleKeyPress(e)}
                    // onChange={ (e) => this.props.handleChange(e.target.value) }
                />
            </div>
        );
    }
}

export default Search;