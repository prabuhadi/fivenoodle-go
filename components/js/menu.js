const menuNoodle = document.querySelectorAll(".nav-link-menu");
const foodItems = document.querySelectorAll(".meal");

let activeMenu = "all";

showFoodMenu(activeMenu);

menuNoodle.forEach((menu) => {
  menu.addEventListener("click", () => {
    resetActiveMenu();
    showFoodMenu(menu.id);
    menu.classList.add("main-color");
  });
});

function resetActiveMenu() {
  menuNoodle.forEach((menu) => {
    menu.classList.remove("main-color");
  });
}

function showFoodMenu(newMenu) {
  activeMenu = newMenu;
  foodItems.forEach((item) => {
    if (item.classList.contains(activeMenu)) {
      item.style.display = "grid";
    } else {
      item.style.display = "none";
    }
  });
}
