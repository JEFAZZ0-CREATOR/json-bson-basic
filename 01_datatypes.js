let usern = `JEFAZZ0`;
let age = 16;
let isActive = true;
let hobbies = [`reading`, `programming`, `BDG`];

console.log(usern);
console.log(typeof (usern));
console.log(age);
console.log(typeof (age));
console.log(isActive);
console.log(typeof (isActive));
console.log(hobbies[2]);
console.log(typeof (hobbies));

let person = {
    name: "JEFAZZ0",
    age: 16,
    isActive: true,
    hobbies: [`reading`, `programming`, `BDG`],
};

console.log(person);
console.log(`Mi nombre es ` + person.name);
console.log(`Y tengo ` + person.age + ` años`);
console.log(`Estoy activo? ` + person.isActive);
console.log(`y mis pasatiempos son ` + person.hobbies);

console.table(person)