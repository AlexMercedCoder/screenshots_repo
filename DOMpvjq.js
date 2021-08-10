///////////////////////////////////////
// Selecting an element by element, class, id
///////////////////////////////////////
// PLAIN VANILLA JS
const h1 = document.querySelector("h1");
const byClass = document.querySelector(".class");
const byId = document.querySelector("#id");
// jQuery
const $h1 = $("h1");
const $byClass = $(".class");
const $byId = $("#id");

///////////////////////////////////////
// Creating a New Element and Appending to the Body
///////////////////////////////////////
// PLAIN VANILLA JS
const NewH1 = document.createElement("h1");
NewH1.innerText = "I am a new h1";
document.querySelector("body").appendChild(NewH1);
// jQuery "<h1>" means a new element
const $NewH1 = $("<h1>");
$NewH1.text("I am a new h1");
$("body").append(NewH1);

///////////////////////////////////////
// Changing a CSS Style or Adding a Class
///////////////////////////////////////
// PLAIN VANILLA JS
const div = document.querySelector("div");
div.style.backgroundColor = "black";
div.style.color = "white";
div.classList.add("SomeClass");
// jQuery "<h1>" means a new element
const $div = $("div");
$div.css("background-color", "black").css("color", "white");
$div.addClass("SomeClass");

///////////////////////////////////////
// Adding a Click Event to a Button
///////////////////////////////////////
// PLAIN VANILLA JS
const button = document.querySelector("button");
button.addEventListener("click", (event) => {
  console.log("I've been clicked");
});
// jQuery "<h1>" means a new element
const $button = $("button");
button.on("click", (event) => {
  console.log("I've been clicked");
});

///////////////////////////////////////
// Selecting Many li tags and loops through them
///////////////////////////////////////
// PLAIN VANILLA JS
const manylis = document.querySelectorAll("li");
manylis.forEach((li, index) => {
  li.innerHTML = `<h1>${index}</h1>`;
});
// jQuery "<h1>" means a new element
const $manylis = $("li");
$manylis.Each(function (index, li) {
  $(li).html(`<h1>${index}</h1>`);
});

///////////////////////////////////////
// Logging the Value of a Text Input when a form is submitted
///////////////////////////////////////
// PLAIN VANILLA JS
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("input[type='text']");
  console.log(input.value);
});
// jQuery "<h1>" means a new element
const $form = $("form");
$form.on("submit", (event) => {
  event.preventDefault();
  const $input = $("input[type='text']");
  console.log($input.val());
});

///////////////////////////////////////
// Set src Attribute of an Image Tag
///////////////////////////////////////
// PLAIN VANILLA JS
const img = document.querySelector("img");
img.setAttribute("src", "./images.jpg");
// jQuery "<h1>" means a new element
const $img = $("img");
$img.attr("src", "./images.jpg");
