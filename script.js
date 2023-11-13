/*Skapar en array med bilder*/
var minaBilder = [
  "<img src='img/logotype.jpg'>",
  "<img src='img/logotype.jpg' id='bild2'>",
  "<img src='img/logotype.jpg' id='bild3'>",
  "<img src='img/logotype.jpg'>",
];

/*Kollar hur många bilder det är i arrayen*/
var arrayLength = minaBilder.length;

/*Skapar en for-loop som loopar igenom alla bilder*/
var myList = ""; //Skapar en variabel för att visa bilderna
for (var i = 0; i < arrayLength; i++) {
  //Kör for-loopen så länge i är mindre är arrayLength (så många bilder som vi har)
  myList += minaBilder[i]; //Gå igenom alla bilder
}
document.getElementById("minArraySection").innerHTML = myList; //Lägg in bilderna i minArraySection i HTML

/*Skapar variabler för knapp och bilder*/
var myButton = document.getElementById("button"); //Skapar en variabel för vår knapp
var bild2 = document.getElementById("bild2"); //Skapar en variabel för bild2
var bild3 = document.getElementById("bild3"); //Skapar en variabel för bild3

/*När man klickar på knappen så ska bilderna ändra klass */
myButton.addEventListener("click", function () {
  //När man klicklar på knappen MyButton
  bild2.classList.toggle("large-images"); //Toggla klassen "large-images"
  bild3.classList.toggle("large-images"); //Toggla klassen "large-images"
});
