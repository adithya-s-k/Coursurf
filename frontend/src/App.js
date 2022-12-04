import React from 'react';
import { useEffect, useState } from 'react';

import axios from 'axios';
import './App.css';

import Table from './components/Table';
import Sort from './components/Sort';
import Pagination from './components/Pagination';
import Website from './components/Website';
import Company from './components/Company';
import Certificate from './components/Certificate';
import NavigationBar from './components/Navbar';

const base_url = process.env.REACT_APP_API_URL;
// const server_url = 'https://coursurf-api.onrender.com/api/courses';

function App() {
  const [obj, setObj] = useState({});
  const [sort, setSort] = useState({ sort: 'rating', order: 'desc' });
  const [filterWebsite, setFilterWebsite] = useState([]);
  const [filterCompany, setFilterCompany] = useState([]);
  const [filterCertificate, setFilterCertificate] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getAllCourses = async () => {
      try {
        const url = `${base_url}?page=${page}&sort=${sort.sort},${
          sort.order
        }&website=${filterWebsite.toString()}&company=${filterCompany.toString()}&certificate=${filterCertificate.toString()}&search=${search}`;
        const { data } = await axios.get(url);
        setObj(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllCourses();
  }, [sort, filterWebsite, filterCompany, filterCertificate, page, search]);

  return (
    <div className="wrapper">
      <div className="container">
        <NavigationBar setSearch={(search) => setSearch(search)} />

        <Sort total={obj.total} sort={sort} setSort={(sort) => setSort(sort)} />
        <div className="body">
          <div className="filter_container">
            <Website
              filterWebsite={filterWebsite}
              website={obj.website ? obj.website : []}
              setFilterWebsite={(website) => setFilterWebsite(website)}
            />
            <Company
              filterCompany={filterCompany}
              company={obj.company ? obj.company : []}
              setFilterCompany={(company) => setFilterCompany(company)}
            />
            <Certificate
              filterCertificate={filterCertificate}
              certificate={obj.certificate ? obj.certificate : []}
              setFilterCertificate={(certificate) =>
                setFilterCertificate(certificate)
              }
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
