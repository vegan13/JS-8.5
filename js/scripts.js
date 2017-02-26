var a = 0,
    b = 2,
    value;

value = (a * a) + (2 * a * b) - (b * b);

console.log('Wynik działania wynosi ' + value);

if (value > 0) {
    console.log('Wynik jest dodatni');
} else if (value < 0) {
    console.log('Wynik jest ujemny');
} else {
    console.log('Wynik jest równy ZERO');
}