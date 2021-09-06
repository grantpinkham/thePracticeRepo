const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
taskInput.value = '';
//keydown
taskInput.addEventListener('keydown', runEvent);
function runEvent(e) {
  console.log(`event type is ${e.type}`);
  console.log(e.target.value);
}
