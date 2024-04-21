//alert("Hello");
// let a=10;
// let b=20;
// let c=23.2;

//a
//alert(a+b+c);
//b
//console.log(a+b+c);
//c
//let wynik=a+b+c;
//document.getElementById("Zad3").innerHTML="Wyniki dodawania to: " + wynik;

//Zad4
// for(let i = 0; i<101; i+=2){
//     // if(i%2==0){
//     console.log(i);
//     // }
// }

//Zad5
// czy to wgl jest trójkąt???
//Jeżeli: a<=b<=c
//to: a+b>c
let a, b, c, p, pole;
a = parseFloat(prompt("Podaj długość boku1"));
b = parseFloat(prompt("Podaj długość boku2"));
c = parseFloat(prompt("Podaj długość boku3"));

console.log(a);

p=(a+b+c)/2;
console.log(p);
console.log(p*(p-a)*(p-b)*(p-c));

pole=Math.sqrt(p*(p-a)*(p-b)*(p-c));
console.log(pole);