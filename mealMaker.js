const menu = {
  _courses : {
    appetizers: [],
    mains: [],
    desserts: []
 },

 // accessing the object's property:
 /* we use the getter to fetch/target/access the internal property of the object  and use the setter to set
  the values as same value since we are not changing/mutating the values in the properties. And there is 
  prefix of (_) underscore to the property and we do not want to access this internal private property from outside,
  hence getters and setters.
*/

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


 // method to get all the courses
 get courses() {
   return {
   appetizers: this.appetizers,
   mains: this.mains,
   deserts: this.desserts
   };
 },
 
//method with parameters for adding a new dish with the name and price to the empty array of the menu based on courseName
    addDishToCourse(courseName, dishName, dishPrice){
      const dish = {
         name: dishName,
         price: dishPrice,
      }; 
      return this._courses[courseName].push(dish);
    },
 
 //method for getting a random dish from a course on the menu to generate random meal
 getRandomDishFromCourse (courseName) {
   const dishes = this._courses[courseName];
   const randomIndex = Math.floor(Math.random() * dishes.length);
   return dishes[randomIndex];
 }, 
 
 //method to generate a random meal
 generateRandomMeal() {
  const appetizer = this.getRandomDishFromCourse('appetizers');
  const main = this.getRandomDishFromCourse('mains');
  const dessert = this.getRandomDishFromCourse('desserts');
  const totalPrice = appetizer.price + main.price + dessert.price;
 
  return ` You ordered ${appetizer.name}, ${main.name}, ${dessert.name}. Your bill is ${totalPrice}.`;
 }
 };

 //providing arguments/data to pass into the parameters

 //appertizers arguments
 menu.addDishToCourse('appetizers', 'Prawn Salad', 3.20);
 menu.addDishToCourse('appetizers', 'Scampi Fries', 3.90);
 menu.addDishToCourse('appetizers', 'ribs', 3.70);
 
 //mains arguments
 menu.addDishToCourse('mains', 'Jollof Rice', 6.50);
 menu.addDishToCourse('mains', 'Fried Rice', 6.80);
 menu.addDishToCourse('mains', 'Pilarf Rice', 7.50);
 
 //desserts arguments
 menu.addDishToCourse('desserts', 'Chocolate Ice Cream', 4.52);
 menu.addDishToCourse('desserts', 'Hagendaz', 5.10);
 menu.addDishToCourse('desserts', 'Cheese Cake', 6.25);
 
 //generating a meal and saving to a variable
 let meal = menu.generateRandomMeal();
 console.log(meal);   
      
 
 