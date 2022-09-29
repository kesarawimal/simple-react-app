import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="search-bar">
                <input placeholder="Search" onChange={event => this.props.onSearchItem(event.target.value)}/>
            </div>
        );
    }


}

export default SearchBar;