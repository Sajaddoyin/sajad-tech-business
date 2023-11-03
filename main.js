alert("hello world")

// const welcome = document.querySelector ('.welcome');

// const header = document.createElement ('h2');

// const headercontent =CreateTextNode('Tech Home.',);
// header .appendChild(headercontent);

// welcome .appendChild(header);

const links = document.querySelector("ul");
const hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", function() {
      if (links.classList.contains("show")) {
        links.classList.remove("show")
      } else {
        links.classList.add("show")
      }
    } 
    );