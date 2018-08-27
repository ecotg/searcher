import React from 'react';
import { List } from 'antd';
import { Book } from "./book";

const DEFAULT_IMG = "http://www.free-icons-download.net/images/open-book-icon-67666.png";

export class Result extends React.Component {
    render () {
        return <List className="search-results"
            bordered
            itemLayout="horizontal"
            dataSource={this.props.results}
            renderItem={item => <Book
                title={[item.volumeInfo.title, item.volumeInfo.subtitle].join('. ')}
                author={item.volumeInfo.authors && item.volumeInfo.authors ? item.volumeInfo.authors.join(" & ") : item.volumeInfo.authors}
                published={item.volumeInfo.publishedDate}
                description={item.volumeInfo.description}
                categories={item.volumeInfo.category && item.volumeInfo.categories.length > 1 ? item.volumeInfo.categories.join(',') : item.volumeInfo.categories }
                avatar={item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail ? item.volumeInfo.imageLinks.smallThumbnail : DEFAULT_IMG }
                id={item.id}
            /> }
        />
    }
}