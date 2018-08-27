import React from 'react';
import { List, Avatar } from 'antd';

export class Book extends React.Component {
    render() {
        return <List.Item key={this.props.id} className="book">
            <List.Item.Meta
                title={this.props.title}
                avatar={<Avatar src={this.props.avatar}/>}
            />
        <p> <b>by</b> {this.props.author ?  this.props.author : 'n/a'} </p>
        <p><i>Release date: {this.props.published}</i></p>
        <span>{this.props.description}</span>
        <span>{this.props.categories ? this.props.categories : 'n/a'}</span>
     </List.Item>
    }
}