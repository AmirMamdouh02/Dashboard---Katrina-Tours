const backtotop = document.querySelector(".back-to-top");
const toggleSidebarBtn = document.querySelector(".toggle-sidebar-btn");

const excludeInput = document.getElementById("exclude-input");
const includeInput = document.getElementById("include-input");
const excludeBtn = document.getElementById("exclude-btn");
const includeBtn = document.getElementById("include-btn");
const excludeUl = document.querySelector(".exclude-ul");
const includeUl = document.querySelector(".include-ul");

if (toggleSidebarBtn) {
  toggleSidebarBtn.addEventListener("click", (e) => {
    document.querySelector("body").classList.toggle("toggle-sidebar");
  });
}

if (backtotop) {
  $(window).scroll(() => {
    if (window.scrollY > 100) {
      backtotop.classList.add("active");
    } else {
      backtotop.classList.remove("active");
    }
  });
}

excludeBtn &&
  excludeBtn.addEventListener("click", () => {
    excludeInput.value != "" &&
      (excludeUl.innerHTML += `<li>${excludeInput.value}</li>`);
    excludeInput.value = "";
  });
includeBtn &&
  includeBtn.addEventListener("click", () => {
    includeInput.value != "" &&
      (includeUl.innerHTML += `<li>${includeInput.value}</li>`);
    includeInput.value = "";
  });
