function getBeef(){
    let prepTime = Math.floor(Math.random() * 1000);
    let beef = {howcooked: 'medium rear'};
    return new Promise((resolve, reject) => {
      if (beef) {
        setTimeout(() => {
          console.log(`I've got beef in ${prepTime/1000} sec.!`);
          resolve(beef);
        },prepTime);
      } else {
        reject(new Error("No beef!"));
      }
    });
  }
  
function cookBeef(beef){
  let prepTime = Math.floor(Math.random() * 1000);
  let cookedBeef = {cooked: beef.howcooked};
  return new Promise((resolve, reject) => {
    if (cookedBeef) {
      setTimeout(() => {
        console.log(`I've cooked beef in ${prepTime/1000} sec.!`);
        resolve(cookedBeef);
      }, prepTime);
    } else {
      reject(new Error("No cooked beef!"));
    }
  });
}
  
function getBuns(){
  let prepTime = Math.floor(Math.random() * 1000);
  let buns = {topping: 'caramel'};
  return new Promise((resolve, reject) => {
    if (buns) {
      setTimeout(() => {
        console.log(`I've got buns in ${prepTime/1000} sec.!`);
        resolve(buns);
      },prepTime);
    } else {
      reject(new Error("No buns!"));
    }
  });
}
  
function putBeefBetweenBuns(buns, beef) {
  let prepTime = Math.floor(Math.random() * 1000);
  let burger = {beef: beef, buns: buns };
  return new Promise((resolve, reject) => {
  if (burger) {
    setTimeout(()=>{
      console.log(`I've put beef between buns in ${prepTime/1000} sec.!`);
      resolve(burger);
    },prepTime);
  } else {
    reject(new Error("No cooked beef!"));
  }
});
}
  
function serve(burger) {
  let prepTime = Math.floor(Math.random() * 1000);
  setTimeout(()=>{
    console.log(`I've put a burger with a `+
    `${burger.beef.cooked} beef between `+
    `two buns topped with ${burger.buns.topping} in ${prepTime/1000} sec.`);
  },prepTime);
}
  
const makeBurger = async () => {
    // we can get beef and buns in parallel!
    const [beef,buns] = await Promise.all([getBeef(),getBuns()]);
    const cookedBeef = await cookBeef(beef);
    const burger = await putBeefBetweenBuns(buns,cookedBeef);
    return burger;
};
    
// Make and serve burger
console.log("Someone ordered a burger!")
makeBurger().then(serve);