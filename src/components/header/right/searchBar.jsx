import React from 'react'

import { Input } from 'antd';

const { Search } = Input;


const SearchBar = (props)=>{
    return ( <Search
      placeholder="input search text"
      allowClear
    />)
}


export default SearchBar