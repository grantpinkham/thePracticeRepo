const catchBillOrTed = [
  {name: 'bill', city: 'toronto'},
  {name: 'ted', city: 'atlanta'},
  {name: 'bill', city: 'memphis'},
  {name: 'ted', city: 'new york'},
  {name: 'bill', city: 'philadelphia'},
  {name: 'ted', city: 'boston'}
];
for (let i = 0; i < catchBillOrTed.length; i++) {
  if (i === i) {
    console.log(`${catchBillOrTed[i].name} is in ${catchBillOrTed[i].city}, catch him if you can!`)
  }
  console.log(`where will ${catchBillOrTed[i].name} go next?`);
}