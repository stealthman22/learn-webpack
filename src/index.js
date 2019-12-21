import _ from 'lodash';

/*import time from './time.png' */
import printMe from './print'
import './style.css';

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

// For HMR
let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the update from the print.js module');
    printMe();

    // For HMR
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    document.body.appendChild(element);
  })
}