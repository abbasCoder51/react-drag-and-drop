import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './Board/component';
import { observe } from "./Game/component";
import registerServiceWorker from './registerServiceWorker';

observe(knightPosition =>
    ReactDOM.render(
        <Board knightPosition={knightPosition}/>,
        document.getElementById('root')
    )
);

registerServiceWorker();
