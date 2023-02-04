import React, { useState } from 'react'
import search from '../styles/search.module.css'
import { AiOutlineSearch } from 'react-icons/ai'
import Link from 'next/link';

function Search() {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('asdfa')
    }
    return (
        <div className={search.searchLocal}>
            <Link href={`/details/${query.split(' ').join('-')}`} className={search.icon}>
                <AiOutlineSearch />
            </Link>

            <input type="text" className={search.input} placeholder="Search your next course" onChange={e => setQuery(e.target.value)} />

            <button className={search.button}>
                <Link className={search.a} href={`/details/${query.split(' ').join('-')}`}>
                    Search
                </Link>
            </button>
        </div>
    )
}

export default Search;
