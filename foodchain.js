var eatsPlants = false;
var eatsAnimals = true;

var category =  (eatsPlants && !eatsAnimals) ? "h" : (!eatsPlants && eatsAnimals) ? "c" : (eatsPlants && eatsAnimals)? "svastojed" :"nista";
console.log(category);

var category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : undefined);
