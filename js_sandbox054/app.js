function PersonInWater(name, weight) {
  this.name = name;
  this.calculateWeight = function () {
    const diff = weight - 20;
    const newWeight = diff;
    return newWeight;
  }
}
const person1 = new PersonInWater('tim', 180);
console.log(person1.calculateWeight());
const person2 = new PersonInWater('tony', 120);
console.log(person2.calculateWeight());