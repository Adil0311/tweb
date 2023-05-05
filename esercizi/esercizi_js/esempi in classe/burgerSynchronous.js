function getBeef(){
    let beef = {howcooked: 'medium rear'};
    return beef;
}

function cookBeef(beef){
    //let cookedBeef = {cooked: beef.howcooked}
    //return cookedBeef;
    return setTimeout((beef)=>{cooked: beef.howcooked},1000,beef)
    
}

function getBuns(){
    let buns = {topping: 'caramel'};
    return buns;
}

function putBeefBetweenBuns(buns,cookedBeef) {
   let burger = {beef: cookedBeef, buns: buns };
   return burger;
}

function serve(burger) {
    console.log(`I've put a burger with a ${burger.beef.cooked} beef between two buns topped with ${burger.buns.topping} `);
}



const makeBurger = () => {
    const beef = getBeef();
    const cookedBeef = cookBeef(beef);
    const buns = getBuns();
    const burger = putBeefBetweenBuns(buns, cookedBeef);
    return burger;
  };
  
  const burger = makeBurger();
  serve(burger);