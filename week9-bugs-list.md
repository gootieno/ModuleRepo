# Week 9 Bugs List

## DOM Elements Quiz

 **How do you change the text in the title tag to inside of the head of an HTML document?**

Just has a small typo should be:

**How do you change the text in the title tag inside of the head of an HTML document?**


## **Default Behavior Quiz**

 * Reword quiz

# Practice Assessment and Assessment Bugs

 **Problem with Spec #3 on Part 1 of Assessment (pt 17 selection manipulation-main)**

Directions:  Select all of the elements with the class of "odd" and add a box shadow. You
may choose your own box-shadow values.

Problem that needs to be addressed:  Students are supposed to grab all elements with the class of "odd" and add a box shadow, however the specs passed a student when they just used a query selector to grab the first item with the class of odd. 

CORRECT ANSWER:

const odds = document.querySelectorAll(".odd");
odds.forEach(el => {
    el.style.boxShadow = "10px 10px 10px black"
})

EXAMPLE OF INCORRECT ANSWER THAT SPECS CONSIDERED CORRECT:

const odd = document.querySelector(".odd");
odd.style.boxShadow = "10px 10px 10px black"
