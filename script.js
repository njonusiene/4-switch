// Papildomai pabaigti skaičiaus spėjimo žaidimą:

// Nurodytų ar spėtas skaičius didesnis ar mažesnis už slaptą skaičių
// Slaptas skaičius turėtų būti tarp 1 ir 1000, bet nereikia nurodyti spėjėjui intervalo

var slaptasSkaicius = 505;
var x = prompt("Spėkite skaičių ");

while (true) {
    if (x > slaptasSkaicius) {
        alert("Įvestas skaičius didesnis už slaptą skaičių");
        x = prompt("Spėkite skaičių ");
    } else if (x < slaptasSkaicius) {
        alert("Įvestas skaičius mažesnis už slaptą skaičių");
        x = prompt("Spėkite skaičių ");
    } else {
        alert("Atspėjote!");
        break;
    }
}



