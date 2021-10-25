const timeOfDay = ['morning', 'afternoon', 'night'];
const userInput = timeOfDay[1];
const determineTimeOfDay = () => {
  if (userInput === timeOfDay[0]) {
    console.log('i need coffee')
  } else if (userInput === timeOfDay[1]) {
    console.log('i need a break')
  } else {
    console.log('i need sleep')
  }
}
determineTimeOfDay();
