let header1 = "h1";
let header2 = "h2";
let button1 = "#button1";
let button2 = "#button2";

let count = 0;
$("#button1").click (function() {
count++;
$(header2).text(count)
});
$("#button2").click (function() {
    count = count-1;
    $(header2).text(count)
    });