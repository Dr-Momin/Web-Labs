var logOne = setTimeout(function() {
    console.log("one!");
}, Math.random() * 1000);
var logTwo = setTimeout(function() {
    console.log("two!");
}, Math.random() * 1000);
inOrder(logOne, logTwo);
// one
// two
// it should always log those two in order regardless of their
timing
