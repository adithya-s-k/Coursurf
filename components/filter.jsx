import React, { useEffect } from 'react'
// import filter from '../styles/filter.module.css'
import { MdToc } from 'react-icons/md'
import { BsChevronDown } from 'react-icons/bs'

const Filter = () => {

    useEffect(() => {
        var acc = document.getElementsByClassName("icon");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;

                // console.log(panel.style.display);
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }

        const clear = document.getElementById('clear');
        const input = document.getElementsByClassName('input-c');

        clear.addEventListener("click", function () {

            for (var i = 0; i < input.length; i++) {
                input[i].checked = false;
            }
        })
        // console.log(input)

        const toggleFilter = document.getElementById("toggleFilter");
        const body = document.getElementById("filterBody");
        toggleFilter.addEventListener("click", function () {
            if (body.style.display === 'none') body.style.display = 'block';
            else body.style.display = ' none';
        })
    }, [])

    return (
        <div className='filter-container'>
            <div className='filter-header'>
                <span><MdToc className='filter-svgfilter' size={24} color={'#0a2540'} />Filter by</span>
                <span id='toggleFilter'><MdToc className='filter-svgfilter' size={24} color={'#0a2540'} />Filter by</span>
                <button id='clear'>Clear All</button>
            </div>
            <div className='filter-body' id='filterBody' style={{ display: 'block' }}>
                <div id='section1'>
                    <ul>
                        <li>
                            <input type='checkbox' className='input-c' /> With certificate
                        </li>
                        <li>
                            <input type='checkbox' className='input-c' /> Free courses
                        </li>
                        <li>
                            <input type='checkbox' className='input-c' /> With free certificate
                        </li>
                        <li>
                            <input type='checkbox' className='input-c' /> University course only
                        </li>
                    </ul>
                </div>
                <div id='section2'>
                    <h2>Level</h2>
                    <BsChevronDown className='icon' />
                    <ul style={{ display: 'block' }}>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>With certificate</span>
                        </li>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>With certificate</span>
                        </li>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>With certificate</span>
                        </li>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>University course only</span>
                        </li>
                    </ul>
                </div>
                <div id='section3'>
                    <h2>Duration</h2>
                    <BsChevronDown className='icon' />
                    <ul style={{ display: 'block' }}>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>With certificate</span>
                        </li>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>With certificate</span>
                        </li>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>With certificate</span>
                        </li>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>University course only</span>
                        </li>
                    </ul>
                </div>
                <div id='section4'>
                    <h2>Subject</h2>
                    <BsChevronDown className='icon' />
                    <ul style={{ display: 'block' }}>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>With certificate</span>
                        </li>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>With certificate</span>
                        </li>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>With certificate</span>
                        </li>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>University course only</span>
                        </li>
                    </ul>
                </div>
                <div id='section5'>
                    <h2>Language</h2>
                    <BsChevronDown className='icon' />
                    <ul style={{ display: 'block' }}>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>With certificate</span>
                        </li>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>With certificate</span>
                        </li>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>With certificate</span>
                        </li>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>University course only</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Filter