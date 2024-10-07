const truman = document.querySelector("#truman");

appendEndless();
function setup() {
    document.title = randomName("truman") + " " + randomName("olcott");
}
function appendEndless() {
    for (let index = 0; index < 200; index++) {
        const br = document.createElement("br");
        truman.append(br);
        truman.append("", randomName("truman") + " " + randomOlcott("olcott"));
    }
}

function randomName(name) {
    let result = name.charAt(0);
    name = name.replace(name.charAt(0),"");
    let ran;
    let i = name.length;
    while (i>0) {
        ran = Math.floor(Math.random()*i);
        result += name.charAt(ran);
        name = name.replace(name.charAt(ran),"");
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
        document.title = randomName("truman") + " " + randomOlcott("olcott");
    }
}
