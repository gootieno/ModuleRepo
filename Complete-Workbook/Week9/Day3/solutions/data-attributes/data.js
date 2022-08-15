// Your code here
window.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add");

  const input = document.getElementById("name");

  const list = document.getElementById("shopping-list");

  addButton.addEventListener("click", (event) => {
    // because the elements are wrapped in a form element we
    // have to prevent the default behavior that triggers
    // within a form element (refreshing). Without event.preventDefault()
    // our page will refresh simulating a form submission.
    event.preventDefault();

    // value coming from the input field element
    let item = input.value;
    // value coming from the select field element
    const type = document.getElementById("type").value;

    // To render the content we create a list item and set the
    // data- attribute to a bananable variable (in this case "type")
    // using the set attribute method.
    let listElement = document.createElement("li");
    listElement.setAttribute("data-type", type);

    // Finally we set the inner text of the list element to the value
    // coming from our input field and append it to something that already
    // exists in the DOM (in our case the ul)
    listElement.innerText = item;
    list.appendChild(listElement);
  });
});
