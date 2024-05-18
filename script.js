// Initialize counter
let counter = localStorage.getItem('counter') || 0;
document.getElementById('counter').innerText = counter;

function increment() {
  counter++;
  document.getElementById('counter').innerText = counter;
  localStorage.setItem('counter', counter);
  updateProgressBar();
}

function decrement() {
  counter--;
  document.getElementById('counter').innerText = counter;
  localStorage.setItem('counter', counter);
  updateProgressBar();
}

function reset() {
  counter = 0;
  document.getElementById('counter').innerText = counter;
  localStorage.setItem('counter', counter);
  updateProgressBar();
}
