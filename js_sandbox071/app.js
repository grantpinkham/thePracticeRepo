const todaysDate = new Date().getDay();
const isItTheWeekend = () => {
  if (todaysDate == 0 || 1 || 2 || 3 || 4 || 5 || 6) {
    while (todaysDate != 0 || 6) {
      console.log('its not the weekend yet');
      break;
    }
  }
}
isItTheWeekend();