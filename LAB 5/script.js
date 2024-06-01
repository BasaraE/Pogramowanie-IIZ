//Zad 1
// let lista1=[];

// for(let i = 0; i<10; i++){

//     let liczba = parseInt(prompt("Podaj liczbę"));
//     //console.log(liczba);
//     lista1[i]=liczba;
// }
// console.log(lista1);
// //ver1
// let szukana = parseInt(prompt("Podaj liczbę do wyszukania w tablicy"));
// let lista2 = lista1.filter(element => element === szukana);

// //console.log(lista2);
// console.log(lista2.length);

//ver2 for i porównanie przez wszystkie elementy tablicy


//Zad 2
// let lista = [1,2,3,4,5,6];
// console.log(lista);

// let liczba = parseInt(prompt("Podaj liczbę do wstawienia"));
// let index = parseInt(prompt("Podaj miejsce w tablicy"));
// //ver 1
// lista.splice(index, 0, liczba);
// console.log(lista);

// //ver 2 tab pomocnicza z kopią tab bazowej od danego index i pod index w tab bazowej wstawiamy liczbę,
// //a) usuwamy wszyskie elementy od index+1, konkatenujemy z tab pom
// //b) od index+1 przenosimy elementy z tab pom aż do wyczerpania

// //Zad 3
// //ver 1 wyszukaj funkcję
// lista.reverse();
// console.log(lista);

// //ver 2 for do połowy długości tablicy, zamiana miejsc, ze zmienną pomocniczą


//Zad 4
let tablica =[];
let dlugosc = parseInt(prompt("Podaj długość tablicy do utworzenia"));

for(let i=0; i<dlugosc; i++){
    
    tablica[i]=Math.floor(Math.random()*100); // przedział 0-100
    //console.log(tablica[i]);
    //** Jak losować z danego przedziału <a, b) ??

    // Math.random() * wielkość przedziału -> (b - a)
    // + lewa krawędź przedziału (początek) w przypadku liczb dodatnich

    //** A co w przypadku liczb ujemnych ??
}

