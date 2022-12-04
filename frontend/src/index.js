import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Search from './pages/Search';
import Home from './pages/Home';

import { browserRouter as Router, Route, Switch } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Search />);
