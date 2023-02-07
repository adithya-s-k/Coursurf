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

        const toggleFilter = document.getElementById("toggleFilter");
        // const toggleFilter1 = document.getElementById("toggleFilter1");
        const body = document.getElementById("filterBody");

        body.style.display = 'block';

        toggleFilter.addEventListener("click", function () {
            if (body.style.display === 'none') {
                body.style.display = 'block';
                clear.style.display = 'block'
            }
            else {
                body.style.display = ' none';
                clear.style.display = 'none'
            }
        })

        

        window.onresize = (e) => {
            if (screen.width >= 920) {
                body.style.display = 'block';
            }
            else {
                body.style.display = 'none';
            }
        }


    }, [])

    return (
        <div className='filter-container'>
            <div className='filter-header'>
                <span><MdToc className='filter-svgfilter' size={24} color={'#0a2540'} />Filter by</span>
                <span id='toggleFilter'><MdToc className='filter-svgfilter' size={24} color={'#0a2540'} />Filter by</span>
                <button id='clear'>Clear All</button>
            </div>
            <div className='filter-body' id='filterBody' >
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
                    <ul >
                        <li>
                            <input type='checkbox' className='input-c' /> <span>Beginner</span>
                        </li>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>Intermediate</span>
                        </li>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>Advanced</span>
                        </li>
                    </ul>
                </div>
                <div id='section3'>
                    <h2>Duration</h2>
                    <BsChevronDown className='icon' />
                    <ul >
                        <li>
                            <input type='checkbox' className='input-c' /> <span>1-5 hours</span>
                        </li>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>5-10 hours</span>
                        </li>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>10+ hours</span>
                        </li>
                    </ul>
                </div>
                <div id='section4'>
                    <h2>Subject</h2>
                    <BsChevronDown className='icon' />
                    <ul style={{ display: 'block' }}>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>Programming</span>
                        </li>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>Computer Science</span>
                        </li>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>Data Science</span>
                        </li>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>Information Security</span>
                        </li>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>Business</span>
                        </li>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>Mathematics</span>
                        </li>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>Engineering</span>
                        </li>
                    </ul>
                </div>
                <div id='section5'>
                    <h2>Language</h2>
                    <BsChevronDown className='icon' />
                    <ul style={{ display: 'block' }}>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>English</span>
                        </li>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>Arabic</span>
                        </li>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>Bengali</span>
                        </li>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>Chinese</span>
                        </li>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>French</span>
                        </li>
                        <li>
                            <input type='checkbox' className='input-c' /> <span>German</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Filter