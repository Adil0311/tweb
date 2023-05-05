function getBeef(callback){
    let prepTime = Math.floor(Math.random() * 1000);
    setTimeout(()=>{
        let beef = {howcooked: 'medium rear'};
        console.log(`I've got beef in ${prepTime/1000} sec.!`);
        callback(beef);
    },prepTime)
}

function cookBeef(beef,callback){
    let prepTime = Math.floor(Math.random() * 2000);
    setTimeout(()=>{
        let cookedBeef = {cooked: beef.howcooked};
        console.log(`I've cooked beef in ${prepTime/1000} sec.!!`);
        callback(cookedBeef);
    },prepTime)
}

function getBuns(callback){
    let prepTime = Math.floor(Math.random() * 1000);
    setTimeout(()=>{
        let buns = {topping: 'caramel'};
        console.log(`I've got buns in ${prepTime/1000} sec.!!`);
        callback(buns);
    },prepTime)
}

function putBeefBetweenBuns(buns,cookedBeef,callback) {
    let prepTime = Math.floor(Math.random() * 1000);
    setTimeout(()=>{
        let burger = {beef: cookedBeef, buns: buns };
        console.log(`I've put beef between buns in ${prepTime/1000} sec.!`);
        callback(burger);
    },prepTime)
}

function serve(burger) {
    let prepTime = Math.floor(Math.random() * 1000);
    setTimeout(()=>{
        console.log(`I've served a burger with `+
        `a ${burger.beef.cooked} beef between two buns `+
        `topped with ${burger.buns.topping} in ${prepTime/1000} sec.! `);
    },prepTime)
}

// Makes a burger
// makeBurger contains four steps:
//   1. Get beef
//   2. Cook the beef
//   3. Get buns for the burger
//   4. Put the cooked beef between the buns
//   5. Serve the burger (from the callback)
// We use callbacks here because each step is asynchronous.
//   We have to wait for the helper to complete the one step
//   before we can start the next step
const makeBurger = (nextStep) => {
    getBeef(function(beef) {
        cookBeef(beef, function(cookedBeef) {
            getBuns(function(buns) {
                putBeefBetweenBuns(buns,cookedBeef, function(burger) {
                    nextStep(burger);
                });  
            });
        });
      });
    };

console.log("Someone ordered a burger!")
makeBurger((burger) => {
    serve(burger)
    });