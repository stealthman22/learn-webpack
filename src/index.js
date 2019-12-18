import _ from 'lodash';
import './style.css';
import time from './time.png'

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add img
    const myImage = new Image();
    myImage.src = time;

    element.appendChild(myImage);
    return element;
}

document.body.appendChild(component());