//alert("Hello :3");
//console.log("Info do konsoli");

//Zad3
let a = 10;
let b = 20;
let c = 23.3;
let wynik=a+b+c
console.log("Wynik dodawania to: "+ (a+b+c));
//alert(a+b+c);

document.getElementById("Zad3").innerHTML="Wynik dodawania to: "+ (a+b+c);

//Zad4

for(let i=0; i<101; i+=2){
   // if(i%2==0){
       // console.log(i);
    //}
}

//Zad6
// a = prompt("Jak się nazywasz? ");
// console.log(a);
// alert("Cześć "+a);


//Zad5
a = parseFloat(prompt("Podaj długosc boku 1: "));
b = parseFloat(prompt("Podaj długosc boku 2: "));
c = parseFloat(prompt("Podaj długosc boku 3: "));

//Czy to jest wgl trójkąt????
//Jeżeli: a>=b>=c
//To: a+b>c

let p = (a+b+c)/2;
console.log(p);

let P = Math.sqrt(p*(p-a)*(p-b)*(p-c));
console.log(P);
