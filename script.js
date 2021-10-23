const dropdowns = document.querySelectorAll("aside ul li.dropdown");

const dropdownBtns = document.querySelectorAll("aside ul li.dropdown a button");

const profileBtn = document.querySelector(
  "main header div.end div.profile button"
);

const profileDropdown = document.querySelector(
  "main header div.end div.profile"
);

for (let i = 0; i < dropdownBtns.length; i++) {
  let btn = dropdownBtns[i];
  let dropdown = dropdowns[i];
  btn.addEventListener("click", () => {
    if (dropdown.className == "dropdown open") {
      dropdown.classList.remove("open");
    } else {
      dropdown.classList.add("open");
    }
  });
}

console.log(profileBtn);

profileBtn.addEventListener("click", () => {
  if (profileDropdown.className == "profile open") {
    profileDropdown.classList.remove("open");
  } else {
    profileDropdown.classList.add("open");
  }
});

console.log(profileBtn);
