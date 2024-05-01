// testing files are linked
// function testingLink() {
//     console.log("This file is linked!");
// }
// testingLink();

// colors for eyes and fur
// const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

// let randomColor = 

// game object or class
const tamagotchi = {
    name: "",
    age: 0,
    health: 100,
    hunger: 0,
    fatigue: 0,
    boredom: 0,
    // FurColor: randomColor,
    // eyesColor: randomColor
}

// let counter = 0;
const $h1 = $("h1");
const $h2 = $("h2");
// const $h3 = $("ul");
const $pnl = $("#petNameLabel");
const $pn = $("#petName");
const $li = $("li");
// let $age = $("tamagotchi.age");
// let $heal = $(tamagotchi.health);
// let $hu = $(tamagotchi.hunger);
// let $fa = $(tamagotchi.fatigue);
// let $bor = $(tamagotchi.boredom);

// $("tamagotchi.name").css("font-family", "bree", "sans-serif")
// $("tamagotchi.name").css({"font-size": "16px", "color": "white", "font-weight": "200", "display": "inline"})

$("h1").css("font-family", "bree", "sans-serif")
$("h1").css({ "font-size": "80px", "color": "white", "font-weight": "800", "font-style": "normal", "line-height": .95 })

$("h2").css("font-family", "parlare")
$("h2").css({ "font-weight": "400", "font-style": "normal", "font-size": "36px", "line-height": ".01" })

// $("h3").css("font-family", "bree", "sans-serif")
// $("h3").css({ "font-size": "16px", "color": "white", "font-weight": "200", "line-height": "5" })

$("#pnl").css("font-family", "bree", "sans-serif")
$("#pnl").css({ "font-size": "16px", "color": "white", "font-weight": "200", "line-height": "3", "display": "inline" })

// event listeners/handlers that call methods

function returnText() {
    tamagotchi.name = document.getElementById("userInput").value;
    // tamagotchi.name = userInput.value;
    $("#userInput").replaceWith(`${tamagotchi.name}`)
}

// $("pn").css({"padding-left": "5px", "min-width": "100px"})

$("div").css("font-family", "bree", "sans-serif")
$("div").css({ "font-size": "16px", "color": "white", "list-style-type": "none", "font-weight": "200", "line-height": "1", "display": "inline", "padding-left": "50px", "paddijng-right": "50px" })

$("hr").css({ "width": "60%", "height": "2px" })

{/* <div>
$(".statsValues").css{ "font-size": "24px", "color": "white", "list-style-type": "none", "font-weight": "200", "line-height": "1", "display": "inline", "padding-left": "50px", "padding-right": "50px" })
</div> */}

function fillwithtext(text, ageValSpace) {
    document.getElementById("ageValSpace").innerHTML = $age;
}

$(".actions").css({ "height": "40px", "font-size": "24px", "border-radius": "16px", "width": "100px" })

$("#lightSwitch").css("height", "200px")
$("#character").css("height", "500px")

// continuously get value of variable
// pass variables to html

for (let age = 0; age < 10000; age++) {
    $hu++;
    $fa++;
    $heal -= 4;
    $boredom++;
}

if (age = 1) {
    $("#character").attr("src", "betterTamagotchi_hatching.png")
} else if (age = 2) {
    $("#character").attr("src", "betterTamagotchi_hatched.png")
} else if (age > 2) {
    $("#character").attr("src"), "betterTamagotchi_happy.png"
} else if (age = 10000) {
    $("#character").attr("src"), "betterTamagotchi_death.png"
}

function feed() {
    tamagotchi.hunger--;
    $("#hungerValSpace").text(tamagotchi.hunger)
}

function play() {
    tamagotchi.boredom--;
    tamagotchi.fatigue++;
    $("#character").animate({ right: "+=200px" });
}

function sleep() {
    tamagotchi.fatigue--;
    tamagotchi.health++;
    $("#character").attr("src"), "img/off.png"
    $(document).css("background-color", "black")
}

function loss() {
    if (tamagotchi.health == 0 || tamagotchi.hunger == 100 || tamagotchi.fatigue == 100 || tamagotchi.boredom == 100) {
        $("#character").attr("src"), "betterTamagotchi_death.png"
    }
}

console.log($age);