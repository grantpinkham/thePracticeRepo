function PersonImmersedInWater(name, weight) {
  this.name = name;
  this.calculateWeight = function () {
    const diff = weight - 20;
    const newWeight = diff;
    return newWeight;
  }
}
const person1 = new PersonImmersedInWater('tim', 180);
const person2 = new PersonImmersedInWater('tony', 120);
console.log(person1.calculateWeight());
console.log(person2.calculateWeight());
