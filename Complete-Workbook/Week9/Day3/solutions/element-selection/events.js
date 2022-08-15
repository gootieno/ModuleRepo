window.addEventListener("DOMContentLoaded", () => {
  // Your code here

  // select the element to target

  // create a function for event

  // add a listener to the event

  //   window.alert("The DOM has loaded");

  const section3 = document.getElementById("section-3");

  const colorSelect = document.getElementById("color-select");

  const changeColor = () => {
    const color = colorSelect.value;

    section3.style.backgroundColor = color;
  };

  colorSelect.addEventListener("change", changeColor);

  const redButton = document.getElementById("red-input");

  const redInputEvent = () => {
    if (redButton.value === "red") {
      redButton.style.backgroundColor = "red";
    }
  };

  redButton.addEventListener("input", redInputEvent);

  const addItem = document.getElementById("add-item");

  const addLi = () => {
    let listItem = document.getElementById("list-add");

    let item = listItem.value;
    console.log(item);
    let listElement = document.createElement("li");

    listElement.innerText = item;

    let ul = document.getElementsByTagName("ul")[0];

    ul.appendChild(listElement);

    listItem.value = "";
  };

  addItem.addEventListener("click", addLi);

  const removeListener = document.getElementById("remove-listeners");

  removeListener.addEventListener("click", function () {
    // window.location.reload();
    redButton.removeEventListener("input", redInputEvent);
    colorSelect.removeEventListener("change", changeColor);
    addItem.removeEventListener("click", addLi);
  });
});

/*   Adding and removing event listeners

    1. select element to listen on
    const redButton = document.getElementById("red-input");

    2. create a function that runs when the element is 
       given an event listener

        const redInputEvent = () => {
            if (redButton.value === "red") {
            redButton.style.backgroundColor = "red";
            }
        };


    3. add an event listener and pass in the event and function to run
        when event is triggered
        addItem.addEventListener("click", addLi);


        REMOVING THE LISTENER

    4. In our example there is a button to click that triggers the listener
        but the remove listener just needs an element we are listening on and what 
        event we need to remove

        redButton.removeEventListener("input", redInputEvent);

        Note that from how we set up the addEventListener the only difference
        with removing the event listener is swapping "addEventListener" and "removeEventListener". 
        the rest of the code is identical. 

*/
