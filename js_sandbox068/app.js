const timeOfDay = ['Morning', 'Afternoon', 'Night'];
const userInput = timeOfDay[1];
const determineTimeOfDay = () => {
  if (userInput === timeOfDay[0]) {
    console.log('I need coffee.')
  } else if (userInput === timeOfDay[1]) {
    console.log('I need a break.')
  } else {
    console.log('I need sleep.')
  }
}
determineTimeOfDay();
