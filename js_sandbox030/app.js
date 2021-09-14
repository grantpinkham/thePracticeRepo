//for loop
for (let i = 0; i < 10; i++) {
    if (i == 4) {
        console.log('4 is my favorite number');
        continue;
    }
    if (i === 5) {
        console.log('stop the loop');
        break;
    }
    console.log('number ' + i);
}
