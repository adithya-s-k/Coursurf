import React from 'react';
import { useEffect, useState } from 'react';

import axios from 'axios';
import './App.css';

import Table from './components/Table';
import Sort from './components/Sort';
import Genre from './components/Genre';
import Pagination from './components/Pagination';
import Search from './components/Search';
import Website from './components/Website';

const base_url = process.env.REACT_APP_API_URL;

function App() {
  const [obj, setObj] = useState({});
  const [sort, setSort] = useState({ sort: 'rating', order: 'desc' });
  const [filterGenre, setFilterGenre] = useState([]);
  const [filterWebsite, setFilterWebsite] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const url = `${base_url}?page=${page}&sort=${sort.sort},${
          sort.order
        }&genre=${filterGenre.toString()}&website=${filterWebsite.toString()}&search=${search}`;
        const { data } = await axios.get(url);
        setObj(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllMovies();
  }, [sort, filterGenre, filterWebsite, page, search]);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="head">
          <img src="./images/logo.png" alt="logo" className="logo" />
          <Search setSearch={(search) => setSearch(search)} />
        </div>
        <div className="body">
          <div className="filter_container">
            <Sort sort={sort} setSort={(sort) => setSort(sort)} />
            <Website
              filterWebsite={filterGenre}
              website={obj.website ? obj.website : []}
              setFilterWebsite={(website) => setFilterWebsite(website)}
            />
            <Genre
              filterGenre={filterGenre}
              genres={obj.genres ? obj.genres : []}
              setFilterGenre={(genre) => setFilterGenre(genre)}
            />
          </div>
          <div className="table_container">
            <Table courses={obj.courses ? obj.courses : []} />
            <Pagination
              page={page}
              limit={obj.limit ? obj.limit : 0}
              total={obj.total ? obj.total : 0}
              setPage={(page) => setPage(page)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
