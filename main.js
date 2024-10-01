const truman = document.querySelector("#truman");

appendEndless();

function appendEndless() {
    for (let index = 0; index < 200; index++) {
        const br = document.createElement("br");
        truman.append(br);
        truman.append(`randomTruman()`);
    }
}
function randomTruman() {
    let char = "truman";
    let result = "";
    let ran;
    let i = 6;
    while (i>1) {
        ran = Math.floor(Math.random()*i);
        result += char.charAt(ran);
        char = char.replace(char.charAt(ran),"");
        i--;
    }
}
window.onscroll = function() {
    // append every 100 pixels
    if(window.scrollY % 100 == 0) {
        appendEndless();
    }
}
