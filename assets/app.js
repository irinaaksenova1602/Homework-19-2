
let year = +prompt('Введите год:');
 let a = year % 4;
console.log(`${a}`);

if(a > 0 ){
     alert('Обычный год');
 }else{
     alert('Высокосный год');
 }