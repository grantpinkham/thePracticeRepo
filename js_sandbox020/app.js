const color = 'Red';
switch (color) {
    case 'red':
        console.log('Color is Red');
        break;
    case 'blue':
        console.log('Color is Blue');
        break;
    default:
        console.log('Color is not Red or Blue');
        break;
}

let day;
switch (new Date().getDay()) {
    case 0:
        day = 'sunday';
        break;
    case 1:
        day = 'monday';
        break;
    case 2:
        day = 'tuesday';
        break;
    case 3:
        day = 'wednesday';
        break;
    case 4:
        day = 'thursday';
        break;
    case 5:
        day = 'friday';
        break;
    case 6:
        day = 'saturday';
        break;
}
console.log(`today is ${day}`);
