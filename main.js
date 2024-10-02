const truman = document.querySelector("#truman");

appendEndless();
function setup() {
    document.title = randomTruman() + " " + randomOlcott();
}
function appendEndless() {
    for (let index = 0; index < 200; index++) {
        const br = document.createElement("br");
        truman.append(br);
        //createElement(randomTruman());
        truman.append("", randomTruman() + " " + randomOlcott());
    }
}
function randomTruman() {
    let char = "ruman";
    let result = "t";
    let ran;
    let i = 5;
    while (i>0) {
        ran = Math.floor(Math.random()*i);
        result += char.charAt(ran);
        char = char.replace(char.charAt(ran),"");
        i--;
    }
  return result;
}

function randomOlcott() {
    let char = "lcott";
    let result = "o";
    let ran;
    let i = 5;
    while (i>0) {
        ran = Math.floor(Math.random()*i);
        result += char.charAt(ran);
        char = char.replace(char.charAt(ran),"");
        i--;
    }
  return result;
}
window.onscroll = function() {
    console.log(window.scrollY);
    // append every 100 pixels
    //window.scrollY % 100 == 0
    if ((window.innerHeight + Math.round(window.scrollY)) >= (document.body.offsetHeight - 1000)) {
        appendEndless();
        document.title = randomTruman() + " " + randomOlcott();
    }
}
