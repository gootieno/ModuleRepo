const select = () => {
  /* Write queries for each of the following */

  /* Section 1 */
  // 1. Get all seeded fruit elements
  // Your code here
  const seeded = document.getElementsByClassName("seed");
  console.log("seeded ", seeded);
  // 2. Get all seedless fruit elements
  // Your code here
  const seedless = document.querySelectorAll("li.seedless");
  console.log("seedless ", seedless);
  // 3. Get first seedless fruit element
  // Your code here
  let firstSeedlessFruit = document.querySelectorAll(".seedless")[0];
  console.log("first seedless fruit ", firstSeedlessFruit);
  /* Section 2 */
  // 4. Get inner span with text "you"
  // Your code here
  const you = document.querySelector("span");
  console.log("you ", you);
  // 5. Get all children of element "wrapper"
  // Your code here
  const listWrapper = document.getElementById("wrapper");
  const children = listWrapper.children;
  console.log("list wrapper children ", children);
  // 6. Get all odd number list items in the list
  // Your code here
  const odds = document.querySelectorAll(".odd");
  console.log("odds ", odds);
  // 7. Get all even number list items in the list
  // Your code here
  const evens = document.querySelectorAll("ol > li:not(.odd)");
  console.log("evens ", evens);
  /* Section 3 */
  // 8. Get all tech companies without a class name
  // Your code here
  let companies = document.querySelectorAll("section a[href]")[0];
  console.log("company ", companies);
  // 9. Get "Amazon" list element
  // Your code here
  const amazon = document.getElementsByClassName("shopping")[0];
  console.log("amazon ", amazon);
  // 10. Get all unicorn list elements (not the image element)
  // Your code here
  const unicornList = document.querySelectorAll(
    "ul > li:not(.seed):not(.seedless)"
  );

  console.log("unicorn list ", unicornList);
};

window.onload = select;
