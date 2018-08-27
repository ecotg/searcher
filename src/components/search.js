import React from 'react';
import { Input } from 'antd';
import { Button } from 'antd';

const SearchInput = Input.Search;
const PLACEHOLDER = 'Find book...';

export class Search extends React.Component {
    render() {
        return <div>
            <SearchInput
                placeholder={PLACEHOLDER}
                size="large"
                style={{ width: 200 }}
                value={this.props.query}
                onChange={val => this.props.handleTxtChange(val)}
                onSearch={()=> this.props.handleSearch(this.props.query)}
             />
            <Button type="primary" shape="circle" icon="search" onClick={value =>this.props.handleSearch(this.props.query)} />
        </div>;
    }
}