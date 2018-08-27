import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Result } from "./result";

export class Scroll extends React.Component {
    render() {
        return <InfiniteScroll
            pageStart={0}
            loadMore={this.props.loadMore}
            hasMore={this.props.hasMore}
            loader={<div className="loader" key={0}>Loading ...</div>}
        >
            <Result results={this.props.results}/>
        </InfiniteScroll>
    }
}