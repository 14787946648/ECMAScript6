let int = self.setInterval("clock()", 15000);
let count = 1;
function clock() {
    document.querySelector(`#d${count-1}`).style.display = "none";
    document.querySelector(`#d${count}`).style.display = "block";
    count++;
    if (count == 13) {
        window.opener = null;
        window.open('', '_self');
        window.close();
    } else if (count % 3==0) {
        window.scrollBy(0, 1000);

    }

}
