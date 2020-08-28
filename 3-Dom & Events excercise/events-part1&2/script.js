const heading = document.querySelector("#change_heading");
const nhead = document.querySelector(".selected");
const bColors = document.querySelector("section");

//1. Replace the text "Change me" with "Hello World!".
heading.textContent = "Hello World";

/*2. When a user hovers over one of the colored boxes change the text to display the color that is being hovered over.*/
bColors.addEventListener("mouseover", (e) => {
  nhead.textContent = e.target.className;
});

//3. Create a new div element.
const nDiv = document.createElement("div");

//4. Give your new div a class of purple and style it so that it has a background color of purple.
nDiv.className = "purple";

//5. Append your new div to the page to the section tag.
bColors.append(nDiv);

/*Part 2
// Create a racing game with the two cars. When the race button is pressed, the two cars should move across the screen until one of them is at the end of the screen. When one of the blocks reaches the end - you should alert "winner!" */

const button = document.querySelector("button");
const car1 = document.querySelector(".car1");
const car2 = document.querySelector(".car2");

car1.style.marginLeft = 0;
car2.style.marginLeft = 0;

const reset = (car1, car2) => {
  clearTimeout(car1.timer);
  clearTimeout(car2.timer);
  car1.style.marginLeft = 0;
  car2.style.marginLeft = 0;
  button.disabled = false;
};

button.addEventListener("click", () => {
  button.disabled = true;
  car1.timer = setInterval(() => {
    car1.style.marginLeft =
      parseInt(car1.style.marginLeft) + Math.random() * 60 + "px";
    if (parseInt(car1.style.marginLeft) > window.innerWidth) {
      alert("Car 1 wins!");
      reset(car1, car2);
    }
  }, 100);

  car2.timer = setInterval(() => {
    car2.style.marginLeft =
      parseInt(car2.style.marginLeft) + Math.random() * 60 + "px";
    if (parseInt(car2.style.marginLeft) > window.innerWidth) {
      alert("Car 2 wins!");
      reset(car1, car2);
    }
  }, 100);
});
