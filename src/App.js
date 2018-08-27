import React, { Component } from "react";
import { List } from "antd";
import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import { Search } from "./components/search";
import { Result } from "./components/result";
const { search, get_details } = require("./utilities/google");

class App extends Component {
  renderResults() {
    return this.state.results.map(result => {
          return (
        <Result
    title={result.volumeInfo.title}
    author={result.volumeInfo.authors.join(' & ')}
    published={result.volumeInfo.publishedDate}
  />
  );
  });
  }

  async handleSearch(query) {
    const results = await search(query);
    this.setState({ results, renderResults: true });
    console.log('\nresults: ', this.state.results);
  }

  constructor(props) {
    super(props);
    this.state = { results: null, renderResults: false };
  }

  render() {
    return (<div className="App">
        <div className="search-box">
          <Search handleSearch={this.handleSearch.bind(this)} />
        </div>
        <div className="results">
        {this.state.renderResults ? <List className="search-results"> {this.renderResults()}</List> : null}
      </div>
    </div>)

  }
}

export default App;
