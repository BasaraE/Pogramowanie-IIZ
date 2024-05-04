// Zad 1
// ver a FOR

function Odliczanie(){
for(let i =10; i>=0; i--){
    setTimeout(console.log(i), 500);
}
console.log("Happy New Year!");
}
//Odliczanie();

// JAK OPOZNIC WYKONYWANIE KAZDEGO POWTORZENIA PETLI?
// TAK ABY ODLICZANIE TRWALO 10 SEKUND
// SetTimeOut(funkcja, czas[ms]);
// Problem z przeglądarką??


// Zad 2
// ver rekurencja

function SilniaRek(n){
    if(n==0 || n==1) return 1;
    else {
        return n*SilniaRek(n-1);
    }
}
//console.log(SilniaRek(6));


// Zad 3
// ver IF


function CzyPelnoletni(n){
    const wiek = parseFloat(prompt("Ile masz lat?"));

    if (n>= 18){
        return true;
    }else{
        window.open("https://www.google.com", "_self");
    }
}
//CzyPelnoletni(wiek);

// Co w przypadku innych Państw i systemów prawnych, np. USA ?


//Zad 4

function ZmienTlo(btn){
    const przyciski=document.querySelectorAll(".btn-ex4");
    //console.log(przyciski);

    przyciski.forEach(przycisk => {
        przycisk.style.backgroundColor = '';
    });

    btn.style.backgroundColor = "#00c300";
}

//Zad 5 analogicznie
//visibility

//Zad 6

function DodajDoListy(){
    const tekst=document.querySelector("#text");
    console.log(tekst);
    const lista=document.querySelector("#list");
    const li = document.createElement('li');
    li.textContent=tekst.value;
    lista.appendChild(li);
    console.log(lista);
    tekst=""; // reset pola tekstowego???
}



