const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
//clear input
taskInput.value = '';
//submit
// form.addEventListener('submit', runEvent);
//keydown
taskInput.addEventListener('keydown', runEvent);
//keyup
// taskInput.addEventListener('keyup', runEvent);
function runEvent(e) {
  console.log(`event type is ${e.type}`);
  console.log(e.target.value);
  //get input value
  // console.log(taskInput.value);
  // e.preventDefault();
}