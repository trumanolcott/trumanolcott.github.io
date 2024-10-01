const truman = document.querySelector("#truman");

appendEndless();

function appendEndless() {
    for (let index = 0; index < 200; index++) {
        const br = document.createElement("br");
        truman.append(br);
        createElement(randomTruman());
        //truman.append("t");
    }
}
function randomTruman() {
    let char = "ruma";
    let result = "t";
    let ran;
    let i = 4;
    while (i>0) {
        ran = Math.floor(Math.random()*i);
        result += char.charAt(ran);
        char = char.replace(char.charAt(ran),"");
        i--;
    }
  result += "n"
  return result;
}
window.onscroll = function() {
    // append every 100 pixels
    if(window.scrollY % 100 == 0) {
        appendEndless();
        document.title = randomTruman();
    }
}
