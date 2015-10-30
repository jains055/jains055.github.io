
console.log("");

var symbols = ["7", "#", "*", "0", "1", "&", "*", "# ", "+", "=", "^", "%", "$ ", "&", "/", "5", "9", "2 ", "!", "`", "~", "0", "3 ", "7", "7", "7",]

var pattern = "7";

for (var increment = 0; increment < symbols.length; increment++) {
console.log(pattern);
pattern = pattern + symbols[increment];
var ampersand = "";
console.log(increment);
if (increment > 25) {
for (var another = 0; another < 16; another++) {
console.log(ampersand);
ampersand = ampersand + ["-" , "_"]
}
}
}