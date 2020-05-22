"use strict";

let int = self.setInterval("clock()", 12000);
let count = 1;
function clock() {
    document.querySelector(`#d${count}`).style.display = "block";
    count++;
    if (count == 13) {
        window.opener = null;
        window.open('', '_self');
        window.close();
    } else if (count => 4) {
        window.scrollBy(0, 1000);
    }
}