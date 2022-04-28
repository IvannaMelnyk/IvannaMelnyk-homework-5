let addJokes = document.querySelector(".add-jokes");
let jokes = document.querySelector(".jokes");
let jokesArray = [];

addJokes.addEventListener("click", function () {
  // console.log("success");
  getJoke();
});

function createExpression(content) {
  let expression = document.createElement("div");
  expression.classList.add("expression");
  let li = document.createElement("li");
  li.textContent = content;
  let checker = document.createElement("input");
  checker.type = "checkbox";
  expression.append(li);
  expression.append(checker);
  jokes.append(expression);
  checker.addEventListener("click", editCheckbox);
  li.addEventListener("click", deleteExpression);
}
//When clicked on a joke remove it from a page
function deleteExpression() {
  console.log(this);
  let index = jokesArray.indexOf(this.textContent);
  console.log(index);
  jokesArray.splice(index - 1, 1);
  console.log(jokesArray);
  this.parentElement.remove();
}

function editCheckbox() {
  if (this.checked) this.parentElement.classList.add("checked");
  else this.parentElement.classList.remove("checked"); //When checkbox is clicked - make a checkbox is bold
}
function getJoke() {
  let jokeMessage = fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      // console.log(response.json());

      return response.json();
    })
    .then((data) => {
      createExpression(data.value);
      jokesArray.push(data.value);
      // console.log(jokesArray);
    });
}
