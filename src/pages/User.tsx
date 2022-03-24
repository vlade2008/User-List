import React, { useState, useEffect } from 'react';
import { Input, Divider, Button } from 'semantic-ui-react'
import axios from 'axios';
import UserCard from '../components/UserCard';

const User = () => {
  const [responseData, setResponseData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchIdInput, setSearchIdInput] = useState('');
  const [searchNameInput, setSearchNameInput] = useState('');
  const [isNoHaveFilter, setIsNoHaveFilter] = useState(false);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        setResponseData(response.data);
        setFilteredResults(response.data)
      })
  }, [])

  const onHandleFilter = () => {
    if (searchIdInput !== '') {
      const filteredData = responseData.filter((item: any) => {
        return item.id === parseInt(searchIdInput);
      })
      setFilteredResults(filteredData)
    }
    if (searchNameInput !== '') {
      const filteredData = responseData.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchNameInput.toLowerCase())
      })
      setFilteredResults(filteredData)
    }
    if (searchNameInput !== '' && searchIdInput !== '') {
      const filteredDataId = responseData.filter((item: any) => {
        return item.id === parseInt(searchIdInput);
      });
      const filteredDataName = responseData.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchNameInput.toLowerCase())
      });
      setFilteredResults([...filteredDataId, ...filteredDataName])
    }
    if (searchIdInput !== '' || searchIdInput !== '') {
      setIsNoHaveFilter(filteredResults.length === 0)
    }
    if (searchIdInput === '' && searchNameInput === '') {
      setFilteredResults(responseData)
    }
  }
  
  console.log(filteredResults, 'filteredResults');
  

  return (
    <div className="App">
      <header className="App-header">
        <Divider hidden />
        <Input icon='search'
          placeholder='User Id...'
          onChange={(e) => setSearchIdInput(e.target.value)}
        />
        <Divider hidden />
        <Input icon='search'
          placeholder='Name...'
          onChange={(e) => setSearchNameInput(e.target.value)}
        />
        <Divider hidden />
        <Button primary size='medium' onClick={() => onHandleFilter()}>Search</Button>
        <Divider hidden />
        {
          isNoHaveFilter ? 'No ID or Name found' : <UserCard filteredResults={filteredResults} />
        }
      </header>
    </div>
  );
}

export default User;
