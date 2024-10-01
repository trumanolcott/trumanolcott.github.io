const cammel = document.querySelector("#truman");

appendEndless();

function appendEndless() {
    for (let index = 0; index < 200; index++) {
        const br = document.createElement("br");
        truman.append(br);
        truman.append(`turman`);
    }
}

window.onscroll = function() {
    // append every 100 pixels
    if(window.scrollY % 100 == 0) {
        appendEndless();
    }
}
