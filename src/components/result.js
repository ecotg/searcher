import React from 'react';

import { List, Avatar, Button, Spin } from 'antd';

export class Result extends React.Component {
    render() {
        return <List.Item
            actions={[<a>edit</a>, <a>more</a>]}>
            <List.Item.Meta
                title={this.props.title}
                author={this.props.author}
                published={this.props.publish_date}
            />
        </List.Item>
    }
}