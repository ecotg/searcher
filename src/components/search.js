import React from 'react';
import { Input } from 'antd';
import { Button } from 'antd';

const SearchInput = Input.Search;

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentQuery: '' };
    }

    handleTxtChange(e) {
        this.setState({currentQuery: e.target.value});
    }
    
    render() {
        return <div>
            <SearchInput
                placeholder="input search text"
                size="large"
                onChange={val => this.handleTxtChange(val)}
                onSearch={()=> this.props.handleSearch(this.state.currentQuery)}
             >
            </SearchInput>
            <Button type="primary" shape="circle" icon="search" onClick={value =>this.props.handleSearch(this.state.currentQuery)} />
        </div>;
    }
}