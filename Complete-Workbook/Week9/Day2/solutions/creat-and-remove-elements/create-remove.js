/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();

    const url = data.message; // URL of new dog image
    console.log("breed url ", url);

    const urlParts = url.split("/");
    console.log("url parts array ", urlParts);

    const breed = urlParts[urlParts.length - 2];
    console.log("breed ", breed);

    /*--------------- Get breed (Hint: Parse from URL) ---------------- */
    // Your code here

    /*------------ Create new dog card with the url above ------------- */
    /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
    // Your code here

    /* Add the new dog card as a child to the ul in the .gallery element */
    // Your code here

    /*
        <li>
            <figure>
                <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg" />
                <figcaption>hound-afghan</figcaption>
            </figure>
        </li>
        */
    const li = document.createElement("li");
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figCaption = document.createElement("figcaption");

    // can add inline styling
    li.style.border = "5px solid red";

    // elements with attributes... set the attribute value
    img.setAttribute("src", url);
    figCaption.innerText = breed;

    //append elements to a parent
    figure.append(img, figCaption);
    li.append(figure);

    //append top level parent(s) to a live DOM element
    const gallery = document.getElementsByClassName("gallery")[0];
    console.log("gallery ", gallery);
    const galleryLists = gallery.querySelector("ul");

    console.log("gallery list ", galleryLists);
    galleryLists.appendChild(li);
  } catch (e) {
    console.log("Couldn't fetch dog :(");
  }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
  /*-------------------- Select the first dog card --------------------- */
  // Your code here
  /*-------------------- Remove the first dog card --------------------- */
  // Your code here
  const firstDog = document.querySelector("ul > li");

  console.log("first dog ", firstDog);
  firstDog.remove();
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
  /*-------------------- Select the last dog card ----------------------- */
  // Your code here
  /*-------------------- Remove the last dog card ----------------------- */
  // Your code here
  const dogs = document.querySelectorAll("ul > li");
  console.log("dogs ", dogs);

  dogs[dogs.length - 1].remove();
});
