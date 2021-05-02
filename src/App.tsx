import * as React from 'react';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';
import './App.css';

interface Monster {
  id: number,
  name: string,
  email: string
}

interface AppState {
  monsters: Monster[],
  searchText: string
}

export default class App extends React.Component<{}, AppState> {
  state: AppState = {
    monsters: [],
    searchText: ""
  }

  onSearchTextChange = (newSearchText: string)  => {
    this.setState({searchText: newSearchText});
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(responseJson => {
      this.setState({monsters: responseJson});
    });
  }
  
  render() {
    const filteredMonsters = this.state.searchText ?
                                this.state.monsters.filter(monster => monster.name.toLowerCase().includes(this.state.searchText.toLowerCase())) :
                                this.state.monsters;
    return (
      <div className="App">
        <h1>Monster rolodex</h1>
        <SearchBox searchFieldPlaceholder="search monsters" onSearchTextChange={this.onSearchTextChange} />
        <CardList cards={filteredMonsters} />
      </div>
    )
  }
}
