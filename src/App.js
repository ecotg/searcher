import "./App.css";
import { Search } from "./components/search";
import { Scroll } from "./components/scroll";
import React, { Component } from "react";
const { search } = require("./utilities/google");

class App extends Component {

  async loadMore(pg) {
    if (this.state.hasMore) {
      const { items } = await search(this.state.currentQuery, pg);
      const currentResults = this.state.results && this.state.results.length ? this.state.results.concat(items) : items;
      this.setState({
        results: currentResults,
        page: pg,
        hasMore: this.state.resultCount > currentResults.length
      });
    }
  }

  async handleSearch(query) {
    const { items, count } = await search(query, this.state.page);
    this.setState({
      results: items,
      resultCount: count,
      renderResults: items && items.length,
      currentQuery: query,
      page: 0,
      hasMore: count > items.length
    });
  }

  handleTxtChange(e) {
    this.setState({currentQuery: e.target.value});
  }

  constructor(props) {
    super(props);
    this.state = {
      results: [],
      resultCount: 0,
      renderResults: false,
      currentQuery: null,
      page: 0,
      loading: false,
      hasMore: false
    };
  }

  render() {
    return <div className="App">
        <div className="search-box">
          <Search handleSearch={this.handleSearch.bind(this)} handleTxtChange={this.handleTxtChange.bind(this)} query={this.state.currentQuery} />
        </div>
        <div>{this.state.renderResults
          ? (<Scroll initialLoad={false} pageStart={0} loadMore={this.loadMore.bind(this)}  hasMore={this.state.hasMore} results={this.state.results}/>)
          : (null)}
        </div>
    </div>
  }
}

export default App;
