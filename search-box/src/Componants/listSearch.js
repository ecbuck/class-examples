  
import React from 'react';

import List from './List';
import Search from './Search';

class ListSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            originalList: ['Apples', 'Bananas', 'Blueberries', 'Oranges', 'Grapes', 'Watermelon'],
            list: [],
            sortOrder: '',
        };

        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearchEnterKeyPress = this.handleSearchEnterKeyPress.bind(this);
        this.handleSortOrderChange = this.handleSortOrderChange.bind(this);
    }
    // add shallow clone
    componentDidMount() {
        const list = [...this.state.originalList];

        this.setState({
            list: list
        });
    }

    handleSearchEnterKeyPress(event) {
        if(event.key === 'Enter') {
            const value = event.target.value;

            this.handleSearchChange(value);
        }
    }

    handleSearchChange(value) {
        const newList = this.state.originalList.filter((item) => {
            const itemLowercase = item.toLowerCase();
            const valueLowercase = value.toLowerCase();

            // debugger;

            if(itemLowercase.includes(valueLowercase)) {
                return true;
            }
        });

        this.setState({
            list: newList
        });
    }

    handleSortOrderChange(event) {
        const value = event.target.value;

        const originalListClone = [...this.state.originalList];
        
        if(value !== '') {
            originalListClone.sort();
        }

        if(value === 'dsc') {
            originalListClone.reverse();
        }

        this.setState({
            list: originalListClone,
            sortOrder: value,
        });
    }

    render() {
        return (
            <div>
                <Search 
                    placeholder="Fruit search..." 
                    disabled={ true }
                    handleChange={ this.handleSearchChange }
                    handleKeyPress={ this.handleSearchEnterKeyPress }
                />
                <select 
                    value={ this.state.sortOrder } 
                    onChange={ (e) => this.handleSortOrderChange(e)}
                >
                    <option value=""></option>
                    <option value="asc">ASC</option>
                    <option value="dsc">DSC</option>
                </select>
                <List items={ this.state.list } />
            </div>
        );
    }
}

export default ListSearch;