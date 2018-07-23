import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
// import Playlist from './src/playlist/components/playlist';
import data from '../api.json';

const homeContainer = document.getElementById('home-container')
// console.log('Prueba de React')
// const hoaMundo = <h1>React con Webpack!</h1>;
render(<Home data={data} /> , homeContainer);