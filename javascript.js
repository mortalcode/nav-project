let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar-nav");

btn.onclick = function () {
  sidebar.classList.toggle("active");
};
