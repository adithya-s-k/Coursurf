import React, { useEffect, useRef, useState } from 'react'
import search from '../styles/search.module.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { RxCross2 } from 'react-icons/rx'
import Link from 'next/link';




function Search() {

    useEffect(() => {
        const input = document.querySelector('input');
        input.focus();
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                document.querySelector("button").click();
            }
        })
    }, [])

    const clear = () => {
        if (query.length !== 0) {
            setQuery('');
            inputRef.current.value = '';
        }
    }
    const [query, setQuery] = useState('');

    const inputRef = useRef('')
    return (
        <div className={search.center}>
            <div className={search.searchLocal}>
                <Link href={`/details/${query.split(' ').join('-')}`} className={search.icon}>
                    <AiOutlineSearch />
                </Link>
                <input type="text" autoFocus className={search.input} ref={inputRef} placeholder="Search your next course" onChange={e => setQuery(e.target.value)} />
                <span className={search.cross}><RxCross2 onClick={clear} className={search.crossSvg} /></span>
                <button className={search.button}>
                    <Link className={search.a} href={`/details/${query.split(' ').join('-')}`}>
                        Search
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Search;
