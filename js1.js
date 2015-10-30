
console.log("");

var symbols = ["&#9670;", "&#9670;", "&#9670;", "&#9670;", "&#9670;", "&#9670;", "&#9670;", "&#9670; ", "&#9670;", "&#9670;", "&#9670;", "&#9670;", "&#9670; ", "&#9670;", "&#9670;", "&#9670;", "&#9670;", "&#9670; ", "&#9670;", "&#9670;", "&#9670;", "&#9670;", "&#9670; ", "&#9670;", "&#9670;", "&#9670;", "&#9670;", "&#9670; ", "&#9670;", "&#9670;", "&#9670;"]

var pattern = "&#8226;";

for (var increment = 0; increment < symbols.length; increment++) {
console.log(pattern);
pattern = pattern + symbols[increment];
var ampersand = "";
console.log(increment);
if (increment > 30) {
for (var another = 0; another < 20; another++) {
console.log(ampersand);
ampersand = ampersand + ["-" , "_"]
}
}
}