//Mouse click Event

document.getElementById("clickBtn").addEventListener("click", function () {
  alert("Button clicked! wadhah guys? any question?");
});

//Mouse move Event
document.addEventListener("mousemove", function (event) {
  const output = document.getElementById("output");
  //   console.log("output", output);
  output.innerText = `mouse position : x=${event.clientX} , y=${event.clientY}`;
});

// input field change event
document
  .getElementById("textInput")
  .addEventListener("input", function (event) {
    // const output = document.getElementById("output");
    output.innerText = `Input value ${event.target.value}`;
  });

//change InnerText
// const InnerText = document.getElementById("myText");
// InnerText.innerText = "InnerText updated";
// console.log("InnerText", InnerText);
//change outerHtml

const outerHTML = document.getElementById("myText");
outerHTML.outerHTML = `<h3 style="color:red;">uterHtml Remplaced !</h3>`;
// console.log("outerHTML", outerHTML);

//change innerHtml
// const innerHTML = document.getElementById("myText");
// innerHTML.innerHTML = `<h5 style="color:red;">innerHTML content added</h5>`;
// console.log("innerHTML", innerHTML);

//step 2 : finding HTML elements

// getElementById
const element = document.getElementById("myText");
console.log("element", element);
//getElementsByClassName
const elements = document.getElementsByClassName("hightlight");
console.log("elements", elements);
//getElemenetsByTagName
const listItems = document.getElementsByTagName("p");
console.log("listItems", listItems);
//querySelector
const firstparagraph = document.querySelector("#output");
console.log("firstparagraph", firstparagraph);
//querySelectorAll
const paragraphs = document.querySelectorAll(".hightlight");
console.log("paragraphs", paragraphs);

const form = document.getElementById("dataForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value.trim();
  //   console.log("name:", name, ".");

  let messages = [];

  if (!name) {
    messages.push("Name is required.");
  }

  if (!email.includes("@") && !email) {
    messages.push("email is required.");
  }
  if (!age) {
    messages.push("age is required");
  }
  if (age < 10 || age > 90) {
    messages.push("age will be between 10 and 90");
  }

  const formData = { name, email, age };
  localStorage.setItem("formData", JSON.stringify(formData));

  window.location.href = "../ResultForm/ResultForm.html";

  console.table(messages);
});
