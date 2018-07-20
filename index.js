import React from 'react';
import { render } from 'react-dom';
import Media from './src/playlist/components/media';

const app = document.getElementById('app')
// console.log('Prueba de React')
// const hoaMundo = <h1>React con Webpack!</h1>;
render(<Media title="Desarrollo Web" author="Alejandro Gallardo" image="./images/covers/html5.jpg"/> , app);