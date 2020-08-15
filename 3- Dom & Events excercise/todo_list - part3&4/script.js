const list = document.querySelector("ul");
const form = document.querySelector("form");
//adding todos
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const textInput = document.querySelector("#todos").value.trim();
  const html = `<li>${textInput}<span class="material-icons">clear</span></li>`;
  if (textInput) {
    list.insertAdjacentHTML("afterbegin", html);
    storeTodos();
  }
  form.reset();
});
//striking and deleting todos
list.addEventListener("click", (e) => {
  const a = e.target;
  a.className == "checked"
    ? a.classList.remove("checked")
    : a.classList.add("checked");
  if (a.tagName == "SPAN") {
    a.parentElement.remove();
  }
  storeTodos();
});
const storeTodos = () => (localStorage.myitems = list.innerHTML);
const getTodos = () => {
  let storedValues = localStorage.myitems;
  if (storedValues) {
    list.innerHTML = storedValues;
  } else {
    list.innerHTML = "";
  }
};
getTodos();
