import _ from 'lodash';
/* import './style.css';
import time from './time.png' */
import printMe from './print'

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.classList.add('hello');

  // Add img
  /*   const myImage = new Image();
    myImage.src = time;
 
    element.appendChild(myImage); */

  btn.innerHTML = 'click me and check the console';
  btn.onclick = printMe;
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the update from the print.js module');
    printMe();
  })
}