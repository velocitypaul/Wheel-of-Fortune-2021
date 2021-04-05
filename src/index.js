// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/wheel_of_fortune_small_logo.png';
import './images/wheel_fortune_circle.png';

console.log('This is the JavaScript entry file - your code begins here.');

var spinButton = document.querySelector('.spinButton');
var wheel = document.querySelector('.wheel img');

spinButton.addEventListener('click', spinWheel);

//listen for spin the wheel click
//make spin sound
//spin the wheel transform: rotate()
//select random index from wheel/
//stop wheel at index * 15° + 7.5°
//Display value

function spinWheel() {
	wheel.classList.toggle('spinning');
}