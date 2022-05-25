import { Divider, Input, Row } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search(props) {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);

    props.searchFoods(e.target.value);
  };

  return (
    <Row>
      <Divider>Search</Divider>
        <label>Search</label>
        <Input value={search} type="text" onChange={handleSearch} />
    
    </Row>
  );
}

export default Search;
