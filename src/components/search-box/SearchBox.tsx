import * as React from 'react';
import './SearchBox.css';

interface SearchBoxProps {
    searchFieldPlaceholder: string,
    onSearchTextChange: (searchText: string) => void
}

interface SearchBoxState {
    searchText: string
}

export default class SearchBox extends React.Component<SearchBoxProps, SearchBoxState> {
    render() {
        return (
            <div>
                <input type="search"
                       className="search"
                       placeholder={this.props.searchFieldPlaceholder}
                       onChange={e => this.props.onSearchTextChange(e.target.value)} />
            </div>
        )
    }
}
