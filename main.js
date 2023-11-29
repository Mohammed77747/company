let img = document.querySelector(".img");
let con = document.querySelector(".container");

function phonse(x){
    img.src = x;
}

function colors(c){
    con.computedStyleMap.background = c;
}