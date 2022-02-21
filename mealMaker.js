const menu = {
  _courses : {
    appetizers: [],
    mains: [],
    desserts: []
 },
 
 /* use getter and setter or not, since we are not manipulating any property, but since our property is prefixed with (_)
 which means we cannot change this properties, we can only access them using getters
 get appetizers() {
    return this._courses.appetizers;
 },
 set appetizers(appetizers) {
   this._courses.appetizers = appetizers;
 },
 
 get mains() {
   return this._courses.mains;
   },
 set mains(mains) {
   this._courses.mains = mains;
   },
 
   get desserts() {
     return this._courses.desserts;
    },
   set desserts(dessert) {
     this._courses.desserts = desserts;
    },
 get courses() {
   return {
   appetizers: this.appetizers,
   mains: this.mains,
   deserts: this.desserts
   };
 },*/
 
 //add a new dish and price
    addDishToCourse(courseName, dishName, dishPrice){
      const dish = {
         name: dishName,
         price: dishPrice,
      }; 
      return this._courses[courseName].push(dish);
    },
 
 //on the menu, get a random dish from the course
 getRandomDishFromCourse (courseName) {
   const dishes = this._courses[courseName];
   const randomIndex = Math.floor(Math.random() * dishes.length);
   return dishes[randomIndex];
 }, 
 
 //generate a random meal
 generateRandomMeal() {
  const appetizer = this.getRandomDishFromCourse('appetizers');
  const main = this.getRandomDishFromCourse('mains');
  const dessert = this.getRandomDishFromCourse('desserts');
  const totalPrice = appetizer.price + main.price + dessert.price;
 
  return ` You ordered ${appetizer.name}, ${main.name}, ${dessert.name}. Your bill is ${totalPrice}.`;
 }
 };
 //appertizers
 menu.addDishToCourse('appetizers', 'Prawn Salad', 3.20);
 menu.addDishToCourse('appetizers', 'Scampi Fries', 3.90);
 menu.addDishToCourse('appetizers', 'ribs', 3.70);
 
 //mains
 menu.addDishToCourse('mains', 'Jollof Rice', 6.50);
 menu.addDishToCourse('mains', 'Fried Rice', 6.80);
 menu.addDishToCourse('mains', 'Pilarf Rice', 7.50);
 
 //desserts
 menu.addDishToCourse('desserts', 'Chocolate Ice Cream', 4.52);
 menu.addDishToCourse('desserts', 'Hagendaz', 5.10);
 menu.addDishToCourse('desserts', 'Cheese Cake', 6.25);
 
 let meal = menu.generateRandomMeal();
 console.log(meal);   
      
 
 