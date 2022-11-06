import React from "react";
import ReactDOM from 'react-dom/client';
import { FirstApp } from "./FirstApp";
import { HelloWordApp } from "./HelloWordApp";
import {CounterApp} from "./CounterApp"

import './index.css';


//rafc
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={10}/>
    </React.StrictMode>
);