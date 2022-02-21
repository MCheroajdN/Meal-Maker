const menu = {
    _courses : {
      appetizers: [],
      mains: [],
      desserts: []
   },
   
   
   get appetizers() {
      return this._courses.mains;
   },
   set appetizers(appetizers) {
     this._courses.appetizers = appertizers;
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
     set desserts(desert) {
       this._courses.desserts = desserts;
      },
   
   get courses() {
     return {
     appetizers: this.appetizers,
     mains: this.mains,
     deserts: this.desserts
     };
   },
      addDishToCourse(courseName, dishName, dishPrice){
        const dish = {
           name: dishName,
           price: dishPrice,
        }; 
        return this._courses[courseName].push(dish);
      },
   
   getRandomDishFromCourse (courseName) {
     const dishes = this._courses[courseName];
     const randomIndex = Math.floor(Math.random() * dishes.length);
     return dishes[randomIndex];
   }, 
   
   generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
   
    return ` You ordered ${appetizer.name}, ${main.name}, ${dessert.name}. Your bill is ${totalPrice}.`;
   }
   };
   menu.addDishToCourse('appetizers', 'Prawn Salad', 3.20);
   menu.addDishToCourse('appetizers', 'Scampi Fries', 3.90);
   menu.addDishToCourse('appetizers', 'ribs', 3.70);
   
   menu.addDishToCourse('mains', 'Jollof Rice', 6.50);
   menu.addDishToCourse('mains', 'Fried Rice', 6.80);
   menu.addDishToCourse('mains', 'Pilarf Rice', 7.50);
   
   menu.addDishToCourse('desserts', 'Chocolate Ice Cream', 4.52);
   menu.addDishToCourse('desserts', 'Hagendaz', 5.10);
   menu.addDishToCourse('desserts', 'Cheese Cake', 6.25);
   
   let meal = menu.generateRandomMeal();
   console.log(meal);   
        
   