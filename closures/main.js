const createPerson = function (name, age) {
  const person = {
    personName: name,
    personAge: age,
  };

  return person;
};
pe = createPerson("Elon", 42);

console.log(pe.person);
