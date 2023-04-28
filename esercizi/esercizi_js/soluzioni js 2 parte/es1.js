function char_count(str, letter) 
{
 let letter_Count = 0;
 for (let position = 0; position < str.length; position++) 
 {//scorro carattere per carattere 

    if (str.charAt(position) === letter) 
      {//confronto il carattere in una data poszione della stringa con la lettera che cerco
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('alessandria', 's'));
